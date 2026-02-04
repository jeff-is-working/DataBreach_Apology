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
  const [includeExecutiveQuote, setIncludeExecutiveQuote] = useState(false);
  const [executiveName, setExecutiveName] = useState('John Smith');
  const [executiveTitle, setExecutiveTitle] = useState('Chief Executive Officer');

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
      includeExecutiveQuote,
      executiveName: includeExecutiveQuote ? executiveName : undefined,
      executiveTitle: includeExecutiveQuote ? executiveTitle : undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-corporate-blue border-b pb-2">
        Breach Parameters
      </h2>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
          required
        />
      </div>

      {/* Breach Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type of Breach
        </label>
        <select
          value={breachType}
          onChange={(e) => setBreachType(e.target.value as BreachType)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
        >
          {breachTypeOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Data Types */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Industry */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Industry
        </label>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value as Industry)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
        >
          {industryOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Affected Records */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Number of Affected Records
        </label>
        <select
          value={affectedRecords}
          onChange={(e) => setAffectedRecords(e.target.value as RecordScale)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
        >
          {recordScaleOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Discovery Delay */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time to Discovery
        </label>
        <select
          value={discoveryDelay}
          onChange={(e) => setDiscoveryDelay(e.target.value as DiscoveryDelay)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
        >
          {discoveryDelayOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Tone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tone
        </label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value as Tone)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
        >
          {toneOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Optional Add-ons */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <span className="text-sm text-gray-700">"Sophisticated attack" justification</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeThirdPartyBlame}
              onChange={(e) => setIncludeThirdPartyBlame(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700">Third-party blame assignment</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNoEvidenceOfMisuse}
              onChange={(e) => setIncludeNoEvidenceOfMisuse(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700">"No evidence of misuse" disclaimer</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeExecutiveQuote}
              onChange={(e) => setIncludeExecutiveQuote(e.target.checked)}
              className="rounded border-gray-300 text-corporate-blue focus:ring-corporate-blue"
            />
            <span className="text-sm text-gray-700">Executive quote insertion</span>
          </label>
        </div>
      </div>

      {/* Executive Details (if quote enabled) */}
      {includeExecutiveQuote && (
        <div className="space-y-3 pl-4 border-l-2 border-corporate-blue">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Executive Name
            </label>
            <input
              type="text"
              value={executiveName}
              onChange={(e) => setExecutiveName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Executive Title
            </label>
            <input
              type="text"
              value={executiveTitle}
              onChange={(e) => setExecutiveTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
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
