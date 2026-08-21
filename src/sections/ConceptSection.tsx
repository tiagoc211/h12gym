import { siteContent } from '../content/siteContent'
import { SectionLabel } from '../components/ui/SectionLabel'

export function ConceptSection() {
  return (
    <section id="conceito" className="site-section concept-section">
      <SectionLabel index="01" label="CONCEITO" />
      <h2>{siteContent.story.title}</h2>
      <div className="stack-lines">
        {siteContent.story.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  )
}
