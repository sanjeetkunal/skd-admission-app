export default function SectionHeading({ eyebrow, title, subtitle }:{
  eyebrow?:string; title:string; subtitle?:string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-brand-blue/80">{eyebrow}</div>}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="mt-2 muted">{subtitle}</p>}
    </div>
  )
}
