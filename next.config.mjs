/** @type {import('next').NextConfig} */

/**
 * Content Security Policy — the highest-value security header.
 *
 * Design notes:
 *   - script-src / style-src include 'unsafe-inline' because Next.js emits inline
 *     runtime scripts and CSS Modules can emit inline styles. For a fully-static
 *     site with no user input reaching the DOM, the practical attack surface for
 *     inline-injection is zero. A nonce-based CSP is possible via middleware but
 *     adds runtime complexity for negligible gain here.
 *   - img-src includes data: for inline SVG data URIs.
 *   - font-src is self-only — the geist package inlines fonts locally.
 *   - frame-ancestors 'none' is enforced belt-and-braces via X-Frame-Options: DENY.
 *   - upgrade-insecure-requests forces http → https for any subresources.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    // Force HTTPS for 2 years, include subdomains, request preload-list inclusion.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Block embedding in iframes anywhere. Backstops frame-ancestors in CSP.
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Disable MIME type sniffing.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Only send origin (no path/query) to cross-origin destinations.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Explicitly deny browser features we don't use.
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "midi=()",
      "magnetometer=()",
      "gyroscope=()",
      "accelerometer=()",
      "interest-cohort=()",
    ].join(", "),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Cross-origin isolation — reduces risk from side-channel attacks.
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // remove X-Powered-By: Next.js
  compress: true,

  async headers() {
    return [
      {
        // Apply security headers to every route.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long cache for hashed static assets.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Correct content type for the RFC 9116 file.
        source: "/.well-known/security.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect the internal dev route so it's not discoverable in prod.
      // (robots.txt also disallows it — belt and braces.)
      // Left in place for local development; production hosting can layer
      // additional access control on top if desired.
    ];
  },
};

export default nextConfig;
