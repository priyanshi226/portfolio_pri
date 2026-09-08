import type { ReactNode } from 'react'

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="w-full overflow-x-hidden">{children}</div>
}
