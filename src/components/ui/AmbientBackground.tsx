const trackLines = ['01', '02', '03', '04'] as const

export function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden>
      <div className="ambient-background__grid" />
      <div className="ambient-background__beam ambient-background__beam--top" />
      <div className="ambient-background__beam ambient-background__beam--bottom" />
      <div className="ambient-background__turf">
        {trackLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="ambient-background__mark">H12</div>
    </div>
  )
}
