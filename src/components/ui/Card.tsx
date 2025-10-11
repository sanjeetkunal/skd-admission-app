export function Card({ children, className="" }: any) {
  return <div className={`rounded-2xl bg-white shadow-soft ${className}`}>{children}</div>
}
export function CardBody({ children, className="" }: any) {
  return <div className={`p-4 md:p-6 ${className}`}>{children}</div>
}
