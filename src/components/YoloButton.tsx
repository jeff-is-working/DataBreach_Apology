import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BreachParameters } from '../types';
import { generateRandomParameters } from '../utils/randomizer';
import { displayLabels } from '../data/wheelOptions';

interface YoloButtonProps {
  onGenerate: (params: BreachParameters) => void;
}

interface SlotWheelProps {
  label: string;
  value: string;
  isSpinning: boolean;
  delay: number;
}

function SlotWheel({ label, value, isSpinning, delay }: SlotWheelProps) {
  const dummyValues = ['???', '!!!', '***', '###', '$$$', '%%%', '&&&'];

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-yellow-300 mb-1 font-semibold">{label}</span>
      <div className="slot-wheel w-40 relative">
        <AnimatePresence mode="wait">
          {isSpinning ? (
            <motion.div
              key="spinning"
              className="slot-item bg-gradient-to-b from-gray-800 to-gray-900 text-yellow-400"
              animate={{
                y: [0, -48, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                ease: 'linear',
                delay: delay * 0.1,
              }}
            >
              {dummyValues[Math.floor(Math.random() * dummyValues.length)]}
            </motion.div>
          ) : (
            <motion.div
              key="stopped"
              className="slot-item bg-gradient-to-b from-gray-700 to-gray-800 text-green-400"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              {value}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function YoloButton({ onGenerate }: YoloButtonProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [currentParams, setCurrentParams] = useState<BreachParameters | null>(null);
  const [wheelStates, setWheelStates] = useState([true, true, true, true, true, true]);
  const [isJackpot, setIsJackpot] = useState(false);

  const handleYolo = () => {
    setShowSlots(true);
    setIsSpinning(true);
    setWheelStates([true, true, true, true, true, true]);
    setIsJackpot(false);

    // Generate parameters
    const params = generateRandomParameters();
    setCurrentParams(params);

    // Check for jackpot (rare combos)
    const jackpot = Math.random() < 0.01; // 1% chance for demo purposes
    setIsJackpot(jackpot);

    // Stop wheels sequentially
    const stopTimes = [1000, 1300, 1600, 1900, 2200, 2500];
    stopTimes.forEach((time, index) => {
      setTimeout(() => {
        setWheelStates(prev => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
      }, time);
    });

    // Final reveal
    setTimeout(() => {
      setIsSpinning(false);
      onGenerate(params);
    }, 3000);
  };

  const getDisplayValue = (index: number): string => {
    if (!currentParams) return '???';
    switch (index) {
      case 0: return displayLabels.breachType[currentParams.breachType];
      case 1: return displayLabels.recordScale[currentParams.affectedRecords].split(' ')[0];
      case 2: return currentParams.dataTypes.length + ' types';
      case 3: return displayLabels.industry[currentParams.industry];
      case 4: return displayLabels.discoveryDelay[currentParams.discoveryDelay].split(' ').slice(0, 2).join(' ');
      case 5: return displayLabels.tone[currentParams.tone].split(' ')[0];
      default: return '???';
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-lg shadow-xl border-4 border-yellow-500">
      <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">
        YOLO MODE
      </h2>
      <p className="text-center text-gray-400 text-sm mb-6">
        Skip the boring stuff. Let fate decide your breach scenario.
      </p>

      {/* Slot Machine Display */}
      {showSlots && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mb-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-black rounded-lg">
            <SlotWheel
              label="BREACH TYPE"
              value={getDisplayValue(0)}
              isSpinning={wheelStates[0]}
              delay={0}
            />
            <SlotWheel
              label="RECORDS"
              value={getDisplayValue(1)}
              isSpinning={wheelStates[1]}
              delay={1}
            />
            <SlotWheel
              label="DATA"
              value={getDisplayValue(2)}
              isSpinning={wheelStates[2]}
              delay={2}
            />
            <SlotWheel
              label="INDUSTRY"
              value={getDisplayValue(3)}
              isSpinning={wheelStates[3]}
              delay={3}
            />
            <SlotWheel
              label="DISCOVERY"
              value={getDisplayValue(4)}
              isSpinning={wheelStates[4]}
              delay={4}
            />
            <SlotWheel
              label="TONE"
              value={getDisplayValue(5)}
              isSpinning={wheelStates[5]}
              delay={5}
            />
          </div>

          {/* Jackpot indicator */}
          {isJackpot && !isSpinning && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center mt-4"
            >
              <span className="text-2xl font-bold text-yellow-400 jackpot-animation inline-block">
                JACKPOT! Rare Combo Achieved!
              </span>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* YOLO Button */}
      <motion.button
        onClick={handleYolo}
        disabled={isSpinning}
        className={`
          w-full py-4 px-8 rounded-lg font-bold text-xl
          ${isSpinning
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 yolo-glow'
          }
          text-gray-900 transition-all duration-300
        `}
        whileHover={!isSpinning ? { scale: 1.02 } : {}}
        whileTap={!isSpinning ? { scale: 0.98 } : {}}
      >
        {isSpinning ? (
          <span className="flex items-center justify-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              *
            </motion.span>
            SPINNING...
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              *
            </motion.span>
          </span>
        ) : (
          'SPIN THE WHEEL'
        )}
      </motion.button>

      <p className="text-center text-gray-500 text-xs mt-3">
        Weighted randomization based on real breach statistics
      </p>
    </div>
  );
}
