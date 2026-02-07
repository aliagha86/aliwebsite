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
  openGraph: {
    title: "Ali Zaigham Agha | Capital Allocation & Market Perspectives",
    description:
      "Independent market perspectives across UAE (ADX, DFM), Pakistan (PSX), and US markets.",
    url: "https://alizaighamagha.com",
    siteName: "Ali Zaigham Agha",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Zaigham Agha | Capital Allocation & Market Perspectives",
    description:
      "Capital allocation frameworks across UAE, Pakistan, and US markets."
  },
  verification: {
    google: "Fn2iSi6GjCdYFqjG0itBjJSkIw_U3-HoG6JyvfwoNwI",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}