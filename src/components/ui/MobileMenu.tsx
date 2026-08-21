import type { SiteContent } from '../../content/siteContent'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  navItems: { href: string; label: string }[]
  content: SiteContent
}

export function MobileMenu({ isOpen, onClose, navItems, content }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`} hidden={!isOpen}>
      <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Menu">
        <button className="mobile-menu__close" type="button" onClick={onClose}>
          FECHAR
        </button>
        <p className="mobile-menu__brand">{content.brand.name}</p>
        <nav aria-label="Navegação mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onClose}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              {content.brand.instagramUrl ? (
                <a href={content.brand.instagramUrl} target="_blank" rel="noreferrer">
                  INSTAGRAM
                </a>
              ) : (
                <span className="disabled-link">INSTAGRAM (A confirmar)</span>
              )}
            </li>
            <li>
              {content.brand.facebookUrl ? (
                <a href={content.brand.facebookUrl} target="_blank" rel="noreferrer">
                  FACEBOOK
                </a>
              ) : (
                <span className="disabled-link">FACEBOOK (A confirmar)</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
