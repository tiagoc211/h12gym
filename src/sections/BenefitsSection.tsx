import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function BenefitsSection() {
  return (
    <section id="treino" className="site-section benefits-section">
      <SectionLabel index="03" label="TREINO" />
      <h2>{siteContent.benefits.title}</h2>
      <div className="benefits-grid">
        {siteContent.benefits.items.map((item) => (
          <article key={item.index} className="benefit-item">
            <p>{item.index}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
