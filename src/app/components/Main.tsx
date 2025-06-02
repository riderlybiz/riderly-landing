'use client';

import { About } from "./About";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { Navigation } from "./Navigation";

export const Main = () => {
  return (
    <div className="scroll-smooth bg-primary text-primary">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <About />
    </div>
  )
}
