import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border-2 px-2.5 py-0.5 text-xs font-bold whitespace-nowrap transition-all duration-150 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "border-[#4c4f69] bg-[#8839ef] text-white shadow-[2px_2px_0_#4c4f69] [a]:hover:bg-[#ea76cb]",
        secondary:
          "border-[#4c4f69] bg-[#dce0e8] text-[#4c4f69] shadow-[2px_2px_0_#4c4f69] [a]:hover:bg-[#ccd0da]",
        destructive:
          "border-[#4c4f69] bg-[#d20f39]/10 text-[#d20f39] shadow-[2px_2px_0_#4c4f69] focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline: "border-[#4c4f69] bg-white text-[#4c4f69] shadow-[2px_2px_0_#4c4f69]",
        ghost: "border-transparent hover:bg-[#dce0e8] hover:text-[#4c4f69]",
        link: "text-[#8839ef] underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
