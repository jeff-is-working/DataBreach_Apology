import type {
  BreachType,
  DataType,
  Industry,
  Tone,
  RecordScale,
  DiscoveryDelay,
  WheelOption,
} from '../types';

export const breachTypeOptions: WheelOption<BreachType>[] = [
  { value: 'ransomware', label: 'Ransomware Attack', probability: 0.35 },
  { value: 'sql_injection', label: 'SQL Injection', probability: 0.15 },
  { value: 'misconfigured_bucket', label: 'Misconfigured S3 Bucket', probability: 0.20 },
  { value: 'insider_threat', label: 'Insider Threat', probability: 0.10 },
  { value: 'lost_laptop', label: 'Lost/Stolen Laptop', probability: 0.08 },
  { value: 'phishing', label: 'Phishing Compromise', probability: 0.08 },
  { value: 'zero_day', label: 'Zero-Day Exploit', probability: 0.02 },
  { value: 'password_postit', label: 'Post-it Note with All Passwords', probability: 0.015 },
  { value: 'tweeted_backup', label: 'Accidentally Tweeted Database', probability: 0.004 },
  { value: 'ceo_son_testing', label: "CEO's Son 'Testing' Production", probability: 0.001 },
];

export const recordScaleOptions: WheelOption<RecordScale>[] = [
  { value: 'small', label: '100 - 10,000', probability: 0.30 },
  { value: 'medium', label: '10,001 - 100,000', probability: 0.25 },
  { value: 'large', label: '100,001 - 1 Million', probability: 0.20 },
  { value: 'massive', label: '1 - 10 Million', probability: 0.15 },
  { value: 'epic', label: '10 - 100 Million', probability: 0.08 },
  { value: 'legendary', label: '100 Million+', probability: 0.019 },
  { value: 'all_of_them', label: 'All of Them', probability: 0.001 },
];

export const dataTypeOptions: WheelOption<DataType>[] = [
  { value: 'email', label: 'Email Addresses', probability: 0.25 },
  { value: 'password', label: 'Passwords (hashed... maybe)', probability: 0.20 },
  { value: 'credit_card', label: 'Credit Card Numbers', probability: 0.18 },
  { value: 'ssn', label: 'Social Security Numbers', probability: 0.15 },
  { value: 'medical', label: 'Medical Records', probability: 0.10 },
  { value: 'browser_history', label: 'Browser History', probability: 0.05 },
  { value: 'dna', label: 'DNA Sequences', probability: 0.03 },
  { value: 'therapy_notes', label: 'Therapy Session Notes', probability: 0.02 },
  { value: 'how_to_secure_search', label: '"How to Secure a Database" Searches', probability: 0.015 },
  { value: 'internal_security_emails', label: 'Internal Emails About Bad Security', probability: 0.005 },
];

export const industryOptions: WheelOption<Industry>[] = [
  { value: 'healthcare', label: 'Healthcare', probability: 0.20 },
  { value: 'financial', label: 'Financial Services', probability: 0.20 },
  { value: 'retail', label: 'Retail', probability: 0.15 },
  { value: 'technology', label: 'Technology', probability: 0.15 },
  { value: 'government', label: 'Government', probability: 0.10 },
  { value: 'education', label: 'Education', probability: 0.10 },
  { value: 'dating', label: 'Dating Site', probability: 0.05 },
  { value: 'toys', label: "Kids' Toy Manufacturer", probability: 0.03 },
  { value: 'security_company', label: 'Security Company', probability: 0.015 },
  { value: 'cybersecurity_training', label: 'Cybersecurity Training Platform', probability: 0.005 },
];

export const discoveryDelayOptions: WheelOption<DiscoveryDelay>[] = [
  { value: 'days', label: '1-7 Days', probability: 0.10 },
  { value: 'weeks', label: '1-4 Weeks', probability: 0.15 },
  { value: 'months_1_3', label: '1-3 Months', probability: 0.25 },
  { value: 'months_3_6', label: '3-6 Months', probability: 0.20 },
  { value: 'months_6_12', label: '6-12 Months', probability: 0.15 },
  { value: 'years_1_2', label: '1-2 Years', probability: 0.10 },
  { value: 'years_3_plus', label: '3+ Years', probability: 0.04 },
  { value: 'from_news', label: 'Learned About It From The News', probability: 0.009 },
  { value: 'hacker_invoice', label: 'Hackers Sent Invoice for Consulting Fees', probability: 0.001 },
];

export const toneOptions: WheelOption<Tone>[] = [
  { value: 'deeply_apologetic', label: 'Deeply Apologetic', probability: 0.10 },
  { value: 'professionally_concerned', label: 'Professionally Concerned', probability: 0.30 },
  { value: 'technically_transparent', label: 'Technically Transparent', probability: 0.15 },
  { value: 'legally_cautious', label: 'Legally Cautious', probability: 0.20 },
  { value: 'aggressively_defensive', label: 'Aggressively Defensive', probability: 0.15 },
  { value: 'vaguely_reassuring', label: 'Vaguely Reassuring', probability: 0.10 },
];

// Display labels for UI
export const displayLabels = {
  breachType: {
    ransomware: 'Ransomware Attack',
    sql_injection: 'SQL Injection',
    misconfigured_bucket: 'Misconfigured S3 Bucket',
    insider_threat: 'Insider Threat',
    lost_laptop: 'Lost/Stolen Laptop',
    phishing: 'Phishing Compromise',
    zero_day: 'Zero-Day Exploit',
    password_postit: 'Post-it Note with All Passwords',
    tweeted_backup: 'Accidentally Tweeted Database Backup',
    ceo_son_testing: "CEO's Son 'Testing' Production",
  },
  dataType: {
    email: 'Email Addresses',
    password: 'Passwords',
    credit_card: 'Credit Card Numbers',
    ssn: 'Social Security Numbers',
    medical: 'Medical Records',
    browser_history: 'Browser History',
    dna: 'DNA Sequences',
    therapy_notes: 'Therapy Session Notes',
    how_to_secure_search: '"How to Secure a Database" Search History',
    internal_security_emails: 'Internal Emails About Security Concerns',
  },
  industry: {
    healthcare: 'Healthcare',
    financial: 'Financial Services',
    retail: 'Retail',
    technology: 'Technology',
    government: 'Government',
    education: 'Education',
    dating: 'Dating Site',
    toys: "Kids' Toy Manufacturer",
    security_company: 'Security Company',
    cybersecurity_training: 'Cybersecurity Training Platform',
  },
  recordScale: {
    small: 'approximately 5,000',
    medium: 'approximately 50,000',
    large: 'approximately 500,000',
    massive: 'approximately 5 million',
    epic: 'approximately 50 million',
    legendary: 'over 100 million',
    all_of_them: 'literally everyone',
  },
  discoveryDelay: {
    days: 'within days',
    weeks: 'within weeks',
    months_1_3: 'within 1-3 months',
    months_3_6: 'within 3-6 months',
    months_6_12: 'within 6-12 months',
    years_1_2: 'within 1-2 years',
    years_3_plus: 'after more than 3 years',
    from_news: 'when we read about it in the news',
    hacker_invoice: 'when the hackers invoiced us for their services',
  },
  tone: {
    deeply_apologetic: 'Deeply Apologetic',
    professionally_concerned: 'Professionally Concerned',
    technically_transparent: 'Technically Transparent',
    legally_cautious: 'Legally Cautious',
    aggressively_defensive: 'Aggressively Defensive',
    vaguely_reassuring: 'Vaguely Reassuring',
  },
};
