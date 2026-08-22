import { CTAButton } from '../components/ui/CTAButton'
import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function CoachingSection() {
  const coaching = siteContent.coaching as typeof siteContent.coaching & {
    isPlaceholder?: boolean
    note?: string
  }

  return (
    <section className="site-section coaching-section">
      <SectionLabel index="04" label="ACOMPANHAMENTO" />
      <div className="coaching-layout">
        <h2>{coaching.title}</h2>
        <div>
          <p>{coaching.body}</p>
          {coaching.isPlaceholder ? (
            <p className="placeholder-note">{coaching.note}</p>
          ) : null}
          <CTAButton href="#messines" className="section-cta">
            {coaching.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
