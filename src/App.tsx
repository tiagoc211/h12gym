import { Experience } from './components/three/Experience'
import { AmbientBackground } from './components/ui/AmbientBackground'
import { Header } from './components/ui/Header'
import { HeroOverlay } from './components/ui/HeroOverlay'
import { ScrollIndicator } from './components/ui/ScrollIndicator'
import { ScrollMediaOverlay } from './components/ui/ScrollMediaOverlay'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { StrengthOverlay } from './components/ui/StrengthOverlay'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { BenefitsSection } from './sections/BenefitsSection'
import { CoachingSection } from './sections/CoachingSection'
import { CommunitySection } from './sections/CommunitySection'
import { ConceptSection } from './sections/ConceptSection'
import { FaqSection } from './sections/FaqSection'
import { FinalCtaSection } from './sections/FinalCtaSection'
import { FooterSection } from './sections/FooterSection'
import { GallerySection } from './sections/GallerySection'
import { LocationSection } from './sections/LocationSection'
import { PricingSection } from './sections/PricingSection'
import { TrainingAreasSection } from './sections/TrainingAreasSection'

function App() {
  useSmoothScroll()

  return (
    <>
      <div id="top" />
      <div className="experience">
        <Experience />
      </div>

      <Header />

      <div className="overlay-layer">
        <HeroOverlay />
        <ScrollMediaOverlay />
        <StrengthOverlay />
        <ScrollIndicator />
        <ScrollProgress />
      </div>

      <main className="scroll-content">
        <section className="immersive-track" aria-label="Entrada na experiência">
          <div className="scroll-step hero-step" />
          <div className="scroll-step entry-step" />
          <div className="scroll-step strength-step" />
          <div className="scroll-step transition-step" />
        </section>

        <div className="content-surface">
          <AmbientBackground />
          <ConceptSection />
          <TrainingAreasSection />
          <BenefitsSection />
          <CoachingSection />
          <CommunitySection />
          <GallerySection />
          <PricingSection />
          <LocationSection />
          <FaqSection />
          <FinalCtaSection />
          <FooterSection />
        </div>
      </main>
    </>
  )
}

export default App
