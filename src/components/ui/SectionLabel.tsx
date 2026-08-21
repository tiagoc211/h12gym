type SectionLabelProps = {
  index?: string
  label: string
}

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <p className="section-label">
      {index ? `${index} / ` : ''}
      {label}
    </p>
  )
}
