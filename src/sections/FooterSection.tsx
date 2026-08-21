import { siteContent } from '../content/siteContent'

export function FooterSection() {
  return (
    <footer className="site-footer">
      <p>{siteContent.footer.text}</p>
    </footer>
  )
}
