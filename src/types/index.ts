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
  // Additional breach types
  | 'unpatched_vulnerability'  // Known vulnerability left unpatched
  | 'plaintext_passwords'      // Passwords stored without hashing
  | 'credential_stuffing'
  | 'third_party_vendor'       // Vendor access exploited
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
  // Additional industries
  | 'credit_bureau'            // Credit reporting agencies
  | 'social_media'             // Social platforms
  | 'telecom'                  // Telecommunications
  | 'hospitality'              // Hotels and hospitality
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

// Root cause negligence factors
export type NegligenceFactor =
  | 'patch_available_months'   // Patch available for months before breach
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
  includeInternBlame: boolean;
  includeExecutiveQuote: boolean;
  executiveName?: string;
  executiveTitle?: string;
  // Tonal sliders (0-100)
  sincerityLevel?: number;            // 0 = robotic/hollow, 100 = genuinely apologetic
  shadinessLevel?: number;            // 0 = transparent, 100 = shady/evasive
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

// Breach scenario templates for jackpot mode
export interface BreachScenarioTemplate {
  name: string;
  scenario: string;
  records: RecordScale;
  description: string;
  ironyFactor: string;
}

export const breachScenarios: BreachScenarioTemplate[] = [
  {
    name: 'The Credit Bureau Classic',
    scenario: 'Credit Bureau Breach',
    records: 'legendary',
    description: 'Massive records exposed via unpatched vulnerability',
    ironyFactor: 'Patch was available for months; executives sold stock before disclosure',
  },
  {
    name: 'The Plaintext Password Special',
    scenario: 'Social Platform Breach',
    records: 'legendary',
    description: 'Hundreds of millions of passwords stored in plaintext for years',
    ironyFactor: 'Thousands of employees could search the plaintext passwords',
  },
  {
    name: 'The Vendor Breach Special',
    scenario: 'Retail Chain Breach',
    records: 'epic',
    description: 'Millions of credit cards via third-party vendor access',
    ironyFactor: 'Attackers used an HVAC contractor\'s credentials',
  },
  {
    name: 'The Billion Record Bonanza',
    scenario: 'Internet Giant Breach',
    records: 'all_of_them',
    description: 'Billions of accounts - literally all of them',
    ironyFactor: 'Took years to disclose; discovered during acquisition',
  },
  {
    name: 'The Multi-Year Discovery',
    scenario: 'Hotel Chain Breach',
    records: 'legendary',
    description: 'Hundreds of millions of guest records from acquired company',
    ironyFactor: 'Breach ran for 4+ years before discovery',
  },
  {
    name: 'The Serial Offender',
    scenario: 'Telecom Breach',
    records: 'epic',
    description: 'Tens of millions of records - not their first rodeo',
    ironyFactor: 'Multiple breaches, each time promising to do better',
  },
  {
    name: 'The Vault Keeper Irony',
    scenario: 'Password Manager Breach',
    records: 'massive',
    description: 'Password manager loses encrypted vaults',
    ironyFactor: 'A password manager getting breached',
  },
  {
    name: 'The Genetic Data Disaster',
    scenario: 'DNA Testing Breach',
    records: 'massive',
    description: 'DNA and ancestry data exposed',
    ironyFactor: 'Your literal genetic code is now out there',
  },
];
