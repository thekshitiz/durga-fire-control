import NextLink from 'next/link'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  className?: string
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NextLink
        className={cn('hover:underline underline-offset-4', className)}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link' 