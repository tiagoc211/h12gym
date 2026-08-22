import { siteContent, type TrainingArea } from '../content/siteContent'
import { SectionLabel } from '../components/ui/SectionLabel'

export function TrainingAreasSection() {
  const areas = siteContent.space.areas as TrainingArea[]

  return (
    <section id="espaco" className="site-section training-areas-section">
      <SectionLabel index="02" label="O ESPAÇO" />
      <div className="section-head">
        <h2>{siteContent.space.title}</h2>
        <p>{siteContent.space.description}</p>
      </div>

      <div className="areas-grid">
        {areas.map((area) => (
          <article key={area.id} className="area-card">
            <p className="area-card__index">{area.index}</p>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            {area.sourceNote ? <p className="source-note">{area.sourceNote}</p> : null}
            {area.isPlaceholder ? (
              <p className="placeholder-note">{area.note ?? 'Informação provisória.'}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
