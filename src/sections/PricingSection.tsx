import { PricingCard } from '../components/ui/PricingCard'
import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function PricingSection() {
  return (
    <section id="planos" className="site-section pricing-section">
      <SectionLabel index="06" label={siteContent.memberships.title} />
      <h2>PLANOS H12</h2>
      <p className="pricing-disclaimer">{siteContent.memberships.disclaimer}</p>

      <div className="pricing-grid">
        {siteContent.memberships.plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}
