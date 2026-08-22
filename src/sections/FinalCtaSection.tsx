import { CTAButton } from '../components/ui/CTAButton'
import { siteContent } from '../content/siteContent'

export function FinalCtaSection() {
  return (
    <section id="final" className="site-section final-cta-section">
      <p className="final-watermark">H12</p>
      <div className="final-cta-content">
        <h2>
          {siteContent.finalCta.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p>{siteContent.finalCta.subtitle}</p>
        <CTAButton
          href={siteContent.brand.instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          {siteContent.finalCta.button}
        </CTAButton>
      </div>
    </section>
  )
}
