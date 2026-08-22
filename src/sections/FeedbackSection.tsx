import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function FeedbackSection() {
  return (
    <section className="site-section feedback-section">
      <SectionLabel index="08" label={siteContent.feedback.eyebrow} />
      <div className="feedback-panel">
        <p className="feedback-mark">"</p>
        <div>
          <blockquote>{siteContent.feedback.quote}</blockquote>
          <cite>{siteContent.feedback.cite}</cite>
          <small>{siteContent.feedback.note}</small>
        </div>
      </div>
    </section>
  )
}
