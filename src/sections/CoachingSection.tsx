import { CTAButton } from '../components/ui/CTAButton'
import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function CoachingSection() {
  return (
    <section className="site-section coaching-section">
      <SectionLabel index="04" label="ACOMPANHAMENTO" />
      <div className="coaching-layout">
        <h2>{siteContent.coaching.title}</h2>
        <div>
          <p>{siteContent.coaching.body}</p>
          {siteContent.coaching.isPlaceholder ? (
            <p className="placeholder-note">{siteContent.coaching.note}</p>
          ) : null}
          <CTAButton href="#messines" className="section-cta">
            {siteContent.coaching.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
