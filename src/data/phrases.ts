// Common phrases extracted from real data breach apologies
export const openingPhrases = [
  "We are writing to inform you of a data security incident that may have affected your personal information.",
  "We recently discovered a cybersecurity incident that may have involved some of your personal information.",
  "We value your trust and want to make you aware of an incident that may affect some of your personal data.",
  "We take the protection of your personal information very seriously, and we are writing to inform you of a recent security incident.",
  "We regret to inform you that we recently became aware of a security incident affecting our systems.",
];

export const takingItSeriouslyPhrases = [
  "We take the privacy and security of your information very seriously.",
  "The security of our customers' information is a top priority.",
  "Protecting the personal information of our customers is of the utmost importance to us.",
  "We are deeply committed to safeguarding the information you entrust to us.",
  "We understand the trust you place in us with your personal information.",
];

export const investigationPhrases = [
  "We immediately launched an investigation with the assistance of leading cybersecurity firms.",
  "Upon discovery, we engaged industry-leading forensic experts to conduct a thorough investigation.",
  "We are working closely with law enforcement and third-party security experts to investigate this matter.",
  "We have retained a leading cybersecurity firm to assist in our investigation and remediation efforts.",
  "Our security team, along with external experts, is working diligently to understand the full scope of this incident.",
];

export const sophisticatedAttackPhrases = [
  "This was a sophisticated criminal attack on our systems.",
  "The unauthorized access was the result of a highly sophisticated cyber attack.",
  "This incident was perpetrated by sophisticated threat actors using advanced techniques.",
  "Our systems were targeted by a determined and sophisticated adversary.",
  "The attack utilized advanced methods that evaded our security controls.",
];

export const thirdPartyBlamePhrases = [
  "The incident was caused by unauthorized access to a third-party vendor's systems.",
  "A vendor that provides services to us experienced a security incident that affected our data.",
  "The breach originated from a compromised third-party system with access to our network.",
  "One of our service providers experienced a security incident that may have exposed your information.",
  "The unauthorized access occurred through a third-party platform used to support our services.",
];

export const noEvidenceOfMisusePhrases = [
  "At this time, we have no evidence that your information has been misused.",
  "We are not aware of any misuse of your personal information as a result of this incident.",
  "To date, there is no indication that your data has been used for fraudulent purposes.",
  "Our investigation has not found evidence that any personal information has been misused.",
  "While your data may have been accessed, we have seen no evidence of identity theft or fraud.",
];

export const securityImprovementPhrases = [
  "We have implemented additional security measures to protect against similar incidents in the future.",
  "We are taking steps to further enhance our security protocols and systems.",
  "We are committed to learning from this incident and strengthening our security posture.",
  "We have added enhanced security controls and continue to review and improve our safeguards.",
  "We are investing in additional security measures and employee training to prevent future incidents.",
];

export const creditMonitoringPhrases = [
  "Out of an abundance of caution, we are offering you complimentary credit monitoring services.",
  "We are providing affected individuals with free credit monitoring and identity protection services.",
  "To help protect your identity, we are offering 12 months of complimentary credit monitoring.",
  "As an added precaution, we are offering free identity theft protection services.",
  "We have arranged for complimentary credit monitoring through [PROVIDER] for the next 24 months.",
];

export const closingPhrases = [
  "We sincerely apologize for any inconvenience this may cause.",
  "We deeply regret any concern this incident may have caused you.",
  "We are truly sorry for any worry or inconvenience resulting from this situation.",
  "Please accept our sincere apologies for this incident.",
  "We understand this news may be concerning, and we apologize for any stress this may cause.",
];

export const abundanceOfCautionPhrases = [
  "Out of an abundance of caution",
  "As a precautionary measure",
  "While we have no evidence of misuse",
  "Although we believe the risk is low",
  "To be proactive in protecting your interests",
];

export const timelineObfuscationPhrases = [
  "Upon discovering the incident",
  "After a comprehensive investigation",
  "Following a thorough review of our systems",
  "Once we completed our initial assessment",
  "After careful analysis by our security team",
];

// Industry-specific phrases
export const industryPhrases = {
  healthcare: [
    "HIPAA-compliant notification procedures",
    "protected health information (PHI)",
    "medical record security",
    "healthcare data protection",
  ],
  financial: [
    "financial account security",
    "banking information protection",
    "regulatory compliance requirements",
    "financial data safeguards",
  ],
  retail: [
    "payment card industry standards",
    "point-of-sale security",
    "customer transaction protection",
    "retail data security measures",
  ],
  technology: [
    "advanced encryption protocols",
    "multi-factor authentication",
    "zero-trust security architecture",
    "continuous security monitoring",
  ],
  government: [
    "federal security guidelines",
    "government data protection protocols",
    "public sector security standards",
    "citizen data privacy measures",
  ],
  education: [
    "FERPA compliance measures",
    "student data protection",
    "educational record security",
    "academic information safeguards",
  ],
  dating: [
    "user privacy protection",
    "personal profile security",
    "member data confidentiality",
    "relationship data protection",
  ],
  toys: [
    "children's data protection",
    "COPPA compliance measures",
    "family information security",
    "child safety protocols",
  ],
  security_company: [
    "industry-leading security practices",
    "advanced threat detection",
    "security-first architecture",
    "expert security protocols",
  ],
  cybersecurity_training: [
    "security awareness protocols",
    "professional security standards",
    "expert-level protection measures",
    "industry best practices",
  ],
};

// Tone-specific modifiers
export const toneModifiers = {
  deeply_apologetic: {
    emphasis: ["deeply", "sincerely", "truly", "profoundly"],
    apology: ["We are deeply sorry", "We sincerely apologize", "We truly regret"],
  },
  professionally_concerned: {
    emphasis: ["promptly", "diligently", "thoroughly", "comprehensively"],
    apology: ["We regret to inform you", "We want to make you aware", "We are informing you"],
  },
  technically_transparent: {
    emphasis: ["specifically", "technically", "precisely", "accurately"],
    apology: ["We are disclosing", "We want to be transparent about", "We are providing details on"],
  },
  legally_cautious: {
    emphasis: ["potentially", "may have", "possibly", "could have"],
    apology: ["We are notifying you pursuant to", "In compliance with notification requirements"],
  },
  aggressively_defensive: {
    emphasis: ["despite", "notwithstanding", "regardless of"],
    apology: ["While this incident occurred", "Although unauthorized access was detected"],
  },
  vaguely_reassuring: {
    emphasis: ["some", "certain", "limited", "particular"],
    apology: ["We wanted to reach out", "We thought you should know", "We are sharing information"],
  },
};
