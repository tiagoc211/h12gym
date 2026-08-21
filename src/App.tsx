import { Experience } from './components/three/Experience'
import { HeroOverlay } from './components/ui/HeroOverlay'
import { ScrollIndicator } from './components/ui/ScrollIndicator'
import { StrengthOverlay } from './components/ui/StrengthOverlay'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <div className="experience">
        <Experience />
      </div>

      <div className="overlay-layer">
        <HeroOverlay />
        <StrengthOverlay />
        <ScrollIndicator />
      </div>

      <main className="scroll-content">
        <section className="scroll-step hero-step" />
        <section className="scroll-step entry-step" />
        <section className="scroll-step strength-step" />
        <section className="scroll-step transition-step" />
      </main>
    </>
  )
}

export default App