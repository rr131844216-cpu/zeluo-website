import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Globe2,
  HardHat,
  Lightbulb,
  Mail,
  MapPin,
  Wrench,
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';

const REMOTE = {
  hero: 'https://images.hostinger.com/2636ef7c-b829-47b4-94f0-badc86cd1cd8.png',
  team: 'https://images.hostinger.com/f88e7bca-5740-4aff-8bac-d838627cd08a.png',
  dc: 'https://images.hostinger.com/a081c3af-cc3b-4466-9dda-c05fef428b2f.png',
  caseInterior: 'https://horizons-cdn.hostinger.com/1756bc8a-4efb-4d7b-809b-f6ee53919971/726a1290c44deba2f032998c8831474d.jpg',
  casePlumbing: 'https://horizons-cdn.hostinger.com/1756bc8a-4efb-4d7b-809b-f6ee53919971/326be8362d08cb860fdd76ace526d0d9.jpg',
};

const imageSrc = (name) => `/images/${name}`;
const fallbackImage = (e, remote) => {
  if (e.currentTarget.dataset.fallback === '1') {
    e.currentTarget.style.display = 'none';
    return;
  }
  e.currentTarget.dataset.fallback = '1';
  e.currentTarget.src = remote;
};

const projectCases = [
  {
    img: CASE_INTERIOR_IMG,
    tag: '室內裝修',
    title: '空間開整與現場施工',
    desc: '現場拆除、開口與結構銜接一氣呵成，團隊親力親為掌握每一道工序，確保後續裝修與水電配置順利銜接。',
  },
  {
    img: CASE_PLUMBING_IMG,
    tag: '水電工程',
    title: '給排水管路配置',
    desc: '依現場條件規劃管線走向與固定方式，施工細節清楚可驗，交付後運轉穩定，客戶安心使用。',
  },
  {
    img: '/images/masonry-work.jpg',
    tag: '泥作工程',
    title: '泥作打除與基礎施工',
    desc: '依現場需求進行地坪打除與基礎整理，重視施工精度與現場整潔，為後續工程建立穩固基礎。',
  },
];
const services = [
  { icon: HardHat, title: '室內裝修', desc: '從空間規劃到現場施工，整合裝修工序與細節管理，打造兼具實用性與質感的室內環境。', items: ['空間規劃', '裝修施工', '現場管理'] },
  { icon: Wrench, title: '水電工程', desc: '提供住宅、商業空間與各類場域的水電配置、安裝與維護服務，確保設備穩定運作。', items: ['給排水工程', '電氣配線', '設備安裝'] },
  { icon: Globe2, title: '園藝服務', desc: '依據環境條件與使用需求規劃綠化，提供植栽配置、修剪與日常養護，維持舒適景觀。', items: ['植栽配置', '景觀整理', '綠地養護'] },
  { icon: Building2, title: '門禁系統', desc: '規劃與建置門禁管理設備，協助住宅與企業提升出入管理效率及場域安全性。', items: ['門禁規劃', '設備建置', '系統維護'] },
  { icon: Lightbulb, title: '監視系統', desc: '依照場域動線與安全需求配置監視設備，建立清晰、穩定且便於管理的影像監控環境。', items: ['設備配置', '影像監控', '後續維護'] },
  { icon: HardHat, title: '泥作水泥工程', desc: '承作泥作、水泥與基礎修繕工程，重視施工品質與工序銜接，完成耐用可靠的工程成果。', items: ['泥作工程', '水泥施作', '修繕工程'] },
];

const stats = [
  { value: 6, suffix: '項', label: '主要服務項目' },
  { value: 4, suffix: '大', label: '服務執行階段' },
];

const steps = [
  { no: '01', title: '需求了解', desc: '深入了解客戶的業務背景與實際需求，釐清範圍、時程與預期成果。' },
  { no: '02', title: '方案規劃', desc: '提出執行方案、資源配置與報價，明確定義交付項目與驗收標準。' },
  { no: '03', title: '專業執行', desc: '由專業團隊依約施工或供應，過程透明、進度可追蹤，隨時溝通調整。' },
  { no: '04', title: '驗收與售後', desc: '完成驗收交付，並提供後續維護、諮詢與長期合作支援。' },
];

const industries = ['室內裝修', '水電工程', '園藝服務', '門禁系統', '監視系統', '泥作水泥工程', '空間規劃', '設備建置'];

export default function HomePage() {
  const heroLines = ['專業工程，細節到位，', '打造安心可靠的空間。'];

  return (
    <div id="top" className="grain min-h-screen bg-background text-foreground">
      <Helmet>
        <html lang="zh-Hant" />
        <title>澤洛科技有限公司｜室內裝修・水電工程・系統建置</title>
        <meta name="description" content="澤洛科技有限公司提供室內裝修、水電工程、園藝服務、門禁系統、監視系統與泥作水泥工程，以專業技術與誠信建立長期合作關係。" />
      </Helmet>
      <Seo
        title="澤洛科技有限公司｜室內裝修・水電工程・系統建置"
        description="澤洛科技有限公司專注室內裝修、水電工程、園藝服務、門禁系統、監視系統與泥作水泥工程，提供專業可靠的工程服務。"
        image={REMOTE.hero}
        siteName="澤洛科技有限公司"
      />

      <SiteHeader />

      <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#16191d]">
          <img
            src={imageSrc('hero.png')}
            onError={(e) => fallbackImage(e, REMOTE.hero)}
            alt="澤洛科技台北辦公室的工程團隊與數據看板"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
        </div>

        <div className="relative mx-auto w-full max-w-[90rem] px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-tech text-xs uppercase tracking-[0.4em] text-primary"
          >
            Zeluo Technology Co., Ltd.｜統一編號 60750071
          </motion.p>

          <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
            {heroLines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.2, ease: 'easeOut' }}
                className="block"
              >
                {i === 1 ? (
                  <span className="relative inline-block">
                    {line}
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
                      style={{ originX: 0 }}
                      className="absolute -bottom-1 left-0 h-[3px] w-full bg-primary/70"
                    />
                  </span>
                ) : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            澤洛科技有限公司專注室內裝修、水電工程、園藝服務、門禁系統、監視系統與泥作水泥工程，以扎實的技術與誠信的態度，為客戶提供完整可靠的工程解決方案。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="group inline-flex min-h-[52px] items-center gap-2 bg-primary px-8 text-base font-medium text-primary-foreground transition-transform active:scale-[0.98]">
              聯絡我們洽談合作
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex min-h-[52px] items-center border border-border px-8 text-base text-foreground transition-colors hover:border-primary hover:text-primary">
              查看服務項目
            </a>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-secondary/40 py-4">
        <div className="marquee flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...industries, ...industries].map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-10 font-tech text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {s}<span className="h-1.5 w-1.5 bg-primary" />
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[90rem] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-border border-y border-border md:grid-cols-2 md:divide-y-0">
          {stats.map((s) => (
            <Reveal key={s.label} y={18}>
              <div className="px-2 py-6 md:px-8">
                <p className="font-tech text-4xl font-bold text-primary lg:text-5xl"><CountUp value={s.value} suffix={s.suffix} /></p>
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-20 border-b border-border bg-card/40 py-24 lg:py-32">
        <div className="mx-auto max-w-[72rem] px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-tech text-xs uppercase tracking-[0.35em] text-primary">Services</p>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">專業工程，整合執行。</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                從室內裝修、水電工程到系統建置，澤洛科技以專業整合能力，為客戶提供完整可靠的工程服務。
              </p>
            </div>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-t border-border">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
                  <div className="flex items-start gap-4 md:col-span-4">
                    <s.icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <span className="font-tech text-xs text-muted-foreground">0{i + 1}</span>
                      <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5">{s.desc}</p>
                  <ul className="space-y-2 md:col-span-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-foreground/90">
                        <span className="h-px w-4 bg-primary" />{it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="scroll-mt-20 border-b border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-5">
                <p className="font-tech text-xs uppercase tracking-[0.35em] text-primary">Projects</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">實地工程案例，<br />經驗看得見。</h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:col-span-7">
                澤洛科技長期承包各類室內裝修與水電工程案件，累積豐富現場經驗。從拆除開發、管路配置到完工驗收，我們以嚴謹態度把關品質，贏得客戶信任與滿意回饋。以下為實際施工現場紀錄。
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {projectCases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden border border-border bg-card">
                  <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/3]">
                    <img src={c.img} onError={(e) => fallbackImage(e, c.remote)} alt={`${c.tag}－${c.title}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 font-tech text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm">{c.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 flex flex-col gap-4 border border-border bg-secondary/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">無論是住宅翻修、商業空間整建或設備更新，我們都以同樣標準執行工程。歡迎提供現場需求，我們以經驗協助評估。</p>
              <a href="#contact" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                諮詢類似工程 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-tech text-xs uppercase tracking-[0.35em] text-primary">About</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl">以專業與誠信，<br />經營多元業務。</h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              澤洛科技有限公司由代表人徐子騫先生領導，設立於新北市三重區。我們以工程實務為根基，專注室內裝修、水電工程、園藝服務與門禁監視系統建置，致力成為客戶長期信賴的合作夥伴。
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              澤洛科技整合跨領域資源，從室內裝修、水電與泥作水泥工程，到園藝服務及門禁、監視系統建置，以扎實的執行力與嚴格的品質要求，為每一位客戶交付經得起檢驗的成果。
            </p>
            <figure className="mt-10 border-l-2 border-primary pl-6">
              <blockquote className="font-display text-xl leading-relaxed">「多元業務的核心，是把每一件承諾都做到讓客戶安心交付。細心是我們對品質與客戶信任的承諾。」</blockquote>
              <figcaption className="mt-5">
                <span className="text-sm"><span className="font-medium">徐子騫</span><span className="ml-2 text-muted-foreground">代表人</span></span>
              </figcaption>
            </figure>
          </div>

          <div className="space-y-6">
            <Reveal>
              <div className="relative min-h-[420px] overflow-hidden bg-secondary">
                <img src={imageSrc('team.png')} onError={(e) => fallbackImage(e, REMOTE.team)} alt="澤洛科技工程師在白板前討論系統架構" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: Wrench, t: '專業工程整合', d: '室內裝修、水電與泥作水泥工程一站式協作。' },
                { icon: Building2, t: '系統安全建置', d: '門禁與監視系統依現場需求規劃安裝。' },
                { icon: MapPin, t: '新北三重服務據點', d: '新北市三重區中正北路 25 巷 17 號。' },
                { icon: Globe2, t: '長期現場維護', d: '提供維護、巡檢與後續工程支援服務。' },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.05}>
                  <div className="h-full border border-border bg-card p-6">
                    <c.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-lg font-bold">{c.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative scroll-mt-20 overflow-hidden border-y border-border bg-secondary/20">
        <img src={imageSrc('dc.png')} onError={(e) => fallbackImage(e, REMOTE.dc)} alt="機房內的伺服器機櫃" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative mx-auto max-w-[72rem] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="font-tech text-xs uppercase tracking-[0.35em] text-primary">Process</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-5xl">從需求到交付的四個階段。</h2>
          </Reveal>
          <ol className="mt-16 space-y-0 border-l border-border">
            {steps.map((st, i) => (
              <Reveal key={st.no} delay={i * 0.08}>
                <li className="relative pb-12 pl-12 last:pb-0 md:pl-12">
                  <span className="absolute -left-[6px] top-2 h-3 w-3 bg-primary" />
                  <span className="font-tech text-sm text-primary">{st.no}</span>
                  <h3 className="mt-1 font-display text-2xl font-bold">{st.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{st.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto max-w-[72rem] px-6 lg:px-10">
          <Reveal>
            <div className="border border-border bg-card p-8 sm:p-12 lg:p-16">
              <p className="font-tech text-xs uppercase tracking-[0.35em] text-primary">Contact</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">聊聊你的需求。</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">無論是室內裝修、水電工程、園藝服務或門禁監視系統建置，歡迎與我們聯繫，將由專人為您說明合作方式與服務內容。</p>

              <div className="mt-12 grid gap-10 md:grid-cols-3">
                {[
                  { icon: Mail, label: '電子郵件', value: 'zeluo.tech.ltd@gmail.com', href: 'mailto:zeluo.tech.ltd@gmail.com' },
                  { icon: Building2, label: '聯絡電話', value: '(02) 2988-0260', href: 'tel:0229880260' },
                  { icon: MapPin, label: '地址', value: '新北市三重區中正北路 25 巷 17 號', href: null },
                ].map((c) => (
                  <div key={c.label}>
                    <c.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <p className="mt-4 font-tech text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-2 block text-base text-foreground underline-offset-4 hover:text-primary hover:underline">{c.value}</a>
                    ) : (
                      <p className="mt-2 text-base text-foreground">{c.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
                <span>代表人：徐子騫</span>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <span>歡迎來電洽談工程需求</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-6 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-display text-base font-bold text-foreground">澤洛科技有限公司</p>
            <p className="mt-1">Zeluo Technology Co., Ltd.｜專業工程服務</p>
            <p className="mt-1">新北市三重區中正北路 25 巷 17 號</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#services" className="hover:text-foreground">服務項目</a>
            <a href="#cases" className="hover:text-foreground">工程案例</a>
            <a href="#about" className="hover:text-foreground">關於澤洛</a>
            <a href="#work" className="hover:text-foreground">合作流程</a>
            <a href="#contact" className="hover:text-foreground">聯絡我們</a>
          </nav>
          <p>© {new Date().getFullYear()} 澤洛科技有限公司 版權所有</p>
        </div>
      </footer>
    </div>
  );
}
