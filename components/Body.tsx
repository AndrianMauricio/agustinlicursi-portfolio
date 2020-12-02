export interface BodyProps {
  children: import('react').ReactNode
}

export function Body({ children }: BodyProps) {
  return (
    <div className="content-container">
      <div className="content-block">{children}</div>
    </div>
  )
}
