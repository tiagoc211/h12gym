import type { MembershipPlan } from '../../content/siteContent'
import { CTAButton } from './CTAButton'

type PricingCardProps = {
  plan: MembershipPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
      <header>
        {plan.highlight ? <p className="pricing-highlight">{plan.highlight}</p> : null}
        <h3>{plan.name}</h3>
      </header>

      <p className="pricing-price">
        <strong>{plan.price}</strong>
        <span>{plan.period}</span>
      </p>

      {plan.isExample ? <p className="pricing-example">Valor demonstrativo</p> : null}

      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <CTAButton href="#messines" variant={plan.featured ? 'primary' : 'ghost'}>
        QUERO COMEÇAR
      </CTAButton>
    </article>
  )
}
