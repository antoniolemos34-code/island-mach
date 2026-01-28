export default function Home() {
  return (
    <main className="container">
      <header style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            aria-hidden="true"
            className="card"
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              display: "grid",
              placeItems: "center",
              fontWeight: 800,
              letterSpacing: 0.5,
            }}
          >
            IM
          </div>
          <div>
            <div style={{ fontWeight: 800, lineHeight: 1.1 }}>IslandMatch</div>
            <div className="muted" style={{ fontSize: 13 }}>
              Jersey-first • UK-wide
            </div>
          </div>
        </div>

        <a className="btn" href="mailto:hello@islandmatch.app?subject=IslandMatch%20Waitlist">
          Contact
        </a>
      </header>

      <section style={{ marginTop: 34 }} className="grid grid2">
        <div>
          <div className="badge">
            <span aria-hidden="true">✨</span>
            <span>Early access — join the waitlist</span>
          </div>

          <h1 style={{ fontSize: 44, margin: "14px 0 10px", letterSpacing: -0.6 }}>
            A cleaner way to date —
            <span style={{ display: "block" }}>built for island life.</span>
          </h1>

          <p className="muted" style={{ fontSize: 18, maxWidth: 54, lineHeight: 1.55 }}>
            IslandMatch is a Jersey-first dating community with a privacy-led, scam-resistant approach.
            Simple profiles. Real people. Less noise.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            <a className="btn btnPrimary" href="#waitlist">
              Join waitlist
            </a>
            <a className="btn" href="#how">
              How it works
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }} className="muted">
            <span className="badge">🔒 Privacy-led</span>
            <span className="badge">🛡️ Scam-resistant</span>
            <span className="badge">⚡ Fast & simple</span>
          </div>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>What you get</h2>
          <div className="grid" style={{ marginTop: 12 }}>
            <div className="card" style={{ padding: 14 }}>
              <strong>Less spam</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Basic checks and rate limits to reduce fake accounts and mass messaging.
              </div>
            </div>

            <div className="card" style={{ padding: 14 }}>
              <strong>Island-first matching</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Prioritise Jersey, with the option to expand UK-wide.
              </div>
            </div>

            <div className="card" style={{ padding: 14 }}>
              <strong>Modern, minimal UI</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Clean design focused on real connections, not endless swiping.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" style={{ marginTop: 26 }} className="grid">
        <div className="card" style={{ padding: 18 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>How it works</h2>
          <div className="grid" style={{ marginTop: 12 }}>
            <div className="card" style={{ padding: 14 }}>
              <strong>1) Join the waitlist</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Early access goes to Jersey first — then we expand.
              </div>
            </div>
            <div className="card" style={{ padding: 14 }}>
              <strong>2) Get invited</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                We release access in batches to keep quality high.
              </div>
            </div>
            <div className="card" style={{ padding: 14 }}>
              <strong>3) Match with intent</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Short profiles, clear filters, and fewer distractions.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" style={{ marginTop: 18 }}>
        <div className="card" style={{ padding: 18 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Join the waitlist</h2>
          <p className="muted" style={{ marginTop: 8, marginBottom: 12 }}>
            Put your email here and you’ll be first to know when early access opens.
          </p>

          {/* Option A (no backend): mailto. Replace later with a real form endpoint. */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = String(fd.get("email") || "").trim();
              const note = String(fd.get("note") || "").trim();
              const subject = encodeURIComponent("IslandMatch waitlist");
              const body = encodeURIComponent(
                `Please add me to the waitlist.\n\nEmail: ${email}\nNote: ${note}\n`
              );
              window.location.href = `mailto:hello@islandmatch.app?subject=${subject}&body=${body}`;
            }}
            style={{ display: "grid", gap: 10, maxWidth: 560 }}
          >
            <input className="input" name="email" type="email" required placeholder="Your email address" />
            <input className="input" name="note" type="text" placeholder="Optional: what are you looking for?" />
            <button className="btn btnPrimary" type="submit">
              Request early access
            </button>
          </form>

          <p className="muted" style={{ marginTop: 10, fontSize: 13 }}>
            No spam. You can unsubscribe anytime.
          </p>
        </div>
      </section>

      <footer style={{ marginTop: 22, paddingTop: 12 }} className="muted">
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <span>© {new Date().getFullYear()} IslandMatch</span>
          <span style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:hello@islandmatch.app">hello@islandmatch.app</a>
            <span aria-hidden="true">•</span>
            <a href="#">Privacy</a>
            <span aria-hidden="true">•</span>
            <a href="#">Terms</a>
          </span>
        </div>
      </footer>
    </main>
  );
}
