import Menu from '@/components/menu';
import Banner from '@/components/banner';
import Pricing from '@/components/pricing';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import { Oxanium } from 'next/font/google';
import Footer from '@/components/footer';
import LogoCloud from '@/components/logo-clouds';
import Testimonials from '@/components/testimonials';
import Combo from '@/components/combo';
import Cta from '@/components/cta';
import WebAgency from '@/components/web-agency';

const oxanium = Oxanium({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-black ${oxanium.className}`}>
      <Menu />
      <Banner />
      <WebAgency />
      <Cta />
      <Portfolio />
      <LogoCloud />
      <Pricing />
      <Testimonials />
      <Combo />
      <Contact />
      <Cta />
      <Footer />
    </main>
  );
}
