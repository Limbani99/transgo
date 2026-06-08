import React from 'react'

const FeatureCard = ({ title, desc }) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">✓</div>
    <h4 className="mt-4 text-sm font-semibold text-slate-900">{title}</h4>
    <p className="mt-2 text-sm text-slate-500">{desc}</p>
  </div>
)

function Home() {
  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              NEXT-GEN LOGISTICS
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Move Your Goods
              <br />
              <span className="text-blue-700">Anywhere, Anytime</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm text-slate-500">
              Connect with trusted transportation companies and track your shipments in real-time. Our
              global network ensures your cargo reaches its destination with precision and speed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
              >
                Login
              </a>
              <a href="/register" className="inline-flex items-center rounded-full border border-blue-600 px-5 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50">
                Create Account
              </a>
            </div>

            <div className="mt-10 flex items-center gap-10">
              <div>
                <div className="text-2xl font-semibold text-slate-900">15k+</div>
                <div className="text-sm text-slate-500">Global Partners</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">99.9%</div>
                <div className="text-sm text-slate-500">On-Time Delivery</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl bg-gradient-to-tr from-white to-slate-100 p-6 shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-200 p-6">
                  <div className="h-full w-full rounded-lg bg-[url('https://via.placeholder.com/560x360.png?text=GLOBAL+LOGISTICS+SOLUTIONS')] bg-cover bg-center shadow-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / FEATURES */}
      <section className="bg-white/90">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold text-slate-900">Why Choose TransGo?</h2>
            <p className="mt-3 text-sm text-slate-500">Empowering global trade through a seamless digital ecosystem designed for efficiency, security, and real-time visibility.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Real-Time Tracking" desc="Precision location monitoring for every single shipment, updated every second globally." />
            <FeatureCard title="Trusted Partners" desc="Vetted logistics companies with verified safety records and premium service standards." />
            <FeatureCard title="Secure Payments" desc="Enterprise-grade encryption for all transactions with automated escrow protection." />
            <FeatureCard title="Fast Deliveries" desc="Optimized routing algorithms that reduce transit time by up to 35% across routes." />
          </div>
        </div>
      </section>

      {/* BLUE CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 shadow-2xl">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="text-white">
              <h3 className="text-3xl font-bold">Experience Operational Calm</h3>
              <p className="mt-4 max-w-md text-sm">Manage global supply chains with a refined, spacious interface that prioritizes clarity and operational trust.</p>
              <a href="/dashboard" className="mt-6 inline-flex items-center rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-blue-600 shadow-md">Explore Dashboard →</a>
            </div>

            <div className="flex justify-center">
              <div className="h-40 w-64 rounded-xl bg-white/20 p-4">
                <div className="h-full w-full rounded-md bg-[url('https://via.placeholder.com/400x240.png?text=Dashboard+Preview')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home