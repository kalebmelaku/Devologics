import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Hero />
      <Stats />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>;
}