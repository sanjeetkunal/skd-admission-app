type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string }
export default function Input({ label, error, className="", ...props }: Props) {
  return (
    <label className="block">
      {label && <span className="text-sm font-medium">{label}</span>}
      <input {...props}
        className={`mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 ${className}`} />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  )
}
