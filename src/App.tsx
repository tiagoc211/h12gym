import { Experience } from './components/three/Experience'
import { AmbientBackground } from './components/ui/AmbientBackground'
import { Header } from './components/ui/Header'
import { HeroOverlay } from './components/ui/HeroOverlay'
import { ScrollIndicator } from './components/ui/ScrollIndicator'
import { ScrollProgress } from './components/ui/ScrollProgress'
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
import { FeedbackSection } from './sections/FeedbackSection'
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
        <ScrollIndicator />
        <ScrollProgress />
      </div>

      <main className="scroll-content">
        <section className="hero-spacer" aria-label="Entrada H12" />

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
          <FeedbackSection />
          <FaqSection />
          <FinalCtaSection />
          <FooterSection />
        </div>
      </main>
    </>
  )
}

export default App
