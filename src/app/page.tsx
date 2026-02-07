"use client";
const LEAD_MAGNET_PDF = "/uae-market-brief-2026.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/alizaighamagha/";
const X_URL = "https://x.com/aliaghax";
const SUBSTACK_URL = "https://substack.com/@thejuniorbanker";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="siteHeader">
        <div className="container navBar">
          <div className="logo">Ali Zaigham Agha</div>
          <nav className="navLinks" aria-label="Primary">
            <a href="#about">Profile</a>
            <a href="#competencies">Competencies</a>
            <a href="#brief">Free Brief</a>
            <a href="#contact">Inquiries</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            Capital Allocation &amp; Market Perspectives
            <br />
            for Dubai &amp; Global Markets
          </h1>

          <p className="heroLead">
            Bridging institutional financial rigor with practical market perspective across{" "}
            <strong>UAE equities</strong>, <strong>US equities &amp; options</strong>,{" "}
            <strong>property</strong>, and <strong>digital assets</strong>.
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href="#contact">
              Get Investment Insights
            </a>
            <a className="btnSecondary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>

          <p className="credLine">
            Dubai-based · Investor Relations experience in UAE banking · INSEAD MBA · MSc Finance (Amsterdam Business School) · CAIA (all levels completed) · BSc (Hons) Economics (LUMS)
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section bgLight">
        <div className="container aboutGrid">
          <div>
            <h2 className="sectionTitle">Professional Profile</h2>

            <p>
              My approach is grounded in <strong>fundamental analysis</strong> and{" "}
              <strong>institutional discipline</strong>, refined through experience in{" "}
              <strong>Investor Relations within UAE banking</strong>.
            </p>

            <p className="pullQuote">
              <strong>I don’t guess — I analyze.</strong>
            </p>

            <p>
              Moving beyond speculative trends, I apply structured financial and portfolio analysis — spanning
              traditional and alternative asset classes — leveraging tools such as{" "}
              <strong>Python</strong>, valuation frameworks, and principles of{" "}
              <strong>value investing</strong> to evaluate opportunities across regional (DFM/ADX) and global markets.
            </p>

            <p>
              This page is designed to be simple: if you’re considering a decision (allocation, risk, trade-offs),
              you can send a message with context — and I’ll respond directly.
            </p>
          </div>

          <aside className="resume">
            <div className="resumeTitleRow">
              <h3 className="resumeHeading">Education &amp; Credentials</h3>
            </div>

            <div className="resumeBlock">
              <div className="resumeItemTitle">INSEAD</div>
              <div className="resumeItemMeta">Master of Business Administration (MBA)</div>
            </div>

            <div className="resumeBlock">
              <div className="resumeItemTitle">Amsterdam Business School</div>
              <div className="resumeItemMeta">Master of Science (MSc), Finance</div>
            </div>

            <div className="resumeBlock">
              <div className="resumeItemTitle">LUMS</div>
              <div className="resumeItemMeta">BSc (Hons), Economics</div>
            </div>

            <div className="resumeBlock">
              <div className="resumeItemTitle">CAIA Association</div>
              <div className="resumeItemMeta">Completed all levels (CAIA)</div>
            </div>

            <div className="resumeLinks">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="dot">·</span>
              {X_URL ? (
                <a href={X_URL} target="_blank" rel="noreferrer">
                  X
                </a>
              ) : (
                <span className="muted">X (placeholder)</span>
              )}
              <span className="dot">·</span>
              {SUBSTACK_URL ? (
                <a href={SUBSTACK_URL} target="_blank" rel="noreferrer">
                  Substack
                </a>
              ) : (
                <span className="muted">Substack (placeholder)</span>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Competencies */}
      <section id="competencies" className="section">
        <div className="container">
          <h2 className="sectionTitle">Market Competencies</h2>
          <p className="sectionSub">
            A calm, structured approach across public markets, derivatives, property decisions, and digital assets.
          </p>

          <div className="cards">
            <div className="card">
              <h3>UAE Equities &amp; Property</h3>
              <p>
                Fundamental valuation of DFM/ADX entities and property dynamics in Dubai/Abu Dhabi —
                framed as capital allocation decisions.
              </p>
              <a className="cardLink" href="#brief">Get the UAE Market Brief →</a>
            </div>

            <div className="card">
              <h3>US Equities &amp; Options</h3>
              <p>
                Equity evaluation with selective options use for risk management and income generation —
                avoiding noise-driven decision-making.
              </p>
              <a className="cardLink" href="#contact">Send a US/Options question →</a>
            </div>

            <div className="card">
              <h3>Property Decision Framework</h3>
              <p>
                ROI-focused thinking on yield, leverage, liquidity, and opportunity cost —
                comparing property against financial assets.
              </p>
              <a className="cardLink" href="#contact">Pressure-test a property decision →</a>
            </div>

            <div className="card">
              <h3>Digital Assets</h3>
              <p>
                Analytical crypto perspective using fundamentals and on-chain context —
                separating signal from market noise.
              </p>
              <a className="cardLink" href="#contact">Ask about BTC/crypto allocation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Brief */}
      <section id="brief" className="section bgLight">
        <div className="container briefGrid">
          <div>
            <h2 className="sectionTitle">Free UAE Market Brief</h2>
            <p>
              A concise, decision-oriented snapshot: key considerations, common blind spots, and what matters most
              when allocating capital across UAE exposures.
            </p>
          </div>

          <div className="briefCTA">
            <a
              className="btnPrimary"
              href={LEAD_MAGNET_PDF}
              download="UAE-Market-Brief-2026-Ali-Zaigham-Agha.pdf"
            >
              Download UAE Market Brief (PDF)
            </a>
            <p className="tiny">Or request it in your message below.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container contactGrid">
          <div>
            <h2 className="sectionTitle">Professional Inquiries</h2>
            <p>
              If you’re considering an allocation decision, a market exposure, or want an independent perspective on a plan,
              send a message with context.
            </p>
            <p className="muted">
              Prefer LinkedIn? Connect directly via{" "}
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
            <p className="muted">
              Note: discussions are informational and do not constitute financial advice.
            </p>
          </div>

          <div className="formWrap">
            <form className="form" method="post" action="/api/contact">
              <label>
                Name
                <input name="name" required />
              </label>

              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Brief context helps. Example: 'UAE equities vs property', 'US options risk/assumptions', 'BTC allocation in current market'."
                />
              </label>

              <label className="checkboxRow">
                <input type="checkbox" name="request_brief" value="yes" />
                Please send the free UAE Market Brief (PDF)
              </label>

              <button className="btnPrimary" type="submit">Send Inquiry</button>
              <p className="tiny">No spam. You’ll get a direct reply.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="siteFooter">
        <div className="container">
          <p className="footerText">
            Ali Zaigham Agha © {new Date().getFullYear()}.
            <br />
            Disclaimer: Views expressed are personal and do not represent any institution. Content is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ali Zaigham Agha",
      jobTitle: "Capital Allocation & Market Perspectives",
      url: "https://yourdomain.com",
      sameAs: [
        "https://www.linkedin.com/in/alizaighamagha/",
        "https://x.com/aliaghax",
        "https://substack.com/@thejuniorbanker"
      ],
      knowsAbout: [
        "UAE equities",
        "capital allocation",
        "investment frameworks",
        "US equities and options",
        "property investment",
        "digital assets"
      ],
      alumniOf: [
        "INSEAD",
        "Amsterdam Business School",
        "LUMS"
      ]
    })
  }}
/>