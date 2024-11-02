'use client'

import React, { useCallback, useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientSize?: number
    gradientColor?: string
    gradientOpacity?: number
}

export function MagicCard({
    children,
    className,
    gradientSize = 200,
    gradientColor = 'rgb(133 77 14 / var(--tw-text-opacity))',
    gradientOpacity = 0.8,
}: MagicCardProps) {
    const mouseX = useMotionValue(-gradientSize)
    const mouseY = useMotionValue(-gradientSize)

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const { left, top } = e.currentTarget.getBoundingClientRect()
            mouseX.set(e.clientX - left)
            mouseY.set(e.clientY - top)
        },
        [mouseX, mouseY]
    )

    const handleMouseLeave = useCallback(() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
    }, [mouseX, mouseY, gradientSize])

    useEffect(() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
    }, [mouseX, mouseY, gradientSize])

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                'group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-amber-950 border border-slate-200 text-black dark:text-white dark:border-slate-800',
                className
            )}
        >
            <div className='relative z-10 w-full'>{children}</div>
            <motion.div
                className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                style={{
                    background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
                    opacity: gradientOpacity,
                }}
            />
        </div>
    )
}
