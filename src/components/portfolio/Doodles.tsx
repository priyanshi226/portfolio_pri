import { cn } from '@/lib/utils'

type DoodleProps = { className?: string }

export function ArrowDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={cn('w-16 h-8', className)} aria-hidden="true">
      <path
        d="M4 40C24 8 70 4 100 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M82 12C90 16 98 19 108 21C102 27 97 33 94 42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function CurlyArrowDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 90 90" fill="none" className={cn('w-12 h-12', className)} aria-hidden="true">
      <path
        d="M12 14C40 8 66 24 60 46C55 64 28 66 24 50C21 38 36 32 44 42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 36L44 42L40 30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function UnderlineDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 16" preserveAspectRatio="none" fill="none" className={cn('w-full h-3', className)} aria-hidden="true">
      <path
        d="M2 10C40 3 90 13 130 6C155 1 178 9 198 5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cn('w-6 h-6', className)} aria-hidden="true">
      <path
        d="M20 2C21 12 22 18 32 20C22 22 21 28 20 38C19 28 18 22 8 20C18 18 19 12 20 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function HeartDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 28" fill="none" className={cn('w-5 h-4', className)} aria-hidden="true">
      <path
        d="M16 25C8 19 2 14 2 8.5 2 4.9 4.8 2 8.4 2c2.2 0 4.2 1.1 5.6 3 1.4-1.9 3.4-3 5.6-3C23.2 2 26 4.9 26 8.5c0 5.5-6 10.5-14 16.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function TinyWave({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 14" preserveAspectRatio="none" fill="none" className={cn('w-12 h-3', className)} aria-hidden="true">
      <path d="M2 8C8 2 14 2 20 8C26 14 32 14 38 8C44 2 50 2 56 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function CircleScribble({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={cn('w-24 h-14', className)} aria-hidden="true">
      <path
        d="M50 6C74 4 92 16 90 30C88 46 66 56 44 54C22 52 6 42 8 28C10 14 30 6 50 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function ScribbleDivider({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 240 20" preserveAspectRatio="none" fill="none" className={cn('w-full h-4', className)} aria-hidden="true">
      <path
        d="M2 10C20 2 30 18 48 10C66 2 76 18 94 10C112 2 122 18 140 10C158 2 168 18 186 10C204 2 214 18 232 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function MedalDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={cn('w-10 h-14', className)} aria-hidden="true">
      <path d="M22 4L30 22L38 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="30" cy="46" r="20" stroke="currentColor" strokeWidth="2.2" fill="none" />
      <path d="M22 34L30 46L38 34" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="30" cy="46" r="7" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  )
}

export function MathDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={cn('w-16 h-10', className)} aria-hidden="true">
      <text x="4" y="24" fontFamily="Caveat, cursive" fontSize="22" fill="currentColor">x² + y</text>
      <path d="M6 34C30 30 60 40 94 32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <text x="10" y="56" fontFamily="Caveat, cursive" fontSize="20" fill="currentColor">= 42</text>
    </svg>
  )
}

export function BugDoodle({ className, found = false }: DoodleProps & { found?: boolean }) {
  return (
    <svg viewBox="0 0 60 44" fill="none" className={cn('w-9 h-7', className)} aria-hidden="true">
      <ellipse cx="30" cy="24" rx="14" ry="11" stroke="currentColor" strokeWidth="2" fill={found ? 'currentColor' : 'none'} fillOpacity={found ? 0.15 : 0} />
      <circle cx="30" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M6 16L18 20M6 24L18 24M6 32L18 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M54 16L42 20M54 24L42 24M54 32L42 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M25 8L21 3M35 8L39 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function RoadDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 8 200" preserveAspectRatio="none" fill="none" className={cn('w-2 h-full', className)} aria-hidden="true">
      <path d="M4 0V200" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" strokeLinecap="round" />
    </svg>
  )
}

export function PinDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 28 32" fill="none" className={cn('w-3.5 h-4', className)} aria-hidden="true">
      <path
        d="M14 2C7.4 2 2 7.2 2 13.6 2 22 14 30 14 30S26 22 26 13.6C26 7.2 20.6 2 14 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="14" cy="13" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

export function LinkedInMark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn('w-4 h-4', className)} aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="10.5" cy="10.5" r="1.8" fill="currentColor" />
      <path d="M10.5 14.5V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M15.5 23V18.2C15.5 15.9 17 14.5 19 14.5C21 14.5 22 15.8 22 18.2V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M15.5 14.5V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GitHubMark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-4 h-4', className)} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
      />
    </svg>
  )
}

export function DocumentMark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 28 32" fill="none" className={cn('w-3.5 h-4', className)} aria-hidden="true">
      <path
        d="M6 2H17L23 8V29C23 29.6 22.6 30 22 30H6C5.4 30 5 29.6 5 29V3C5 2.4 5.4 2 6 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M17 2V8H23" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M9.5 16H18.5M9.5 20.5H18.5M9.5 25H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function PlusDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn('w-3 h-3', className)} aria-hidden="true">
      <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function BigSquiggle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 320 26" preserveAspectRatio="none" fill="none" className={cn('w-full h-6', className)} aria-hidden="true">
      <path
        d="M2 14C12 2 26 2 36 14C46 26 60 26 70 14C80 2 94 2 104 14C114 26 128 26 138 14C148 2 162 2 172 14C182 26 196 26 206 14C216 2 230 2 240 14C250 26 264 26 274 14C284 2 298 2 308 14C312 18 316 16 318 12"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function ChatBubbleMark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 26" fill="none" className={cn('w-4 h-3.5', className)} aria-hidden="true">
      <path
        d="M2 12.5C2 6.7 7.4 2 14.5 2S27 6.7 27 12.5 21.6 23 14.5 23c-1.5 0-2.9-.2-4.2-.6L4 25l1.6-5.4C3.3 17.7 2 15.2 2 12.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M9.5 11.5H19.5M9.5 15.5H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function EnvelopeMark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 24" fill="none" className={cn('w-4 h-3.5', className)} aria-hidden="true">
      <rect x="1.5" y="1.5" width="29" height="21" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M3 4.5L16 14L29 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function SwoopArrow({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 70 90" fill="none" className={cn('w-10 h-14', className)} aria-hidden="true">
      <path
        d="M14 6C10 30 14 54 34 68C44 75 54 76 62 72"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 68L62 72L55 58"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

const SCALLOP_PATH =
  'M 26 0 A 11.17 11.17 0 0 1 48.33 0 A 11.17 11.17 0 0 1 70.67 0 A 11.17 11.17 0 0 1 93 0 A 11.17 11.17 0 0 1 115.33 0 A 11.17 11.17 0 0 1 137.67 0 A 11.17 11.17 0 0 1 160 0 A 11.17 11.17 0 0 1 182.33 0 A 11.17 11.17 0 0 1 204.67 0 A 11.17 11.17 0 0 1 227 0 A 11.17 11.17 0 0 1 249.33 0 A 11.17 11.17 0 0 1 271.67 0 A 11.17 11.17 0 0 1 294 0 A 26 26 0 0 1 320 26 A 10.93 10.93 0 0 1 320 47.87 A 10.93 10.93 0 0 1 320 69.73 A 10.93 10.93 0 0 1 320 91.6 A 10.93 10.93 0 0 1 320 113.47 A 10.93 10.93 0 0 1 320 135.33 A 10.93 10.93 0 0 1 320 157.2 A 10.93 10.93 0 0 1 320 179.07 A 10.93 10.93 0 0 1 320 200.93 A 10.93 10.93 0 0 1 320 222.8 A 10.93 10.93 0 0 1 320 244.67 A 10.93 10.93 0 0 1 320 266.53 A 10.93 10.93 0 0 1 320 288.4 A 10.93 10.93 0 0 1 320 310.27 A 10.93 10.93 0 0 1 320 332.13 A 10.93 10.93 0 0 1 320 354 A 26 26 0 0 1 294 380 A 11.17 11.17 0 0 1 271.67 380 A 11.17 11.17 0 0 1 249.33 380 A 11.17 11.17 0 0 1 227 380 A 11.17 11.17 0 0 1 204.67 380 A 11.17 11.17 0 0 1 182.33 380 A 11.17 11.17 0 0 1 160 380 A 11.17 11.17 0 0 1 137.67 380 A 11.17 11.17 0 0 1 115.33 380 A 11.17 11.17 0 0 1 93 380 A 11.17 11.17 0 0 1 70.67 380 A 11.17 11.17 0 0 1 48.33 380 A 11.17 11.17 0 0 1 26 380 A 26 26 0 0 1 0 354 A 10.93 10.93 0 0 1 0 332.13 A 10.93 10.93 0 0 1 0 310.27 A 10.93 10.93 0 0 1 0 288.4 A 10.93 10.93 0 0 1 0 266.53 A 10.93 10.93 0 0 1 0 244.67 A 10.93 10.93 0 0 1 0 222.8 A 10.93 10.93 0 0 1 0 200.93 A 10.93 10.93 0 0 1 0 179.07 A 10.93 10.93 0 0 1 0 157.2 A 10.93 10.93 0 0 1 0 135.33 A 10.93 10.93 0 0 1 0 113.47 A 10.93 10.93 0 0 1 0 91.6 A 10.93 10.93 0 0 1 0 69.73 A 10.93 10.93 0 0 1 0 47.87 A 10.93 10.93 0 0 1 0 26 A 26 26 0 0 1 26 0 Z'

export function ScallopFrame({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 320 380"
      preserveAspectRatio="none"
      className={cn('absolute inset-0 h-full w-full', className)}
      aria-hidden="true"
    >
      <path d={SCALLOP_PATH} fill="currentColor" />
    </svg>
  )
}

export function TickBurst({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 28" fill="none" className={cn('w-8 h-6', className)} aria-hidden="true">
      <path d="M4 22L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 26L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 24L24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CheckMark({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn('w-4 h-4', className)} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path d="M6.5 12.5L10 16L18 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function TrophyDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 44 48" fill="none" className={cn('w-8 h-8', className)} aria-hidden="true">
      <path d="M14 6H30V18C30 24 26 28 22 28C18 28 14 24 14 18V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M14 8H8C8 14 10 18 14 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M30 8H36C36 14 34 18 30 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M22 28V34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 42H29L27 34H17L15 42Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function SchoolBuildingIllustration({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 320 240" fill="none" className={cn('h-full w-full', className)} aria-hidden="true">
      <rect width="320" height="240" fill="#EAE4F5" />
      <rect x="30" y="90" width="260" height="120" fill="#D8CDEE" stroke="#8F7FBE" strokeWidth="2" />
      <path d="M20 92L160 34L300 92" stroke="#8F7FBE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="145" y="150" width="30" height="60" fill="#F7F2E4" stroke="#8F7FBE" strokeWidth="2" />
      {[70, 110, 210, 250].map((x) => (
        <g key={x}>
          <rect x={x} y="115" width="26" height="26" fill="#F7F2E4" stroke="#8F7FBE" strokeWidth="1.6" />
          <rect x={x} y="160" width="26" height="26" fill="#F7F2E4" stroke="#8F7FBE" strokeWidth="1.6" />
        </g>
      ))}
      <rect x="120" y="34" width="8" height="22" fill="#8F7FBE" />
      <path d="M124 20L134 30H114L124 20Z" fill="#B9A6DE" />
      <circle cx="160" cy="60" r="10" fill="#F0C7CE" opacity="0.7" />
    </svg>
  )
}

export function DotCluster({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 20" fill="none" className={cn('w-7 h-4', className)} aria-hidden="true">
      <circle cx="4" cy="14" r="2" fill="currentColor" />
      <circle cx="18" cy="5" r="1.5" fill="currentColor" />
      <circle cx="32" cy="12" r="2.4" fill="currentColor" />
    </svg>
  )
}

export function LoopScribble({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 34 26" fill="none" className={cn('w-6 h-5', className)} aria-hidden="true">
      <path
        d="M4 18C2 8 14 2 20 10C25 17 15 22 12 15C9 8 20 4 26 10C30 14 28 20 24 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function SparkleCluster({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 80" fill="none" className={cn('w-24 h-14', className)} aria-hidden="true">
      <path d="M20 10C21 20 22 25 32 26C22 27 21 32 20 42C19 32 18 27 8 26C18 25 19 20 20 10Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M110 20C110.7 27 111.3 30 118 31C111.3 32 110.7 35 110 42C109.3 35 108.7 32 102 31C108.7 30 109.3 27 110 20Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="70" cy="52" r="2.4" fill="currentColor" />
      <circle cx="88" cy="16" r="1.8" fill="currentColor" />
      <circle cx="45" cy="60" r="1.6" fill="currentColor" />
    </svg>
  )
}
