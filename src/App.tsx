import { Experience } from './components/three/Experience'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  return (
    <>
      <div className="experience">
        <Experience />
      </div>

      <main className="scroll-content">
        <section className="panel hero">
          <h1>H12 GYM</h1>
          <p>SCROLL TO ENTER</p>
        </section>

        <section className="panel">
          <h2>STRENGTH</h2>
        </section>

        <section className="panel">
          <h2>PERFORMANCE</h2>
        </section>

        <section className="panel">
          <h2>MOVEMENT</h2>
        </section>

        <section className="panel">
          <h2>COMMUNITY</h2>
        </section>

        <section className="panel final">
          <h2>H12</h2>
        </section>
      </main>
    </>
  )
}

export default App