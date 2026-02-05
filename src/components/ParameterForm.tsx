import { useState } from 'react';
import type { BreachParameters, BreachType, DataType, Industry, Tone, RecordScale, DiscoveryDelay } from '../types';
import {
  breachTypeOptions,
  recordScaleOptions,
  dataTypeOptions,
  industryOptions,
  discoveryDelayOptions,
  toneOptions,
} from '../data/wheelOptions';

interface ParameterFormProps {
  onGenerate: (params: BreachParameters) => void;
}

export function ParameterForm({ onGenerate }: ParameterFormProps) {
  const [companyName, setCompanyName] = useState('Acme Corporation');
  const [breachType, setBreachType] = useState<BreachType>('ransomware');
  const [dataTypes, setDataTypes] = useState<DataType[]>(['email', 'password']);
  const [industry, setIndustry] = useState<Industry>('technology');
  const [affectedRecords, setAffectedRecords] = useState<RecordScale>('medium');
  const [discoveryDelay, setDiscoveryDelay] = useState<DiscoveryDelay>('months_1_3');
  const [tone, setTone] = useState<Tone>('professionally_concerned');
  const [includeThirdPartyBlame, setIncludeThirdPartyBlame] = useState(false);
  const [includeSophisticatedAttack, setIncludeSophisticatedAttack] = useState(true);
  const [includeNoEvidenceOfMisuse, setIncludeNoEvidenceOfMisuse] = useState(true);
  const [includeInternBlame, setIncludeInternBlame] = useState(false);
  const [includeExecutiveQuote, setIncludeExecutiveQuote] = useState(false);
  const [executiveName, setExecutiveName] = useState('John Smith');
  const [executiveTitle, setExecutiveTitle] = useState('Chief Executive Officer');
  const [sincerityLevel, setSincerityLevel] = useState(50);
  const [shadinessLevel, setShadinessLevel] = useState(50);

  const handleDataTypeToggle = (dt: DataType) => {
    setDataTypes(prev =>
      prev.includes(dt) ? prev.filter(t => t !== dt) : [...prev, dt]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dataTypes.length === 0) {
      alert('Please select at least one data type');
      return;
    }
    onGenerate({
      companyName,
      breachType,
      dataTypes,
      industry,
      affectedRecords,
      discoveryDelay,
      tone,
      includeThirdPartyBlame,
      includeSophisticatedAttack,
      includeNoEvidenceOfMisuse,
      includeInternBlame,
      includeExecutiveQuote,
      executiveName: includeExecutiveQuote ? executiveName : undefined,
      executiveTitle: includeExecutiveQuote ? executiveTitle : undefined,
      sincerityLevel,
      shadinessLevel,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-corporate-blue dark:text-blue-400 border-b dark:border-gray-600 pb-2">
        Breach Parameters
      </h2>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Company Name
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      {/* Breach Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Type of Breach
        </label>
        <select
          value={breachType}
          onChange={(e) => setBreachType(e.target.value as BreachType)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
        >
          {breachTypeOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Data Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Data Compromised (select at least one)
        </label>
        <div className="grid grid-cols-2 gap-2">
          {dataTypeOptions.map(opt => (
            <label key={opt.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dataTypes.includes(opt.value)}
                onChange={() => handleDataTypeToggle(opt.value)}
                className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Industry
        </label>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value as Industry)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
        >
          {industryOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Affected Records */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Number of Affected Records
        </label>
        <select
          value={affectedRecords}
          onChange={(e) => setAffectedRecords(e.target.value as RecordScale)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
        >
          {recordScaleOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Discovery Delay */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Time to Discovery
        </label>
        <select
          value={discoveryDelay}
          onChange={(e) => setDiscoveryDelay(e.target.value as DiscoveryDelay)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
        >
          {discoveryDelayOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Tone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Tone
        </label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value as Tone)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
        >
          {toneOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Tonal Sliders */}
      <div className="space-y-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tone Fine-Tuning</h3>

        {/* Sincerity Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="sincerity-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sincerity Level
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {sincerityLevel}%
            </span>
          </div>
          <input
            id="sincerity-slider"
            type="range"
            min="0"
            max="100"
            value={sincerityLevel}
            onChange={(e) => setSincerityLevel(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-corporate-blue"
            aria-label="Sincerity level from hollow to genuinely sorry"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Hollow/Robotic</span>
            <span>Genuinely Sorry</span>
          </div>
        </div>

        {/* Shadiness Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="shadiness-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Shadiness Level
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {shadinessLevel}%
            </span>
          </div>
          <input
            id="shadiness-slider"
            type="range"
            min="0"
            max="100"
            value={shadinessLevel}
            onChange={(e) => setShadinessLevel(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-yellow-500"
            aria-label="Shadiness level from transparent to evasive"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Transparent</span>
            <span>Evasive/Shady</span>
          </div>
        </div>
      </div>

      {/* Optional Add-ons */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Optional Add-ons
        </label>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSophisticatedAttack}
              onChange={(e) => setIncludeSophisticatedAttack(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">"Sophisticated attack" justification</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeThirdPartyBlame}
              onChange={(e) => setIncludeThirdPartyBlame(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Third-party blame assignment</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeInternBlame}
              onChange={(e) => setIncludeInternBlame(e.target.checked)}
              className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">"The intern did it" blame</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNoEvidenceOfMisuse}
              onChange={(e) => setIncludeNoEvidenceOfMisuse(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">"No evidence of misuse" disclaimer</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeExecutiveQuote}
              onChange={(e) => setIncludeExecutiveQuote(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Executive quote insertion</span>
          </label>
        </div>
      </div>

      {/* Executive Details (if quote enabled) */}
      {includeExecutiveQuote && (
        <div className="space-y-3 pl-4 border-l-2 border-corporate-blue dark:border-blue-400">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Executive Name
            </label>
            <input
              type="text"
              value={executiveName}
              onChange={(e) => setExecutiveName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Executive Title
            </label>
            <input
              type="text"
              value={executiveTitle}
              onChange={(e) => setExecutiveTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-corporate-blue text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-800 transition-colors"
      >
        Generate Apology Statement
      </button>
    </form>
  );
}
