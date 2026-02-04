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
} from '../data/phrases';
import { displayLabels } from '../data/wheelOptions';

// Helper to pick random item from array
function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Format data types for display
function formatDataTypes(types: DataType[]): string {
  const labels = types.map(t => displayLabels.dataType[t].toLowerCase());
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(', ')}, and ${labels[labels.length - 1]}`;
}

// Check for special combo conditions
function checkCombo(params: BreachParameters): string | undefined {
  // Security company with massive breach = Maximum irony
  if (
    (params.industry === 'security_company' || params.industry === 'cybersecurity_training') &&
    ['massive', 'epic', 'legendary', 'all_of_them'].includes(params.affectedRecords)
  ) {
    return 'Maximum Irony Mode';
  }

  // Long delay with SSNs = Extra legal language
  if (
    ['years_1_2', 'years_3_plus'].includes(params.discoveryDelay) &&
    params.dataTypes.includes('ssn')
  ) {
    return 'Legal Nightmare Mode';
  }

  // Kids toy with medical records = Confusion
  if (params.industry === 'toys' && params.dataTypes.includes('medical')) {
    return 'Confusion Template';
  }

  // Learned from news = Extra embarrassing
  if (params.discoveryDelay === 'from_news' || params.discoveryDelay === 'hacker_invoice') {
    return 'Public Humiliation Mode';
  }

  return undefined;
}

// Check for jackpot (0.1% chance or forced by params)
function checkJackpot(): { isJackpot: boolean; jackpotType?: string } {
  const roll = Math.random();
  if (roll < 0.001) {
    const jackpots = [
      'The Equifax Special',
      'The Honest One',
      'The Non-Apology Apology',
      'The Overkill',
      'The Tweet',
      'The Haiku',
    ];
    return { isJackpot: true, jackpotType: randomPick(jackpots) };
  }
  return { isJackpot: false };
}

// Generate the main statement
export function generateStatement(params: BreachParameters): GeneratedStatement {
  const combo = checkCombo(params);
  const { isJackpot, jackpotType } = checkJackpot();
  const tone = toneModifiers[params.tone];
  const industry = params.industry;

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
  sections.push(`Dear Valued ${industry === 'healthcare' ? 'Patient' : industry === 'education' ? 'Student' : 'Customer'},\n`);

  // Opening statement based on tone
  sections.push(`${randomPick(tone.opening)}\n`);

  // Taking it seriously
  sections.push(randomPick(takingItSeriouslyPhrases) + '\n');

  // What happened section
  sections.push('WHAT HAPPENED\n');

  const breachDescription = displayLabels.breachType[params.breachType].toLowerCase();
  const discoveryTime = displayLabels.discoveryDelay[params.discoveryDelay];

  sections.push(
    `Our security team identified unauthorized access to our systems ${discoveryTime}. ` +
    `The incident involved ${breachDescription === 'ransomware attack' ? 'a ' : ''}${breachDescription}` +
    `${params.includeSophisticatedAttack ? '. ' + randomPick(sophisticatedAttackPhrases) : '.'}\n`
  );

  // Third party blame if enabled
  if (params.includeThirdPartyBlame) {
    sections.push(randomPick(thirdPartyBlamePhrases) + '\n');
  }

  // Investigation
  sections.push(randomPick(investigationPhrases) + '\n');

  // What information was involved
  sections.push('WHAT INFORMATION WAS INVOLVED\n');

  const recordCount = displayLabels.recordScale[params.affectedRecords];
  const dataTypesStr = formatDataTypes(params.dataTypes);

  sections.push(
    `The incident may have involved ${dataTypesStr} for ${recordCount} individuals. ` +
    `${params.includeNoEvidenceOfMisuse ? randomPick(noEvidenceOfMisusePhrases) : ''}\n`
  );

  // What we are doing
  sections.push('WHAT WE ARE DOING\n');
  sections.push(randomPick(securityImprovementPhrases) + ' ');

  // Add industry-specific phrase
  const industrySpecific = industryPhrases[industry];
  if (industrySpecific) {
    sections.push(`We are implementing ${randomPick(industrySpecific)} to better protect your information.\n`);
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
  sections.push(
    `We have established a dedicated call center at 1-800-555-BREACH and a ` +
    `website at www.${params.companyName.toLowerCase().replace(/\s+/g, '')}-incident.com ` +
    `for additional information and resources.\n`
  );

  // Closing
  sections.push(randomPick(closingPhrases) + '\n');

  // Executive quote if enabled
  if (params.includeExecutiveQuote && params.executiveName) {
    sections.push(
      `\n"${randomPick(takingItSeriouslyPhrases)} We are committed to earning back your trust," ` +
      `said ${params.executiveName}, ${params.executiveTitle || 'CEO'}.\n`
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
  ];
  return randomPick(haikus);
}

// Generate tweet-length version
export function generateTweet(params: BreachParameters): string {
  const count = displayLabels.recordScale[params.affectedRecords];
  return `We regret to inform you of a security incident affecting ${count} users. ` +
    `We take security seriously. Free credit monitoring: link.co/sorry #DataBreach #WereSorry`;
}
