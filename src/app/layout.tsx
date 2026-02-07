import "./globals.css";

export const metadata = {
  title: "Ali Zaigham Agha | Capital Allocation & Market Perspectives",
  description:
    "Capital allocation and market perspectives across UAE (ADX, DFM), Pakistan (PSX), and US markets. Independent analysis spanning equities, property, and digital assets from Dubai.",
  keywords: [
    "Ali Zaigham Agha",
    "UAE equities",
    "ADX",
    "DFM",
    "Dubai investment analysis",
    "Pakistan stock market",
    "PSX",
    "US equities",
    "capital allocation",
    "property vs equities",
    "digital assets",
    "crypto allocation"
  ],
  verification: {
    google: "Fn2iSi6GjCdYFqjG0itBjJSkIw_U3-HoG6JyvfwoNwI"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VR9X4YE46Y"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VR9X4YE46Y', {
                anonymize_ip: true,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}