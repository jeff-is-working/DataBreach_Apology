export type BreachType =
  | 'ransomware'
  | 'sql_injection'
  | 'misconfigured_bucket'
  | 'insider_threat'
  | 'lost_laptop'
  | 'phishing'
  | 'zero_day'
  | 'password_postit'
  | 'tweeted_backup'
  | 'ceo_son_testing'
  // New types based on real breaches
  | 'unpatched_vulnerability'  // Equifax-style
  | 'plaintext_passwords'      // Facebook-style
  | 'credential_stuffing'
  | 'third_party_vendor'       // Target-style
  | 'api_exposure'
  | 'backup_exposure'
  | 'default_credentials';

export type DataType =
  | 'email'
  | 'password'
  | 'credit_card'
  | 'ssn'
  | 'medical'
  | 'browser_history'
  | 'dna'
  | 'therapy_notes'
  | 'how_to_secure_search'
  | 'internal_security_emails'
  // New types based on real breaches
  | 'plaintext_password'       // Passwords stored without hashing
  | 'biometric'
  | 'drivers_license'
  | 'passport'
  | 'security_questions'
  | 'location_history'
  | 'private_messages'
  | 'financial_records';

export type Industry =
  | 'healthcare'
  | 'financial'
  | 'retail'
  | 'technology'
  | 'government'
  | 'education'
  | 'dating'
  | 'toys'
  | 'security_company'
  | 'cybersecurity_training'
  // New industries
  | 'credit_bureau'            // Equifax-style
  | 'social_media'             // Facebook-style
  | 'telecom'                  // T-Mobile-style
  | 'hospitality'              // Marriott-style
  | 'gaming'
  | 'password_manager';        // Maximum irony

export type Tone =
  | 'deeply_apologetic'
  | 'professionally_concerned'
  | 'technically_transparent'
  | 'legally_cautious'
  | 'aggressively_defensive'
  | 'vaguely_reassuring';

export type RecordScale =
  | 'small'       // 100-10,000
  | 'medium'      // 10,001-100,000
  | 'large'       // 100,001-1 million
  | 'massive'     // 1-10 million
  | 'epic'        // 10-100 million
  | 'legendary'   // 100M+
  | 'all_of_them';

export type DiscoveryDelay =
  | 'days'        // 1-7 days
  | 'weeks'       // 1-4 weeks
  | 'months_1_3'  // 1-3 months
  | 'months_3_6'  // 3-6 months
  | 'months_6_12' // 6-12 months
  | 'years_1_2'   // 1-2 years
  | 'years_3_plus'// 3+ years
  | 'from_news'   // Learned from news
  | 'hacker_invoice'
  // New delays based on real cases
  | 'security_researcher'      // Reported by external researcher
  | 'dark_web_listing';        // Found data for sale

// New type: Root cause negligence factors (inspired by real breaches)
export type NegligenceFactor =
  | 'patch_available_months'   // Equifax: patch available 2+ months
  | 'patch_available_years'    // Even worse
  | 'ignored_security_warnings'
  | 'disabled_security_tools'
  | 'no_encryption'
  | 'weak_encryption'
  | 'shared_credentials'
  | 'no_mfa'
  | 'excessive_data_retention'
  | 'no_access_logging'
  | 'single_point_of_failure'
  | 'budget_cuts'
  | 'understaffed_security'
  | 'ignored_audit_findings';

export interface BreachParameters {
  companyName: string;
  breachType: BreachType;
  dataTypes: DataType[];
  industry: Industry;
  affectedRecords: RecordScale;
  discoveryDelay: DiscoveryDelay;
  tone: Tone;
  includeThirdPartyBlame: boolean;
  includeSophisticatedAttack: boolean;
  includeNoEvidenceOfMisuse: boolean;
  includeExecutiveQuote: boolean;
  executiveName?: string;
  executiveTitle?: string;
  // New fields
  negligenceFactors?: NegligenceFactor[];
  patchAvailableDays?: number;        // How long patch was available before breach
  executivesoldStock?: boolean;       // Equifax-style insider trading
  priorBreaches?: number;             // T-Mobile-style repeat offender
}

export interface GeneratedStatement {
  text: string;
  parameters: BreachParameters;
  comboTriggered?: string;
  isJackpot: boolean;
  authenticityScore: number;
  ironyScore?: number;                // New: how ironic is this situation
}

export interface WheelOption<T> {
  value: T;
  label: string;
  probability: number;
  description?: string;
}

export interface SpinState {
  isSpinning: boolean;
  currentValues: {
    breachType?: BreachType;
    affectedRecords?: RecordScale;
    dataTypes?: DataType[];
    industry?: Industry;
    discoveryDelay?: DiscoveryDelay;
    tone?: Tone;
  };
}

// Famous breach templates for jackpot mode
export interface FamousBreachTemplate {
  name: string;
  company: string;
  year: number;
  records: RecordScale;
  description: string;
  ironyFactor: string;
}

export const famousBreaches: FamousBreachTemplate[] = [
  {
    name: 'The Equifax Special',
    company: 'Equifax',
    year: 2017,
    records: 'legendary',
    description: '147 million records exposed via unpatched vulnerability',
    ironyFactor: 'Patch was available for 2+ months; executives sold stock before disclosure',
  },
  {
    name: 'The Facebook Oopsie',
    company: 'Facebook',
    year: 2019,
    records: 'legendary',
    description: '600 million passwords stored in plaintext since 2012',
    ironyFactor: '20,000 employees could search the plaintext passwords',
  },
  {
    name: 'The Target Special',
    company: 'Target',
    year: 2013,
    records: 'epic',
    description: '40 million credit cards via HVAC vendor access',
    ironyFactor: 'Attackers used an HVAC contractor\'s credentials',
  },
  {
    name: 'The Yahoo Trilogy',
    company: 'Yahoo',
    year: 2013,
    records: 'all_of_them',
    description: '3 billion accounts - literally all of them',
    ironyFactor: 'Took 3 years to disclose; discovered during Verizon acquisition',
  },
  {
    name: 'The Marriott Marathon',
    company: 'Marriott',
    year: 2018,
    records: 'legendary',
    description: '500 million guest records from Starwood acquisition',
    ironyFactor: 'Breach started in 2014, discovered in 2018',
  },
  {
    name: 'The T-Mobile Repeat',
    company: 'T-Mobile',
    year: 2021,
    records: 'epic',
    description: '76 million records - their 5th major breach',
    ironyFactor: 'Multiple breaches, each time promising to do better',
  },
  {
    name: 'The LastPass Irony',
    company: 'LastPass',
    year: 2022,
    records: 'massive',
    description: 'Password manager loses encrypted vaults',
    ironyFactor: 'A password manager getting breached',
  },
  {
    name: 'The 23andMe Genetic Lottery',
    company: '23andMe',
    year: 2023,
    records: 'massive',
    description: 'DNA and ancestry data exposed',
    ironyFactor: 'Your literal genetic code is now out there',
  },
];
