import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type CommonProps = {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
}

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

export function CTAButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: LinkProps | ButtonProps) {
  const classes = `cta-button cta-button--${variant} ${className}`.trim()

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonProps

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
