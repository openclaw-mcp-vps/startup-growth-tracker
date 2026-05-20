export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Startup Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          All-in-one startup metrics dashboard
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop juggling spreadsheets and disconnected tools. Startup Growth Tracker consolidates your MRR, CAC, LTV, and runway into one clean, founder-focused dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No hidden fees.</p>

        {/* Metrics preview */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          {[
            { label: "MRR", value: "$12,400", change: "+8%" },
            { label: "CAC", value: "$142", change: "-5%" },
            { label: "LTV", value: "$1,890", change: "+12%" },
            { label: "Runway", value: "14 mo", change: "stable" }
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-xs text-[#6e7681] mb-1">{m.label}</p>
              <p className="text-xl font-bold text-white">{m.value}</p>
              <p className="text-xs text-[#3fb950] mt-1">{m.change}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Founder Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unified MRR, CAC, LTV & runway dashboard",
              "Connect Stripe, Baremetrics & more",
              "Automated daily metric calculations",
              "Email digest & Slack alerts",
              "Unlimited team members"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which tools does it integrate with?",
              a: "Startup Growth Tracker connects with Stripe, Baremetrics, ChartMogul, and more via API. Manual CSV import is also supported."
            },
            {
              q: "How are metrics like CAC and LTV calculated?",
              a: "Calculations run server-side using your connected data sources. Formulas follow standard SaaS definitions and are fully transparent in the dashboard."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel with one click from your account settings. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Startup Growth Tracker. All rights reserved.
      </footer>
    </main>
  );
}
