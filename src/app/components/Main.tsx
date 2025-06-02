'use client';

import { About } from "./About";
import { AppDownload } from "./AppDownload";
import { FeaturesSection } from "./FeaturesSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navigation } from "./Navigation";
import { SignUp } from './SignUp';

export const Main = () => {
  return (
    <div className="scroll-smooth bg-primary text-primary">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <About />
        <SignUp />
        <AppDownload />
        <Footer />
    </div>
  )
}
