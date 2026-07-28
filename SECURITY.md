# Security Policy

We take the security of this repository and the site it produces seriously. If you
believe you've found a vulnerability, we want to hear from you — thank you for
taking the time to help.

## Reporting a vulnerability

Please email **info@breachrrsecurity.com** with the details. Include:

- A description of the vulnerability
- Steps to reproduce (or a proof of concept)
- The version / commit hash affected
- Your name and contact if you'd like credit

Please do **not** open a public GitHub issue for security vulnerabilities.

## What to expect

- **Acknowledgement** within 48 hours
- **Initial assessment** within 7 days
- **Resolution timeline** communicated after assessment

We commit to keeping you informed as we work through the report.

## Scope

This policy covers:

- This repository (`breachrr-security-web`)
- The production site at `https://breachrrsecurity.com`

Out of scope:

- Third-party services we depend on (report to them directly)
- Social engineering
- Physical attacks
- Denial of service via volumetric attacks

## Safe harbour

We consider security research conducted under this policy to be authorised.
We will not pursue legal action against researchers acting in good faith and
following the guidance here.

## Recommended repository configuration

The following GitHub settings are recommended for anyone maintaining this repo:

- **Branch protection on `main`:** require PR review before merge, require
  status checks (CI) to pass, disallow force pushes, disallow deletion
- **Two-factor authentication:** required for all contributors
- **Signed commits:** encouraged
- **Dependabot alerts:** enabled (auto-configured via `.github/dependabot.yml`)
- **Secret scanning:** enabled
- **Code scanning (CodeQL):** enabled

## Machine-readable version

See `/.well-known/security.txt` on the production site for the RFC 9116 version.
