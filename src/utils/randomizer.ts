import type { WheelOption, BreachParameters, DataType, NegligenceFactor } from '../types';
import {
  breachTypeOptions,
  recordScaleOptions,
  dataTypeOptions,
  industryOptions,
  discoveryDelayOptions,
  toneOptions,
  negligenceOptions,
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

// Select negligence factors (1-3)
export function selectNegligenceFactors(): NegligenceFactor[] {
  const count = Math.floor(Math.random() * 3) + 1; // 1-3 factors
  const selected: NegligenceFactor[] = [];
  const available = [...negligenceOptions];

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

// Company name generator for YOLO mode - inspired by real companies
const companyPrefixes = [
  // Generic corporate
  'Trusted', 'Secure', 'Global', 'United', 'Premier', 'Elite', 'Advanced',
  'Digital', 'Cloud', 'Smart', 'Cyber', 'Data', 'Info', 'Tech', 'Net',
  'Mega', 'Ultra', 'Super', 'Prime', 'Alpha', 'Apex', 'Core', 'Peak',
  // Inspired by breached companies
  'Equi', 'Trans', 'Capital', 'First', 'National', 'American', 'Metro',
  'Total', 'Complete', 'Absolute', 'Ultimate', 'Maximum', 'Optimal',
  'Infinite', 'Perfect', 'Superior', 'Premium', 'Platinum', 'Diamond',
];

const companySuffixes = [
  // Generic corporate
  'Systems', 'Solutions', 'Technologies', 'Corp', 'Inc', 'Group', 'Holdings',
  'Services', 'Networks', 'Security', 'Data', 'Digital', 'Labs', 'Tech',
  'Dynamics', 'Logic', 'Soft', 'Ware', 'Cloud', 'Base', 'Hub', 'Link',
  // Inspired by breached companies
  'Fax', 'Union', 'One', 'Mobile', 'Connect', 'Shield', 'Guard', 'Vault',
  'Safe', 'Lock', 'Trust', 'Credit', 'Finance', 'Bank', 'Pay', 'Pass',
];

// Ironic company name combinations for maximum effect
const ironicCompanyNames = [
  'TrustShield Security',
  'SecureVault Technologies',
  'DataGuard Systems',
  'CyberSafe Solutions',
  'PrivacyFirst Corp',
  'LockTight Security',
  'SafeData Holdings',
  'TotalProtection Inc',
  'UnbreakableShield',
  'FortressData',
  'IronClad Security',
  'BulletProof Systems',
  'HackProof Technologies',
  'InvincibleNet',
  'UltraSecure Corp',
  'MaxProtect Solutions',
  'ZeroRisk Security',
  'NeverBreach Inc',
  'AbsoluteSafe Data',
  'PerfectPrivacy',
];

export function generateCompanyName(): string {
  // 20% chance to use an ironic pre-made name
  if (Math.random() < 0.2) {
    return ironicCompanyNames[Math.floor(Math.random() * ironicCompanyNames.length)];
  }

  const prefix = companyPrefixes[Math.floor(Math.random() * companyPrefixes.length)];
  const suffix = companySuffixes[Math.floor(Math.random() * companySuffixes.length)];
  return `${prefix}${suffix}`;
}

// Executive name generator
const firstNames = [
  'John', 'Michael', 'David', 'Robert', 'James', 'William', 'Richard', 'Thomas',
  'Jennifer', 'Sarah', 'Elizabeth', 'Patricia', 'Linda', 'Barbara', 'Susan', 'Margaret',
  'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Andrew', 'Brian',
  'Kevin', 'Timothy', 'Ronald', 'Edward', 'Jeffrey', 'Charles', 'George', 'Kenneth',
  'Mary', 'Karen', 'Nancy', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Thompson', 'White', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker',
  'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill',
  'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter',
];

const executiveTitles = [
  'Chief Executive Officer',
  'Chief Information Security Officer',
  'Chief Technology Officer',
  'Chief Privacy Officer',
  'President and CEO',
  'Executive Vice President',
  'Senior Vice President of Security',
  'Head of Global Security',
  'Chief Digital Officer',
  'Chief Data Officer',
];

export function generateExecutiveName(): string {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

export function generateExecutiveTitle(): string {
  return executiveTitles[Math.floor(Math.random() * executiveTitles.length)];
}

// Generate fully random parameters for YOLO mode
export function generateRandomParameters(): BreachParameters {
  const breachType = weightedRandom(breachTypeOptions);
  const industry = weightedRandom(industryOptions);

  // Adjust probabilities based on special dates/times
  const aprilFools = isAprilFirst();
  const fridayPM = isFridayAfternoon();

  // Increase absurdity on April 1st or Friday afternoon
  const absurdityBoost = aprilFools ? 0.3 : fridayPM ? 0.15 : 0;

  return {
    companyName: generateCompanyName(),
    breachType,
    dataTypes: selectMultipleDataTypes(),
    industry,
    affectedRecords: weightedRandom(recordScaleOptions),
    discoveryDelay: weightedRandom(discoveryDelayOptions),
    tone: weightedRandom(toneOptions),
    includeThirdPartyBlame: Math.random() > (0.6 - absurdityBoost),
    includeSophisticatedAttack: Math.random() > (0.5 - absurdityBoost),
    includeNoEvidenceOfMisuse: Math.random() > 0.3,
    includeExecutiveQuote: Math.random() > 0.5,
    executiveName: generateExecutiveName(),
    executiveTitle: generateExecutiveTitle(),
    negligenceFactors: selectNegligenceFactors(),
    // Tonal sliders - random values weighted toward middle/corporate defaults
    sincerityLevel: Math.floor(Math.random() * 60) + 20, // 20-80, weighted toward corporate middle
    shadinessLevel: Math.floor(Math.random() * 70) + 30, // 30-100, weighted toward more shady
    // Set patch available days for unpatched vulnerability breaches
    patchAvailableDays: breachType === 'unpatched_vulnerability'
      ? Math.floor(Math.random() * 180) + 30 // 30-210 days
      : undefined,
  };
}

// Generate parameters for a specific breach scenario recreation
export function generateBreachScenarioParams(scenarioName: string): BreachParameters {
  const baseParams = generateRandomParameters();

  switch (scenarioName) {
    case 'The Credit Bureau Classic':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'credit_bureau',
        breachType: 'unpatched_vulnerability',
        affectedRecords: 'legendary',
        dataTypes: ['ssn', 'credit_card', 'drivers_license', 'email'],
        discoveryDelay: 'months_3_6',
        tone: 'legally_cautious',
        patchAvailableDays: Math.floor(Math.random() * 60) + 60, // 60-120 days
        negligenceFactors: ['patch_available_months', 'ignored_security_warnings'],
      };

    case 'The Plaintext Password Special':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'social_media',
        breachType: 'plaintext_passwords',
        affectedRecords: 'legendary',
        dataTypes: ['plaintext_password', 'email', 'private_messages'],
        discoveryDelay: 'years_3_plus',
        tone: 'vaguely_reassuring',
        negligenceFactors: ['no_encryption', 'excessive_data_retention'],
      };

    case 'The Billion Record Bonanza':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'technology',
        breachType: 'credential_stuffing',
        affectedRecords: 'all_of_them',
        dataTypes: ['email', 'password', 'security_questions'],
        discoveryDelay: 'years_3_plus',
        tone: 'vaguely_reassuring',
      };

    case 'The Vendor Breach Special':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'retail',
        breachType: 'third_party_vendor',
        affectedRecords: 'epic',
        dataTypes: ['credit_card', 'email'],
        discoveryDelay: 'weeks',
        tone: 'professionally_concerned',
        includeThirdPartyBlame: true,
      };

    case 'The Multi-Year Discovery':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'hospitality',
        breachType: 'insider_threat',
        affectedRecords: 'legendary',
        dataTypes: ['passport', 'credit_card', 'email', 'location_history'],
        discoveryDelay: 'years_3_plus',
        tone: 'professionally_concerned',
      };

    case 'The Serial Offender':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'telecom',
        breachType: 'credential_stuffing',
        affectedRecords: 'epic',
        dataTypes: ['ssn', 'email', 'location_history'],
        discoveryDelay: 'months_3_6',
        tone: 'aggressively_defensive',
        priorBreaches: Math.floor(Math.random() * 3) + 3, // 3-5 prior breaches
      };

    case 'The Vault Keeper Irony':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'password_manager',
        breachType: 'backup_exposure',
        affectedRecords: 'massive',
        dataTypes: ['password', 'email', 'security_questions'],
        discoveryDelay: 'months_1_3',
        tone: 'technically_transparent',
      };

    case 'The Genetic Data Disaster':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'healthcare',
        breachType: 'credential_stuffing',
        affectedRecords: 'massive',
        dataTypes: ['dna', 'email', 'medical'],
        discoveryDelay: 'months_1_3',
        tone: 'professionally_concerned',
      };

    case 'The Dating Site Disaster':
      return {
        ...baseParams,
        companyName: generateCompanyName(),
        industry: 'dating',
        breachType: 'api_exposure',
        affectedRecords: 'epic',
        dataTypes: ['email', 'private_messages', 'location_history'],
        discoveryDelay: 'from_news',
        tone: 'deeply_apologetic',
      };

    default:
      return baseParams;
  }
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

// Check if it's Cybersecurity Awareness Month (October)
export function isCyberMonth(): boolean {
  const today = new Date();
  return today.getMonth() === 9; // October
}
