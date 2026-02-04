# Data Breach Apology Generator

A satirical web application that generates corporate-style data breach apology statements by analyzing and synthesizing patterns from real-world data breach apologies.

**Live Demo:** [https://jeff-is-working.github.io/DataBreach_Apology/](https://jeff-is-working.github.io/DataBreach_Apology/)

## Purpose

This application serves as both satirical commentary on corporate crisis communication and an educational tool highlighting common patterns in data breach responses. It demonstrates how companies often prioritize legal protection over genuine transparency and accountability.

### Educational Value

- Demonstrates common patterns in corporate crisis communication
- Highlights how companies often prioritize legal protection over transparency
- Teaches security professionals and privacy advocates to recognize PR obfuscation
- Provides case study material for crisis communication courses

## Features

### Manual Configuration

- Select breach type (ransomware, SQL injection, phishing, etc.)
- Choose compromised data types (emails, passwords, SSNs, medical records, etc.)
- Set affected record count and industry
- Customize tone from "Deeply Apologetic" to "Vaguely Reassuring"
- Add optional corporate speak (sophisticated attack claims, third-party blame, etc.)

### YOLO Mode

A slot machine-style randomizer that generates completely random breach scenarios:

- Weighted probabilities based on real breach statistics
- Rare "jackpot" scenarios for absurd combinations
- Special combo detection (e.g., "Security Company + Massive Breach" = Maximum Irony Mode)

### Export Options

- Copy to clipboard
- Download as text file

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Deployed to GitHub Pages

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/jeff-is-working/DataBreach_Apology.git
cd DataBreach_Apology

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```text
src/
  components/     # React components
  data/          # Phrase libraries and wheel options
  types/         # TypeScript type definitions
  utils/         # Generator and randomizer logic
  App.tsx        # Main application
  main.tsx       # Entry point
```

## Disclaimer

**For educational and entertainment purposes only.**

This is a satirical tool and should not be used for actual breach notifications. Consult legal counsel for real security incidents.

## License

MIT License - See LICENSE file for details.

## Contributing

Contributions welcome! Please read the project guidelines in CLAUDE.md before submitting PRs.
