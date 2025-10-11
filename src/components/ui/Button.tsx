import { cn } from "@/lib/cn"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "dark"
  size?: "sm" | "md" | "lg"
}
export default function Button({ className, variant="primary", size="md", ...props }: Props) {
  const sizes = { sm:"h-9 px-4 text-sm", md:"h-10 px-5", lg:"h-11 px-6 text-lg" }
  const variants = {
    primary:"bg-brand-gold text-slate-900 hover:brightness-95",
    outline:"border border-slate-300 hover:bg-slate-50",
    dark:"bg-slate-900 text-white hover:bg-slate-800"
  }
  return (
    <button
      className={cn("inline-flex items-center justify-center rounded-lg font-medium shadow-soft transition",
        sizes[size], variants[variant], className)}
      {...props}
    />
  )
}
