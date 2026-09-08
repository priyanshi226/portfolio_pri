import { cn } from '@/lib/utils'

/**
 * Organic paper-edge transition between two sections.
 * `topColor` fills the divider's own background (continues the section above).
 * `bottomColor` fills the wavy shape that dips down (introduces the section below).
 */
export function WavyDivider({
  topColor,
  bottomColor,
  className,
}: {
  topColor: string
  bottomColor: string
  className?: string
}) {
  return (
    <div
      className={cn('relative w-full overflow-hidden leading-[0]', className)}
      style={{ backgroundColor: topColor }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 860 48" preserveAspectRatio="none" className="block h-[30px] w-full sm:h-[46px]">
        <path
          d="M0 6C60 34 130 44 215 36C300 28 360 8 445 12C530 16 585 42 670 38C740 35 795 18 860 6V48H0V6Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
