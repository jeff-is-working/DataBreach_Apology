import { useState } from 'react';
import { Header, ParameterForm, YoloButton, StatementOutput } from './components';
import type { BreachParameters, GeneratedStatement } from './types';
import { generateStatement } from './utils/generator';

function App() {
  const [generatedStatement, setGeneratedStatement] = useState<GeneratedStatement | null>(null);
  const [activeTab, setActiveTab] = useState<'manual' | 'yolo'>('manual');

  const handleGenerate = (params: BreachParameters) => {
    const statement = generateStatement(params);
    setGeneratedStatement(statement);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            {/* Tab Selector */}
            <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setActiveTab('manual')}
                className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                  activeTab === 'manual'
                    ? 'bg-corporate-blue text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                Manual Configuration
              </button>
              <button
                onClick={() => setActiveTab('yolo')}
                className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                  activeTab === 'yolo'
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                YOLO Mode
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'manual' ? (
              <ParameterForm onGenerate={handleGenerate} />
            ) : (
              <YoloButton onGenerate={handleGenerate} />
            )}
          </div>

          {/* Right Column - Output */}
          <div>
            <h2 className="text-xl font-bold text-corporate-blue mb-4">
              Generated Statement
            </h2>
            <StatementOutput statement={generatedStatement} />
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-500 text-sm">
          <p className="font-semibold text-gray-700 mb-2">
            Data Breach Apology Generator
          </p>
          <p>
            A satirical tool for educational and entertainment purposes only.
          </p>
          <p className="mt-2">
            This application analyzes patterns from real data breach apologies to demonstrate
            common corporate communication strategies. Do not use for actual breach notifications.
          </p>
          <p className="mt-4 text-xs text-gray-400">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
