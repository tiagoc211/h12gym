import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function CommunitySection() {
  return (
    <section className="site-section community-section">
      <SectionLabel index="05" label={siteContent.community.eyebrow} />
      <div className="section-head">
        <h2>{siteContent.community.title}</h2>
        <p>{siteContent.community.description}</p>
      </div>
    </section>
  )
}
