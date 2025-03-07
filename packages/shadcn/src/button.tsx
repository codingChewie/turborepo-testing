import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'

// Utils
import {cn} from '@repo/utils/tailwind'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        text: 'font-medium text-primary-500 hover:text-primary-600',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        primary:
          'bg-primary-500 hover:bg-primary-600 uppercase text-white font-bold border-transparent flex',
        icon: 'flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500',
      },
      size: {
        default: '',
        full: 'px-6 py-3 w-full',
        sm: 'btn-primary text-xs normal-case w-fit px-8',
        md: 'px-8 py-3 min-w-48',
        icon: 'px-3 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export {Button, buttonVariants}
