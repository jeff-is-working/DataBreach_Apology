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
  | 'ceo_son_testing';

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
  | 'internal_security_emails';

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
  | 'cybersecurity_training';

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
  | 'hacker_invoice';

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
}

export interface GeneratedStatement {
  text: string;
  parameters: BreachParameters;
  comboTriggered?: string;
  isJackpot: boolean;
  authenticityScore: number;
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
