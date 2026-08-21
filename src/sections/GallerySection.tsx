import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent } from '../content/siteContent'

export function GallerySection() {
  return (
    <section className="site-section gallery-section">
      <SectionLabel label="GALERIA" />
      <div className="gallery-grid">
        {siteContent.gallery.map((item) => (
          <figure key={item.id} className="gallery-item">
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={{ objectPosition: item.objectPosition }}
            />
            <figcaption>
              <span>{item.label}</span>
              {item.credit ? <small>{item.credit}</small> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
