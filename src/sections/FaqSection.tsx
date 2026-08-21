import { Accordion } from '../components/ui/Accordion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function FaqSection() {
  return (
    <section className="site-section faq-section">
      <SectionLabel index="08" label={siteContent.faq.title} />
      <h2>Perguntas frequentes</h2>
      <Accordion items={siteContent.faq.items} />
    </section>
  )
}
