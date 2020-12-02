export interface SocialsProps {
  children: import('react').ReactNode
}

export function Socials({ children }: SocialsProps) {
  return (
    <div className="m-auto max-w-screen-xl grid grid-flow-col grid-cols-3 justify-items-center h-full">
      {children}
    </div>
  )
}
