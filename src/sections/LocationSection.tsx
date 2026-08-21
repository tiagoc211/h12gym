import { CTAButton } from '../components/ui/CTAButton'
import { SectionLabel } from '../components/ui/SectionLabel'
import { siteContent, type ClubContent } from '../content/siteContent'

export function LocationSection() {
  const clubs = siteContent.clubs as ClubContent[]

  return (
    <section id="messines" className="site-section location-section">
      <SectionLabel index="07" label="CLUBES H12" />
      <div className="section-head">
        <h2>{siteContent.location.title}</h2>
        <p>Informação pública separada por localização para não misturar moradas, horários e contexto de cada clube.</p>
      </div>

      <div className="clubs-grid">
        {clubs.map((club) => (
          <article key={club.id} className="club-card">
            {club.imageSrc ? (
              <img
                src={club.imageSrc}
                alt={club.imageAlt ?? club.name}
                loading="lazy"
                style={{ objectPosition: club.imagePosition }}
              />
            ) : null}

            <div className="club-card__content">
              <p className="club-card__location">{club.locationLabel}</p>
              <h3>{club.name}</h3>
              <p>{club.description}</p>

              <dl className="location-fields">
                {club.fields.map((field) => (
                  <div key={field.label}>
                    <dt>{field.label}</dt>
                    <dd>
                      {field.value}
                      {field.sourceNote ? <small>{field.sourceNote}</small> : null}
                    </dd>
                  </div>
                ))}
              </dl>

              <h4>HORÁRIO</h4>
              <dl className="schedule-list">
                {club.schedule.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>
                      {item.value}
                      {item.sourceNote ? <small>{item.sourceNote}</small> : null}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="club-card__actions">
                {club.mapUrlConfirmed && club.mapUrl ? (
                  <CTAButton href={club.mapUrl} target="_blank" rel="noreferrer">
                    ABRIR NO MAPA
                  </CTAButton>
                ) : (
                  <button type="button" className="cta-button cta-button--ghost" disabled>
                    MAPA A CONFIRMAR
                  </button>
                )}
              </div>

              {club.sourceNote ? <p className="source-note">{club.sourceNote}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
