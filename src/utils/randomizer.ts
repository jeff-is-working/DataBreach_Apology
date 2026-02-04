import type { WheelOption, BreachParameters, DataType } from '../types';
import {
  breachTypeOptions,
  recordScaleOptions,
  dataTypeOptions,
  industryOptions,
  discoveryDelayOptions,
  toneOptions,
} from '../data/wheelOptions';

// Weighted random selection based on probability
export function weightedRandom<T>(options: WheelOption<T>[]): T {
  const totalWeight = options.reduce((sum, opt) => sum + opt.probability, 0);
  let random = Math.random() * totalWeight;

  for (const option of options) {
    random -= option.probability;
    if (random <= 0) {
      return option.value;
    }
  }

  // Fallback to last option
  return options[options.length - 1].value;
}

// Select multiple data types (2-5)
export function selectMultipleDataTypes(): DataType[] {
  const count = Math.floor(Math.random() * 4) + 2; // 2-5 types
  const selected: DataType[] = [];
  const available = [...dataTypeOptions];

  for (let i = 0; i < count && available.length > 0; i++) {
    const totalWeight = available.reduce((sum, opt) => sum + opt.probability, 0);
    let random = Math.random() * totalWeight;

    for (let j = 0; j < available.length; j++) {
      random -= available[j].probability;
      if (random <= 0) {
        selected.push(available[j].value);
        available.splice(j, 1);
        break;
      }
    }
  }

  return selected;
}

// Company name generator for YOLO mode
const companyPrefixes = [
  'Trusted', 'Secure', 'Global', 'United', 'Premier', 'Elite', 'Advanced',
  'Digital', 'Cloud', 'Smart', 'Cyber', 'Data', 'Info', 'Tech', 'Net',
  'Mega', 'Ultra', 'Super', 'Prime', 'Alpha', 'Apex', 'Core', 'Peak',
];

const companySuffixes = [
  'Systems', 'Solutions', 'Technologies', 'Corp', 'Inc', 'Group', 'Holdings',
  'Services', 'Networks', 'Security', 'Data', 'Digital', 'Labs', 'Tech',
  'Dynamics', 'Logic', 'Soft', 'Ware', 'Cloud', 'Base', 'Hub', 'Link',
];

export function generateCompanyName(): string {
  const prefix = companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)];
  const suffix = companySuffixes[Math.floor(Math.random() * companySuffixes.length)];
  return `${prefix}${suffix}`;
}

// Executive name generator
const firstNames = [
  'John', 'Michael', 'David', 'Robert', 'James', 'William', 'Richard', 'Thomas',
  'Jennifer', 'Sarah', 'Elizabeth', 'Patricia', 'Linda', 'Barbara', 'Susan', 'Margaret',
  'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Andrew', 'Brian',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Thompson', 'White', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker',
];

export function generateExecutiveName(): string {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

// Generate fully random parameters for YOLO mode
export function generateRandomParameters(): BreachParameters {
  return {
    companyName: generateCompanyName(),
    breachType: weightedRandom(breachTypeOptions),
    dataTypes: selectMultipleDataTypes(),
    industry: weightedRandom(industryOptions),
    affectedRecords: weightedRandom(recordScaleOptions),
    discoveryDelay: weightedRandom(discoveryDelayOptions),
    tone: weightedRandom(toneOptions),
    includeThirdPartyBlame: Math.random() > 0.6,
    includeSophisticatedAttack: Math.random() > 0.5,
    includeNoEvidenceOfMisuse: Math.random() > 0.3,
    includeExecutiveQuote: Math.random() > 0.5,
    executiveName: generateExecutiveName(),
    executiveTitle: 'Chief Executive Officer',
  };
}

// April Fools check
export function isAprilFirst(): boolean {
  const today = new Date();
  return today.getMonth() === 3 && today.getDate() === 1;
}

// Friday afternoon check (increases absurdity)
export function isFridayAfternoon(): boolean {
  const now = new Date();
  return now.getDay() === 5 && now.getHours() >= 14;
}
