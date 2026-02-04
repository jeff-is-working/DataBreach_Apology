// Common phrases extracted from real data breach apologies
// Sources: Public breach notification letters and corporate security incident disclosures

export const openingPhrases = [
  "We are writing to inform you of a data security incident that may have affected your personal information.",
  "We recently discovered a cybersecurity incident that may have involved some of your personal information.",
  "We value your trust and want to make you aware of an incident that may affect some of your personal data.",
  "We take the protection of your personal information very seriously, and we are writing to inform you of a recent security incident.",
  "We regret to inform you that we recently became aware of a security incident affecting our systems.",
];

// The classic "we take security seriously" variants - the most mocked phrase in breach notifications
export const takingItSeriouslyPhrases = [
  "We take the privacy and security of your information very seriously.",
  "The security of our customers' information is a top priority.",
  "Protecting the personal information of our customers is of the utmost importance to us.",
  "We are deeply committed to safeguarding the information you entrust to us.",
  "We understand the trust you place in us with your personal information.",
  "We take security very seriously at [COMPANY].",
  "Your privacy and security are paramount to us.",
  "We have always been committed to protecting your personal information.",
  "Security has always been a core value of our organization.",
  "We maintain industry-leading security practices to protect your data.",
];

export const investigationPhrases = [
  "We immediately launched an investigation with the assistance of leading cybersecurity firms.",
  "Upon discovery, we engaged industry-leading forensic experts to conduct a thorough investigation.",
  "We are working closely with law enforcement and third-party security experts to investigate this matter.",
  "We have retained a leading cybersecurity firm to assist in our investigation and remediation efforts.",
  "Our security team, along with external experts, is working diligently to understand the full scope of this incident.",
  "We promptly initiated a comprehensive forensic investigation.",
  "We have engaged Mandiant/CrowdStrike/[SECURITY FIRM] to assist with our investigation.",
  "Federal law enforcement has been notified and is actively investigating.",
  "We are cooperating fully with law enforcement authorities.",
  "Our investigation is ongoing, and we will provide updates as appropriate.",
];

// The "sophisticated attack" defense - used to deflect blame
export const sophisticatedAttackPhrases = [
  "This was a sophisticated criminal attack on our systems.",
  "The unauthorized access was the result of a highly sophisticated cyber attack.",
  "This incident was perpetrated by sophisticated threat actors using advanced techniques.",
  "Our systems were targeted by a determined and sophisticated adversary.",
  "The attack utilized advanced methods that evaded our security controls.",
  "This was a targeted attack by highly skilled and organized criminals.",
  "The threat actors demonstrated advanced persistent threat (APT) capabilities.",
  "We were targeted by a nation-state level adversary.",
  "The attackers used novel techniques not previously seen in the wild.",
  "Despite our robust security measures, these sophisticated actors found a way in.",
];

// Third-party blame - always a vendor's fault
export const thirdPartyBlamePhrases = [
  "The incident was caused by unauthorized access to a third-party vendor's systems.",
  "A vendor that provides services to us experienced a security incident that affected our data.",
  "The breach originated from a compromised third-party system with access to our network.",
  "One of our service providers experienced a security incident that may have exposed your information.",
  "The unauthorized access occurred through a third-party platform used to support our services.",
  "We recently learned that a vendor experienced a security incident affecting data they process on our behalf.",
  "This incident did not involve a direct attack on our systems, but rather a third-party provider.",
  "The vulnerability was in software provided by an external vendor.",
  "We are working with our vendor to understand the full scope of their security incident.",
  "We are reviewing all third-party relationships in light of this incident.",
];

// The "no evidence of misuse" disclaimer - legally careful language
export const noEvidenceOfMisusePhrases = [
  "At this time, we have no evidence that your information has been misused.",
  "We are not aware of any misuse of your personal information as a result of this incident.",
  "To date, there is no indication that your data has been used for fraudulent purposes.",
  "Our investigation has not found evidence that any personal information has been misused.",
  "While your data may have been accessed, we have seen no evidence of identity theft or fraud.",
  "We have no reason to believe your information has been misused at this time.",
  "There is currently no evidence of unauthorized use of your personal information.",
  "We are not aware of any reports of identity theft related to this incident.",
  "Our monitoring has not detected any suspicious activity involving your account.",
  "At present, we have no indication that any personal data has been exploited.",
];

// Vague security improvement promises
export const securityImprovementPhrases = [
  "We have implemented additional security measures to protect against similar incidents in the future.",
  "We are taking steps to further enhance our security protocols and systems.",
  "We are committed to learning from this incident and strengthening our security posture.",
  "We have added enhanced security controls and continue to review and improve our safeguards.",
  "We are investing in additional security measures and employee training to prevent future incidents.",
  "We have implemented additional safeguards to prevent this type of incident from recurring.",
  "We are enhancing our technical and organizational measures to protect your data.",
  "We have accelerated previously planned security initiatives.",
  "We are conducting a comprehensive review of our security infrastructure.",
  "We have engaged additional security resources to strengthen our defenses.",
];

// Credit monitoring offers - the standard peace offering
export const creditMonitoringPhrases = [
  "Out of an abundance of caution, we are offering you complimentary credit monitoring services.",
  "We are providing affected individuals with free credit monitoring and identity protection services.",
  "To help protect your identity, we are offering 12 months of complimentary credit monitoring.",
  "As an added precaution, we are offering free identity theft protection services.",
  "We have arranged for complimentary credit monitoring through [PROVIDER] for the next 24 months.",
  "We are offering you two years of free credit monitoring and identity restoration services.",
  "Enrollment information for complimentary identity protection services is enclosed.",
  "You are eligible for free credit monitoring, identity theft insurance, and fraud resolution services.",
  "We have partnered with [PROVIDER] to offer you comprehensive identity protection at no cost.",
  "Please find enclosed instructions for enrolling in our complimentary protection services.",
];

// Closing phrases - the non-apology apology
export const closingPhrases = [
  "We sincerely apologize for any inconvenience this may cause.",
  "We deeply regret any concern this incident may have caused you.",
  "We are truly sorry for any worry or inconvenience resulting from this situation.",
  "Please accept our sincere apologies for this incident.",
  "We understand this news may be concerning, and we apologize for any stress this may cause.",
  "We recognize this incident may cause concern, and we apologize for any inconvenience.",
  "We remain committed to earning your trust.",
  "We value your relationship with us and are committed to protecting your information.",
  "Thank you for your patience and understanding as we work through this matter.",
  "We appreciate your continued trust in our organization.",
];

// "Abundance of caution" phrases - used to minimize the situation
export const abundanceOfCautionPhrases = [
  "Out of an abundance of caution",
  "As a precautionary measure",
  "While we have no evidence of misuse",
  "Although we believe the risk is low",
  "To be proactive in protecting your interests",
  "In an abundance of caution",
  "As a proactive step",
  "While we have found no evidence of unauthorized use",
  "To err on the side of caution",
  "As a protective measure",
];

// Timeline obfuscation - vague about when things happened
export const timelineObfuscationPhrases = [
  "Upon discovering the incident",
  "After a comprehensive investigation",
  "Following a thorough review of our systems",
  "Once we completed our initial assessment",
  "After careful analysis by our security team",
  "When we became aware of the situation",
  "After completing our forensic investigation",
  "Following notification from [THIRD PARTY]",
  "Upon learning of unauthorized access",
  "After confirming the scope of the incident",
];

// NEW: Real ironic phrases - when companies claim good security but clearly didn't have it
export const ironicSecurityClaims = [
  "We maintain industry-leading security practices.",
  "Security is embedded in everything we do.",
  "We employ multiple layers of security controls.",
  "Our security program meets or exceeds industry standards.",
  "We continuously monitor our systems for threats.",
  "We have dedicated security teams working around the clock.",
  "Our systems are regularly audited by independent third parties.",
  "We use state-of-the-art encryption technologies.",
  "We follow security best practices recommended by experts.",
  "Our security program has been certified by [FRAMEWORK].",
];

// NEW: What they actually did wrong (for irony mode)
export const actualNegligence = {
  unpatched: [
    "The vulnerability exploited in this incident had a patch available since [DATE].",
    "A security update addressing this issue was released [X] months prior to the incident.",
    "We are accelerating our patch management processes.",
    "We are reviewing our vulnerability management procedures.",
  ],
  plaintext: [
    "Certain passwords were stored in a readable format.",
    "Some credentials were logged in plaintext as part of a debugging process.",
    "A legacy system stored passwords without proper hashing.",
    "We are updating our password storage mechanisms.",
  ],
  noMFA: [
    "The affected system did not require multi-factor authentication.",
    "We are implementing additional authentication requirements.",
    "Enhanced authentication controls are being deployed.",
  ],
  excessiveAccess: [
    "The compromised credentials had broader access than necessary.",
    "We are implementing more granular access controls.",
    "We are reviewing all privileged access arrangements.",
  ],
  dataRetention: [
    "Some of the affected data had been retained longer than necessary.",
    "We are reviewing our data retention practices.",
    "We are implementing more aggressive data minimization policies.",
  ],
};

// NEW: Executive quotes - hollow promises from leadership
export const executiveQuotes = [
  "The security of our customers' data is my top priority.",
  "I want to personally apologize for any concern this has caused.",
  "We are fully committed to making this right.",
  "I take full responsibility for ensuring this doesn't happen again.",
  "Our customers' trust is everything to us.",
  "We will emerge from this stronger and more secure.",
  "I have directed all necessary resources to address this matter.",
  "Security is, and will remain, job one for our entire organization.",
  "We are laser-focused on protecting your information.",
  "I am personally overseeing our response to this incident.",
];

// Industry-specific phrases
export const industryPhrases = {
  healthcare: [
    "HIPAA-compliant notification procedures",
    "protected health information (PHI)",
    "medical record security",
    "healthcare data protection",
    "patient privacy protections",
    "healthcare information safeguards",
  ],
  financial: [
    "financial account security",
    "banking information protection",
    "regulatory compliance requirements",
    "financial data safeguards",
    "PCI DSS compliance",
    "financial services security standards",
  ],
  credit_bureau: [
    "consumer credit information",
    "credit file security",
    "consumer reporting protections",
    "credit monitoring safeguards",
    "consumer data protection",
  ],
  retail: [
    "payment card industry standards",
    "point-of-sale security",
    "customer transaction protection",
    "retail data security measures",
    "PCI compliance requirements",
  ],
  technology: [
    "advanced encryption protocols",
    "multi-factor authentication",
    "zero-trust security architecture",
    "continuous security monitoring",
    "DevSecOps practices",
  ],
  social_media: [
    "user privacy protections",
    "account security measures",
    "platform integrity safeguards",
    "content security protocols",
    "user data protection",
  ],
  telecom: [
    "customer proprietary network information (CPNI)",
    "telecommunications security standards",
    "subscriber data protection",
    "network security protocols",
  ],
  hospitality: [
    "guest information security",
    "reservation system protection",
    "loyalty program data safeguards",
    "hospitality industry standards",
  ],
  government: [
    "federal security guidelines",
    "government data protection protocols",
    "public sector security standards",
    "citizen data privacy measures",
    "FedRAMP compliance",
  ],
  education: [
    "FERPA compliance measures",
    "student data protection",
    "educational record security",
    "academic information safeguards",
  ],
  gaming: [
    "player account security",
    "gaming platform protection",
    "virtual asset safeguards",
    "player data privacy",
  ],
  dating: [
    "user privacy protection",
    "personal profile security",
    "member data confidentiality",
    "relationship data protection",
    "intimate information safeguards",
  ],
  toys: [
    "children's data protection",
    "COPPA compliance measures",
    "family information security",
    "child safety protocols",
    "parental consent requirements",
  ],
  security_company: [
    "industry-leading security practices",
    "advanced threat detection",
    "security-first architecture",
    "expert security protocols",
    "world-class security measures",
  ],
  cybersecurity_training: [
    "security awareness protocols",
    "professional security standards",
    "expert-level protection measures",
    "industry best practices",
    "security certification standards",
  ],
  password_manager: [
    "zero-knowledge architecture",
    "end-to-end encryption",
    "vault security protocols",
    "master password protection",
    "secure credential storage",
  ],
};

// Tone-specific modifiers
export const toneModifiers = {
  deeply_apologetic: {
    emphasis: ["deeply", "sincerely", "truly", "profoundly"],
    opening: [
      "We are deeply sorry to inform you of a data security incident that may have affected your personal information.",
      "We sincerely apologize as we write to inform you of a recent security incident involving your data.",
      "With profound regret, we are reaching out to notify you of a cybersecurity incident that may have involved your personal information.",
    ],
  },
  professionally_concerned: {
    emphasis: ["promptly", "diligently", "thoroughly", "comprehensively"],
    opening: [
      "We are writing to inform you of a data security incident that may have affected your personal information.",
      "We want to make you aware of a recent security incident that may have involved some of your personal data.",
      "We are reaching out to notify you of a cybersecurity incident we recently discovered.",
    ],
  },
  technically_transparent: {
    emphasis: ["specifically", "technically", "precisely", "accurately"],
    opening: [
      "We are providing you with detailed information about a security incident that affected our systems.",
      "In the interest of full transparency, we are disclosing a data security incident that may have involved your information.",
      "We want to provide you with accurate details about a recent cybersecurity event affecting our infrastructure.",
    ],
  },
  legally_cautious: {
    emphasis: ["potentially", "may have", "possibly", "could have"],
    opening: [
      "Pursuant to applicable data breach notification laws, we are writing to inform you of a security incident.",
      "In compliance with regulatory notification requirements, we are informing you of a data security incident that may have involved your personal information.",
      "This notice is being provided in accordance with applicable state and federal data breach notification statutes.",
    ],
  },
  aggressively_defensive: {
    emphasis: ["despite", "notwithstanding", "regardless of"],
    opening: [
      "Despite our robust security measures, we recently detected unauthorized access to certain systems.",
      "Although we maintain industry-leading security protocols, we identified a security incident that we want to bring to your attention.",
      "Notwithstanding our significant investments in cybersecurity, we experienced a security event that may have involved your data.",
    ],
  },
  vaguely_reassuring: {
    emphasis: ["some", "certain", "limited", "particular"],
    opening: [
      "We wanted to reach out to share some information about a recent security matter.",
      "We thought you should know about a situation involving certain data in our systems.",
      "We are reaching out regarding a limited security incident that we recently addressed.",
    ],
  },
};

// Sincerity-based phrases (varies from hollow to genuine)
export const sincerityPhrases = {
  low: [ // 0-33: Hollow, robotic, clearly PR-written
    "We regret to inform you of this incident.",
    "We are notifying you as required by applicable regulations.",
    "This communication serves to inform you of a data security matter.",
    "As per our obligations, we are providing this notice.",
    "We acknowledge an incident has occurred.",
  ],
  medium: [ // 34-66: Standard corporate apology
    "We sincerely apologize for any concern this may cause.",
    "We understand this may be frustrating and we apologize.",
    "We regret any inconvenience this situation has caused.",
    "We appreciate your patience as we address this matter.",
    "We are sorry this has happened and are working to make it right.",
  ],
  high: [ // 67-100: Genuinely apologetic, human-sounding
    "We are truly sorry. We failed to protect your information and there's no excuse for that.",
    "We understand we have broken your trust, and we take full responsibility.",
    "We owe you a sincere apology. This should never have happened.",
    "We let you down, and we are deeply sorry for the real harm this may cause.",
    "There is no way to sugarcoat this - we failed, and we are genuinely sorry.",
  ],
};

// Shadiness-based phrases (varies from transparent to evasive)
export const shadinessPhrases = {
  low: [ // 0-33: Transparent, direct communication
    "Here is exactly what happened: ",
    "To be completely transparent with you: ",
    "We want to be fully honest about what occurred: ",
    "The facts are as follows: ",
    "We owe you a clear and honest explanation: ",
  ],
  medium: [ // 34-66: Standard corporate vagueness
    "After completing our investigation, we determined that ",
    "Based on our analysis, it appears that ",
    "Our review indicates that certain information ",
    "We have learned that an incident occurred involving ",
    "Our investigation revealed that ",
  ],
  high: [ // 67-100: Evasive, obfuscating, shady
    "A recent security event may have potentially involved ",
    "Certain limited data elements may have been subject to access by ",
    "We have become aware of a situation that might have involved ",
    "A subset of information may have been impacted by an event that ",
    "In an isolated incident, it is possible that certain data ",
  ],
};

// Shadiness timeline obfuscation (more shady = more vague about timing)
export const shadinessTimeline = {
  low: [
    "On [DATE], we discovered that on [DATE], attackers accessed our systems.",
    "The breach occurred on [DATE]. We discovered it on [DATE].",
    "Timeline: breach began [DATE], detected [DATE], contained [DATE].",
  ],
  medium: [
    "Upon discovery of the incident, we immediately took action.",
    "After completing our investigation, we are now notifying affected individuals.",
    "Once we confirmed the nature of the incident, we began our notification process.",
  ],
  high: [
    "We recently became aware of an incident that may have occurred at some point.",
    "After a thorough review, we determined notification was appropriate.",
    "Following an extensive investigation, we are now in a position to provide this notice.",
  ],
};

// Breach scenario statistics for jackpot mode (anonymized)
export const breachScenarioStats = {
  creditBureauClassic: {
    typicalSettlement: "$500-700 million",
    typicalRecords: "100-150 million",
    commonIrony: "patch was available for months",
    typicalDelay: "weeks to disclose",
  },
  plaintextPasswordSpecial: {
    typicalSettlement: "$50-100 million",
    typicalRecords: "hundreds of millions",
    commonIrony: "stored in plaintext for years",
    internalAccess: "thousands of employees",
  },
  billionRecordBonanza: {
    typicalRecords: "billions",
    commonIrony: "took years to disclose",
    discoveryMethod: "during acquisition due diligence",
  },
  vendorBreachSpecial: {
    typicalSettlement: "$10-20 million",
    typicalRecords: "tens of millions of cards",
    commonIrony: "third-party vendor credentials",
  },
  multiYearDiscovery: {
    typicalRecords: "hundreds of millions",
    commonIrony: "breach ran for years undetected",
    typicalDuration: "3-4 years",
  },
  serialOffender: {
    typicalSettlement: "$300-400 million",
    typicalRecords: "50-100 million",
    commonIrony: "multiple breaches, same promises",
  },
};
