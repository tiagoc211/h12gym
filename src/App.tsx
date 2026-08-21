import { Experience } from './components/three/expirience'
import './styles/globals.css'

function App() {
  return (
    <>
      <div className="canvas-container">
        <Experience />
      </div>

      <div className="scroll-content">
        <section>
          <h1>H12 GYM</h1>
          <p>Scroll to enter</p>
        </section>

        <section>
          <h2>Strength</h2>
        </section>

        <section>
          <h2>Move</h2>
        </section>

        <section>
          <h2>Push Further</h2>
        </section>

        <section>
          <h2>H12</h2>
        </section>
      </div>
    </>
  )
}

export default App