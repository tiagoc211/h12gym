import { useState } from 'react'
import type { FaqItem } from '../../content/siteContent'

type AccordionProps = {
  items: FaqItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openItem === item.id
        const answerId = `${item.id}-answer`
        const buttonId = `${item.id}-button`

        return (
          <article key={item.id} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenItem(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span aria-hidden>{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
              {item.isPlaceholder ? (
                <p className="placeholder-note">Resposta provisória (a confirmar).</p>
              ) : null}
            </div>
          </article>
        )
      })}
    </div>
  )
}
