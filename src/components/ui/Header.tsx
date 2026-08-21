import { useState } from 'react'
import { siteContent } from '../../content/siteContent'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { CTAButton } from './CTAButton'
import { MobileMenu } from './MobileMenu'

const navItems = [
  { href: '#espaco', label: 'ESPAÇO' },
  { href: '#treino', label: 'TREINO' },
  { href: '#planos', label: 'PLANOS' },
  { href: '#messines', label: 'CLUBES' },
]

export function Header() {
  const progress = useScrollProgress()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = progress > 0.02

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a href="#top" className="site-header__brand">
          H12
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <CTAButton href="#final" className="desktop-only">
            COMEÇAR
          </CTAButton>
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            MENU
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        content={siteContent}
      />
    </>
  )
}
