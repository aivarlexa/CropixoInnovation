import {
  ArrowRight,
  Award,
  Beaker,
  CheckCircle2,
  ChevronRight,
  Factory,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Microscope,
  Phone,
  Sprout,
  SunMedium,
  Tractor,
  Waves,
} from 'lucide-react'
import greenhouseHero from './assets/Green2.png'
import greenhouseDetail from './assets/Green1.jpg'
import cropHouse from './assets/Green3.jpeg'

const products = [
  ['Organic', 'Carbon-rich soil builders for living soils and long-term fertility.', Leaf],
  ['NPK', 'Balanced macro nutrition engineered for precise growth stages.', Beaker],
  ['Micronutrients', 'Chelated trace elements for resilient, high-quality yields.', Microscope],
  ['Specialty Fertilizers', 'Water-soluble and crop-specific blends for intensive systems.', FlaskConical],
  ['Bio-Fertilizers', 'Microbial solutions that improve nutrient uptake and soil vitality.', Sprout],
]

const advantages = [
  ['ISO-aligned quality systems', Award],
  ['Research-driven formulations', Beaker],
  ['Lower-emission manufacturing', Factory],
  ['European and global standards', Globe2],
]

const crops = ['Fruits', 'Vegetables', 'Cereals', 'Plantations', 'Floriculture']

const insights = [
  ['Precision nutrition for greenhouse crops', 'How fertigation scheduling improves uniformity, root health, and nutrient efficiency.'],
  ['Building soil carbon without yield compromise', 'Practical guidance for growers transitioning to regenerative nutrition programs.'],
  ['Micronutrient timing before flowering', 'A field note on boron, zinc, and calcium programs for stronger crop set.'],
]

const sectionClass = 'mx-auto w-[min(1180px,calc(100%-40px))] py-20 md:py-26'
const eyebrowClass = 'mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#1f6f43]'
const h2Class = 'mb-5 text-4xl font-bold leading-none tracking-normal text-[#15251c] md:text-6xl'
const bodyClass = 'text-base leading-8 text-[#65736b] md:text-lg'
const cardClass = 'rounded-3xl border border-[#1f6f4324] bg-white/80 shadow-[0_24px_70px_rgba(22,48,35,0.12)]'
const buttonClass = 'inline-flex items-center justify-center gap-2 rounded-full bg-[#123f2a] px-6 py-4 font-bold text-white shadow-[0_12px_28px_rgba(18,63,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b3320] hover:shadow-[0_18px_36px_rgba(18,63,42,0.28)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1f6f4359]'

function App() {
  return (
    <main className="overflow-hidden bg-[#f8faf6] text-[#15251c] [background-image:linear-gradient(180deg,rgba(217,236,244,0.46),transparent_520px)]">
      <nav className="fixed left-1/2 top-3 z-10 flex min-h-14 w-[calc(100%-20px)] -translate-x-1/2 items-center justify-between gap-4 rounded-[28px] border border-white/60 bg-white/80 px-2.5 py-2 shadow-[0_20px_55px_rgba(16,54,35,0.12)] backdrop-blur-xl md:top-5 md:min-h-16 md:w-[min(1180px,calc(100%-32px))] md:rounded-full md:px-3 md:py-2.5 md:pl-5">
        <a className="flex items-center gap-2.5 font-bold tracking-normal" href="#top" aria-label="Cropixo home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#1f6f43] to-[#67a36e] text-white md:h-10 md:w-10">
            <Leaf size={20} aria-hidden="true" />
          </span>
          <span className="max-w-28 leading-tight md:max-w-none">Cropixo Nutrition</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-[#40524a] lg:flex">
          <a className="transition hover:text-[#1f6f43]" href="#products">Products</a>
          <a className="transition hover:text-[#1f6f43]" href="#sustainability">Sustainability</a>
          <a className="transition hover:text-[#1f6f43]" href="#research">Research</a>
          <a className="transition hover:text-[#1f6f43]" href="#contact">Contact</a>
        </div>
        <a className="rounded-full bg-[#123f2a] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(18,63,42,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0b3320] md:px-5" href="#contact">
          Dealer Inquiry
        </a>
      </nav>

      <section className="relative grid min-h-[100svh] items-end px-5 pb-9 pt-28 text-white md:px-[clamp(20px,5vw,80px)] md:pb-14 md:pt-36" id="top" aria-labelledby="hero-title">
        <img className="absolute inset-0 h-full w-full object-cover" src={greenhouseHero} alt="Sunlit modern greenhouse with healthy crops in the Netherlands" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,30,20,0.78),rgba(9,30,20,0.34)_52%,rgba(9,30,20,0.08)),linear-gradient(0deg,rgba(9,30,20,0.5),transparent_50%)]" />
        <div className="relative z-[1] max-w-[850px]">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#d9f4e4]">Netherlands-inspired crop nutrition</p>
          <h1 id="hero-title" className="mb-6 max-w-[820px] text-[clamp(2.8rem,17vw,4.4rem)] font-bold leading-[0.94] tracking-normal md:text-[clamp(3.2rem,8vw,7.6rem)]">
            Advanced fertilizer systems for cleaner, stronger harvests.
          </h1>
          <p className="max-w-[620px] text-base leading-8 text-white/85 md:text-xl">
            Premium crop nutrition engineered for growers who demand precision,
            sustainability, and consistent field performance from soil to export.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a className={buttonClass} href="#products">
              Explore products <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/15 px-5 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/25" href="#research">
           ``   View research
            </a>
          </div>
        </div>
        <div className="relative z-[2] mt-8 w-[min(280px,calc(100%-40px))] rounded-3xl border border-white/40 bg-white/15 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.15)] backdrop-blur-xl lg:absolute lg:bottom-16 lg:right-[clamp(20px,5vw,70px)] lg:mt-0">
          <span className="text-xs uppercase text-white/75">nutrient efficiency</span>
          <strong className="my-2 block text-7xl leading-none">31%</strong>
          <p className="m-0 leading-6 text-white/80">average program improvement across monitored greenhouse trials</p>
        </div> 
      </section>

      <section className={`${sectionClass} grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`} id="about">
        <div>
          <p className={eyebrowClass}>About us</p>
          <h2 className={h2Class}>Scientific fertility, designed with Dutch clarity.</h2>
        </div>
        <div>
          <p className={bodyClass}>
            Cropixo Nutrition develops high-grade fertilizers for progressive farms
            protected cultivation, and distributors serving quality-focused growers.
            Our work combines agronomy, formulation science, and efficient production
            to support healthier plants with fewer wasted inputs.
          </p>
          <div className="mt-8 grid gap-3.5 sm:grid-cols-3">
            {['24 crop protocols', '18 export markets', '0.3% batch variance'].map((metric) => {
              const [value, ...label] = metric.split(' ')
              return (
                <span className="min-h-24 rounded-2xl border border-[#1f6f4324] bg-white p-4 text-[#65736b]" key={metric}>
                  <strong className="block text-3xl text-[#123f2a]">{value}</strong>
                  {label.join(' ')}
                </span>
              )
            })}
          </div>
        </div>
      </section>

      <section className={sectionClass} id="products">
        <div className="mb-10 max-w-[760px]">
          <p className={eyebrowClass}>Product portfolio</p>
          <h2 className={h2Class}>Nutrition categories for every growing system.</h2>
        </div>
        <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
          {products.map(([title, text, Icon]) => (
            <article className={`${cardClass} min-h-64 p-7 transition hover:-translate-y-1.5 hover:border-[#1f6f4352] hover:shadow-[0_30px_90px_rgba(22,48,35,0.16)]`} key={title}>
              <Icon className="text-[#1f6f43]" size={26} aria-hidden="true" />
              <h3 className="my-4 text-xl font-bold text-[#15251c]">{title}</h3>
              <p className="leading-7 text-[#65736b]">{text}</p>
              <a className="mt-3 inline-flex items-center gap-1.5 font-bold text-[#123f2a] transition hover:text-[#1f6f43]" href="#contact" aria-label={`Ask about ${title}`}>
                Request formulation <ChevronRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="relative min-h-[520px]" aria-label="Sustainable greenhouse production">
        <img className="h-[520px] w-full object-cover md:h-[560px]" src={greenhouseDetail} alt="Rows of leafy greens growing in a controlled greenhouse" />
        <div className="absolute bottom-8 left-5 w-[min(620px,calc(100%-40px))] rounded-[28px] border border-white/40 bg-white/15 p-[clamp(26px,4vw,46px)] text-white shadow-[0_24px_70px_rgba(0,0,0,0.15)] backdrop-blur-xl md:bottom-14 md:left-[clamp(20px,7vw,100px)]">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-[#d9f4e4]">Controlled agriculture</p>
          <h2 className="mb-0 text-4xl font-bold leading-none tracking-normal text-white md:text-6xl">Clean inputs for high-performance greenhouses and open fields.</h2>
        </div>
      </section>

      <section className={`${sectionClass} grid gap-4.5 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]`} id="why">
        <div className="mb-2 max-w-[760px] md:col-span-2 lg:col-span-1">
          <p className={eyebrowClass}>Why choose us</p>
          <h2 className={h2Class}>Built for trust at distributor and farm level.</h2>
        </div>
        {advantages.map(([title, Icon]) => (
          <div className={`${cardClass} flex min-h-36 items-center gap-4.5 p-6 text-lg font-bold`} key={title}>
            <Icon className="text-[#1f6f43]" size={24} aria-hidden="true" />
            <span>{title}</span>
          </div>
        ))}
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-40px))] items-center gap-10 rounded-[34px] bg-[linear-gradient(135deg,rgba(220,239,229,0.9),rgba(217,236,244,0.78))] px-6 py-16 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16" id="sustainability">
        <div>
          <p className={eyebrowClass}>Sustainable agriculture</p>
          <h2 className={h2Class}>Efficient nutrient management with measurable environmental care.</h2>
          <p className={bodyClass}>
            Our programs help growers feed crops exactly where and when nutrients
            are needed, lowering losses through leaching, runoff, and unnecessary
            applications.
          </p>
        </div>
        <div className="grid gap-3.5">
          {['Slow-release strategies', 'Fertigation compatibility', 'Soil biology support', 'Water-use efficiency'].map((item) => (
            <span className="flex min-h-14 items-center gap-3 rounded-2xl border border-[#1f6f431f] bg-white/70 px-5 py-4 font-bold text-[#123f2a]" key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />{item}
            </span>
          ))}
        </div>
      </section>

      <section className={sectionClass} id="solutions">
        <div className="mb-10 max-w-[760px]">
          <p className={eyebrowClass}>Crop solutions</p>
          <h2 className={h2Class}>Programs tailored to crop value, climate, and growth stage.</h2>
        </div>
        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-5">
          {crops.map((crop) => (
            <article className={`${cardClass} min-h-56 bg-gradient-to-b from-white/90 to-[#f9faf6]/80 p-7 transition hover:-translate-y-1.5 hover:border-[#1f6f4352]`} key={crop}>
              <SunMedium className="text-[#1f6f43]" size={20} aria-hidden="true" />
              <h3 className="my-4 text-xl font-bold">{crop}</h3>
              <p className="leading-7 text-[#65736b]">Stage-wise nutrition planning, foliar support, and field advisory.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} grid items-center gap-10 lg:grid-cols-2 lg:gap-20`} id="research">
        <img className="h-[360px] w-full rounded-[34px] object-cover shadow-[0_24px_70px_rgba(22,48,35,0.12)] md:h-[520px]" src={cropHouse} alt="Healthy leafy crops inside a bright glasshouse" />
        <div>
          <p className={eyebrowClass}>Research and innovation</p>
          <h2 className={h2Class}>Laboratory validation meets precision agriculture.</h2>
          <p className={bodyClass}>
            From raw-material screening to agronomic trials, every formulation is
            tested for purity, solubility, compatibility, and crop response.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#dcefe5] px-4 font-bold text-[#123f2a]"><FlaskConical size={18} aria-hidden="true" /> Lab testing</span>
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#dcefe5] px-4 font-bold text-[#123f2a]"><Tractor size={18} aria-hidden="true" /> Field trials</span>
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#dcefe5] px-4 font-bold text-[#123f2a]"><Waves size={18} aria-hidden="true" /> Smart fertigation</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-4.5 pb-20 pt-10 md:grid-cols-2 md:pb-26">
        <div className={`${cardClass} p-[clamp(28px,4vw,46px)]`}>
          <p className="text-2xl leading-snug text-[#15251c] md:text-3xl">“Cropixo helped us stabilize greenhouse yield while reducing nutrient waste. The program feels precise, premium, and practical.”</p>
          <span className="font-bold text-[#8a6948]">Marijn de Vries, Greenhouse Grower</span>
        </div>
        <div className={`${cardClass} p-[clamp(28px,4vw,46px)]`}>
          <p className="text-2xl leading-snug text-[#15251c] md:text-3xl">“Our distributors value the clean packaging, technical sheets, and consistent batch quality. It is a brand farmers trust quickly.”</p>
          <span className="font-bold text-[#8a6948]">Anika Rao, Regional Distributor</span>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mb-10 max-w-[760px]">
          <p className={eyebrowClass}>News and insights</p>
          <h2 className={h2Class}>Agronomy notes for better decisions.</h2>
        </div>
        <div className="grid gap-4.5 md:grid-cols-3">
          {insights.map(([title, text]) => (
            <article className={`${cardClass} min-h-64 p-7 transition hover:-translate-y-1.5 hover:border-[#1f6f4352]`} key={title}>
              <span className="text-xs font-extrabold uppercase text-[#8a6948]">Field journal</span>
              <h3 className="my-4 text-xl font-bold">{title}</h3>
              <p className="leading-7 text-[#65736b]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-40px))] items-center gap-8 rounded-[32px] bg-[#173d2a] px-6 py-14 text-white md:px-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white">Dealer network</p>
          <h2 className="mb-5 text-4xl font-bold leading-none tracking-normal text-white md:text-6xl">Partnering with progressive distributors worldwide.</h2>
          <p className="text-base leading-8 text-white/85 md:text-lg">Regional technical managers support channel partners with training, crop protocols, trial design, and seasonal demand planning.</p>
        </div>
        <a className="inline-flex items-center justify-center gap-2 justify-self-start rounded-full bg-white px-6 py-4 font-bold text-[#123f2a] transition hover:-translate-y-0.5 lg:justify-self-end" href="#contact">
          Become a dealer <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>

      <section className={`${sectionClass} grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]`} id="contact">
        <div className="rounded-[32px] bg-[#123f2a] p-[clamp(28px,5vw,56px)] text-white">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white">Contact</p>
          <h2 className="mb-5 text-4xl font-bold leading-none tracking-normal text-white md:text-6xl">Start a crop nutrition inquiry.</h2>
          <p className="flex items-center gap-2.5 text-white/80"><MapPin size={18} aria-hidden="true" /> Innovation hub: Westland, Netherlands</p>
          <p className="flex items-center gap-2.5 text-white/80"><Mail size={18} aria-hidden="true" /> hello@cropixo.example</p>
          <p className="flex items-center gap-2.5 text-white/80"><Phone size={18} aria-hidden="true" /> +31 70 000 0000</p>
          <div className="my-7 flex items-center gap-2.5" aria-label="Social links">
            <a className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20" href="https://www.linkedin.com" aria-label="LinkedIn"><Globe2 size={20} /></a>
            <a className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20" href="mailto:hello@cropixo.example" aria-label="Email"><Mail size={20} /></a>
          </div>
          <div className="grid min-h-44 place-items-center rounded-3xl border border-white/20 bg-[linear-gradient(135deg,rgba(217,236,244,0.2),rgba(220,239,229,0.1)),repeating-linear-gradient(90deg,transparent_0_24px,rgba(255,255,255,0.08)_25px_26px),repeating-linear-gradient(0deg,transparent_0_24px,rgba(255,255,255,0.08)_25px_26px)] text-center text-white/75" aria-label="Map preview">
            Westland Agri-Tech Corridor
          </div>
        </div>
        <form className={`${cardClass} grid gap-4 p-[clamp(24px,4vw,42px)]`} aria-label="Inquiry form">
          <label className="grid gap-2 font-bold text-[#123f2a]">Name<input className="w-full rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5 text-[#15251c]" type="text" name="name" autoComplete="name" required /></label>
          <label className="grid gap-2 font-bold text-[#123f2a]">Email<input className="w-full rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5 text-[#15251c]" type="email" name="email" autoComplete="email" required /></label>
          <label className="grid gap-2 font-bold text-[#123f2a]">Interest<select className="w-full rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5 text-[#15251c]" name="interest" defaultValue="dealer"><option value="dealer">Dealer partnership</option><option value="product">Product inquiry</option><option value="research">Research collaboration</option></select></label>
          <label className="grid gap-2 font-bold text-[#123f2a]">Message<textarea className="w-full resize-y rounded-2xl border border-[#1f6f4324] bg-[#fbfdf9] px-4 py-3.5 text-[#15251c]" name="message" rows="5" placeholder="Tell us about your crop, region, and nutrition goals." /></label>
          <button className={buttonClass} type="submit">Send inquiry <ArrowRight size={18} aria-hidden="true" /></button>
        </form>
      </section>
    </main>
  )
}

export default App
