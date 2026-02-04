import type { BreachParameters, GeneratedStatement, DataType } from '../types';
import {
  takingItSeriouslyPhrases,
  investigationPhrases,
  sophisticatedAttackPhrases,
  thirdPartyBlamePhrases,
  noEvidenceOfMisusePhrases,
  securityImprovementPhrases,
  creditMonitoringPhrases,
  closingPhrases,
  industryPhrases,
  toneModifiers,
  executiveQuotes,
  ironicSecurityClaims,
  actualNegligence,
} from '../data/phrases';
import { displayLabels } from '../data/wheelOptions';

// Helper to pick random item from array
function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Format data types for display
function formatDataTypes(types: DataType[]): string {
  const labels = types.map(t => displayLabels.dataType[t]?.toLowerCase() || t);
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(', ')}, and ${labels[labels.length - 1]}`;
}

// Calculate irony score based on parameters
function calculateIronyScore(params: BreachParameters): number {
  let irony = 0;

  // Industry-based irony
  if (params.industry === 'security_company') irony += 40;
  if (params.industry === 'cybersecurity_training') irony += 50;
  if (params.industry === 'password_manager') irony += 60;
  if (params.industry === 'credit_bureau') irony += 30;

  // Breach type irony
  if (params.breachType === 'unpatched_vulnerability') irony += 25;
  if (params.breachType === 'plaintext_passwords') irony += 35;
  if (params.breachType === 'default_credentials') irony += 30;
  if (params.breachType === 'password_postit') irony += 40;

  // Data type irony
  if (params.dataTypes.includes('plaintext_password')) irony += 20;
  if (params.dataTypes.includes('internal_security_emails')) irony += 25;
  if (params.dataTypes.includes('how_to_secure_search')) irony += 30;

  // Discovery method irony
  if (params.discoveryDelay === 'from_news') irony += 20;
  if (params.discoveryDelay === 'dark_web_listing') irony += 25;
  if (params.discoveryDelay === 'hacker_invoice') irony += 35;
  if (params.discoveryDelay === 'security_researcher') irony += 15;

  // Scale irony (bigger = more ironic when combined with other factors)
  if (['epic', 'legendary', 'all_of_them'].includes(params.affectedRecords)) {
    irony += 10;
  }

  // Long delays are extra ironic
  if (['years_1_2', 'years_3_plus'].includes(params.discoveryDelay)) {
    irony += 15;
  }

  return Math.min(irony, 100);
}

// Check for special combo conditions (generic names, no real companies)
function checkCombo(params: BreachParameters): string | undefined {
  // Credit Bureau Classic: Credit bureau + unpatched vulnerability + massive scale
  if (
    params.industry === 'credit_bureau' &&
    params.breachType === 'unpatched_vulnerability' &&
    ['massive', 'epic', 'legendary'].includes(params.affectedRecords)
  ) {
    return 'The Credit Bureau Classic';
  }

  // Plaintext Password Special: Social media + plaintext passwords
  if (
    params.industry === 'social_media' &&
    (params.breachType === 'plaintext_passwords' || params.dataTypes.includes('plaintext_password'))
  ) {
    return 'The Plaintext Password Special';
  }

  // Vault Keeper Irony: Password manager breach
  if (params.industry === 'password_manager') {
    return 'The Vault Keeper Irony';
  }

  // Maximum Irony: Security company or cybersecurity training gets breached
  if (
    (params.industry === 'security_company' || params.industry === 'cybersecurity_training') &&
    ['massive', 'epic', 'legendary', 'all_of_them'].includes(params.affectedRecords)
  ) {
    return 'Maximum Irony Mode';
  }

  // Vendor Breach Special: Third-party vendor compromise in retail
  if (params.industry === 'retail' && params.breachType === 'third_party_vendor') {
    return 'The Vendor Breach Special';
  }

  // Multi-Year Discovery: Hospitality + years-long breach
  if (
    params.industry === 'hospitality' &&
    ['years_1_2', 'years_3_plus'].includes(params.discoveryDelay)
  ) {
    return 'The Multi-Year Discovery';
  }

  // Billion Record Bonanza: All records + years to disclose
  if (
    params.affectedRecords === 'all_of_them' &&
    ['years_1_2', 'years_3_plus'].includes(params.discoveryDelay)
  ) {
    return 'The Billion Record Bonanza';
  }

  // Legal Nightmare Mode: Long delay with SSNs
  if (
    ['years_1_2', 'years_3_plus'].includes(params.discoveryDelay) &&
    params.dataTypes.includes('ssn')
  ) {
    return 'Legal Nightmare Mode';
  }

  // COPPA Catastrophe: Kids toy with sensitive data
  if (params.industry === 'toys' && (params.dataTypes.includes('medical') || params.dataTypes.includes('location_history'))) {
    return 'COPPA Catastrophe';
  }

  // Dating Site Disaster: Dating site breach with private messages
  if (params.industry === 'dating' && params.dataTypes.includes('private_messages')) {
    return 'The Dating Site Disaster';
  }

  // Public Humiliation Mode: Found out from external sources
  if (['from_news', 'dark_web_listing', 'hacker_invoice', 'security_researcher'].includes(params.discoveryDelay)) {
    return 'Public Humiliation Mode';
  }

  // Genetic Data Disaster: DNA data breach
  if (params.dataTypes.includes('dna')) {
    return 'The Genetic Data Disaster';
  }

  // Serial Offender: Telecom with prior breaches
  if (params.industry === 'telecom' && params.priorBreaches && params.priorBreaches > 2) {
    return 'The Serial Offender';
  }

  return undefined;
}

// Check for jackpot scenarios (rare breach pattern recreations)
function checkJackpot(): { isJackpot: boolean; jackpotType?: string } {
  const roll = Math.random();
  if (roll < 0.02) { // 2% chance for demo purposes
    const jackpots = [
      'The Credit Bureau Classic',
      'The Plaintext Password Special',
      'The Billion Record Bonanza',
      'The Vendor Breach Special',
      'The Multi-Year Discovery',
      'The Serial Offender',
      'The Vault Keeper Irony',
      'The Honest One', // Rare: actually transparent apology
      'The Non-Apology Apology',
      'The Haiku',
    ];
    return { isJackpot: true, jackpotType: randomPick(jackpots) };
  }
  return { isJackpot: false };
}

// Get appropriate greeting based on industry
function getGreeting(industry: string): string {
  const greetings: Record<string, string> = {
    healthcare: 'Patient',
    education: 'Student',
    government: 'Citizen',
    hospitality: 'Guest',
    gaming: 'Player',
    dating: 'Member',
    social_media: 'User',
  };
  return greetings[industry] || 'Customer';
}

// Generate the main statement
export function generateStatement(params: BreachParameters): GeneratedStatement {
  const combo = checkCombo(params);
  const { isJackpot, jackpotType } = checkJackpot();
  const tone = toneModifiers[params.tone];
  const industry = params.industry;
  const ironyScore = calculateIronyScore(params);

  // Get today's date for the statement
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Build the statement sections
  const sections: string[] = [];

  // Header
  sections.push(`${dateStr}\n`);
  sections.push(`Dear Valued ${getGreeting(industry)},\n`);

  // Opening statement based on tone
  sections.push(`${randomPick(tone.opening)}\n`);

  // Taking it seriously (with extra irony if applicable)
  if (ironyScore > 50) {
    sections.push(randomPick(ironicSecurityClaims) + ' ' + randomPick(takingItSeriouslyPhrases) + '\n');
  } else {
    sections.push(randomPick(takingItSeriouslyPhrases) + '\n');
  }

  // What happened section
  sections.push('WHAT HAPPENED\n');

  const breachDescription = displayLabels.breachType[params.breachType]?.toLowerCase() || params.breachType;
  const discoveryTime = displayLabels.discoveryDelay[params.discoveryDelay] || 'recently';

  // Add negligence context for certain breach types
  let negligenceNote = '';
  if (params.breachType === 'unpatched_vulnerability' && params.negligenceFactors?.includes('patch_available_months')) {
    negligenceNote = ' ' + randomPick(actualNegligence.unpatched);
  } else if (params.breachType === 'plaintext_passwords') {
    negligenceNote = ' ' + randomPick(actualNegligence.plaintext);
  }

  sections.push(
    `Our security team identified unauthorized access to our systems ${discoveryTime}. ` +
    `The incident involved ${breachDescription.startsWith('a') || breachDescription.startsWith('an') ? '' :
      ['ransomware', 'unpatched', 'exposed', 'insider'].some(w => breachDescription.includes(w)) ? '' : 'a '}${breachDescription}` +
    `${params.includeSophisticatedAttack ? '. ' + randomPick(sophisticatedAttackPhrases) : '.'}${negligenceNote}\n`
  );

  // Third party blame if enabled
  if (params.includeThirdPartyBlame || params.breachType === 'third_party_vendor') {
    sections.push(randomPick(thirdPartyBlamePhrases) + '\n');
  }

  // Investigation
  sections.push(randomPick(investigationPhrases) + '\n');

  // What information was involved
  sections.push('WHAT INFORMATION WAS INVOLVED\n');

  const recordCount = displayLabels.recordScale[params.affectedRecords] || params.affectedRecords;
  const dataTypesStr = formatDataTypes(params.dataTypes);

  sections.push(
    `The incident may have involved ${dataTypesStr} for ${recordCount} individuals. ` +
    `${params.includeNoEvidenceOfMisuse ? randomPick(noEvidenceOfMisusePhrases) : ''}\n`
  );

  // What we are doing
  sections.push('WHAT WE ARE DOING\n');
  sections.push(randomPick(securityImprovementPhrases) + ' ');

  // Add industry-specific phrase
  const industrySpecific = industryPhrases[industry as keyof typeof industryPhrases];
  if (industrySpecific && industrySpecific.length > 0) {
    sections.push(`We are implementing ${randomPick(industrySpecific)} to better protect your information.\n`);
  } else {
    sections.push('We are implementing enhanced security measures to better protect your information.\n');
  }

  // What you can do
  sections.push('WHAT YOU CAN DO\n');
  sections.push(randomPick(creditMonitoringPhrases).replace('[PROVIDER]', 'Experian') + '\n');

  sections.push(
    'We recommend that you remain vigilant by reviewing your account statements and monitoring your credit reports ' +
    'for any unauthorized activity.\n'
  );

  // Contact information
  sections.push('FOR MORE INFORMATION\n');
  const cleanCompanyName = params.companyName.toLowerCase().replace(/[^a-z0-9]/g, '');
  sections.push(
    `We have established a dedicated call center at 1-800-555-BREACH and a ` +
    `website at www.${cleanCompanyName}-incident.com ` +
    `for additional information and resources.\n`
  );

  // Closing
  sections.push(randomPick(closingPhrases) + '\n');

  // Executive quote if enabled
  if (params.includeExecutiveQuote && params.executiveName) {
    sections.push(
      `\n"${randomPick(executiveQuotes)}" ` +
      `said ${params.executiveName}, ${params.executiveTitle || 'Chief Executive Officer'}.\n`
    );
  }

  // Signature
  sections.push('\nSincerely,\n');
  sections.push(params.executiveName || 'The Security Team');
  sections.push(`\n${params.executiveTitle || 'Chief Executive Officer'}`);
  sections.push(`\n${params.companyName}\n`);

  // Disclaimer
  sections.push(
    '\n---\n' +
    'DISCLAIMER: Generated for educational and entertainment purposes only. ' +
    'This is a satirical tool and should not be used for actual breach notifications. ' +
    'Consult legal counsel for real security incidents.\n'
  );

  // Calculate authenticity score (how corporate does it sound?)
  let authenticityScore = 70;
  if (params.tone === 'professionally_concerned') authenticityScore += 15;
  if (params.tone === 'legally_cautious') authenticityScore += 10;
  if (params.includeNoEvidenceOfMisuse) authenticityScore += 5;
  if (params.includeSophisticatedAttack) authenticityScore += 5;
  if (params.includeThirdPartyBlame) authenticityScore += 5;
  authenticityScore = Math.min(authenticityScore, 99);

  return {
    text: sections.join('\n'),
    parameters: params,
    comboTriggered: combo || jackpotType,
    isJackpot,
    authenticityScore,
    ironyScore,
  };
}

// Generate a haiku for jackpot
export function generateHaiku(params: BreachParameters): string {
  const haikus = [
    `Data floating free\n${params.companyName} says sorry\nCredit monitoring`,
    `Servers were breached bad\nSophisticated attack\nWe take this serious`,
    `Your SSN\nIs now somewhere on the web\nOops, our bad, truly`,
    `Third party vendor\nIs totally to blame here\nNot us, never us`,
    `Passwords were hashed... maybe\nPlease change them just in case though\nThanks for your patience`,
    `Patch was available\nFor many months before breach\nWe take this serious`,
    `Plaintext passwords stored\nFor years in our database\nWe value your trust`,
    `Found out from the news\nThat our data was stolen\nOops, our bad, sorry`,
  ];
  return randomPick(haikus);
}

// Generate tweet-length version
export function generateTweet(params: BreachParameters): string {
  const count = displayLabels.recordScale[params.affectedRecords] || params.affectedRecords;
  return `We regret to inform you of a security incident affecting ${count} users. ` +
    `We take security seriously. Free credit monitoring: link.co/sorry #DataBreach #WereSorry`;
}
