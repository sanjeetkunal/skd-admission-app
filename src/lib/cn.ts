export function cn(...args: any[]) {
  return args
    .flatMap((a: any) => {
      if (!a) return []
      if (typeof a === "string") return [a]
      if (Array.isArray(a)) return a.filter(Boolean)
      if (typeof a === "object") {
        return Object.entries(a).filter(([, v]) => Boolean(v)).map(([k]) => k)
      }
      return []
    })
    .join(" ")
}
