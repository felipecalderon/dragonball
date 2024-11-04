'use client'

import React, { useCallback, useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientSize?: number
    gradientColor?: string
    gradientOpacity?: number
}

export function MagicCard({ children, className, gradientSize = 200, gradientColor = '#075985', gradientOpacity = 0.8 }: MagicCardProps) {
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
                'group relative flex size-auto min-h-96 overflow-hidden rounded-xl bg-sky-950 border border-amber-800 text-white hover:scale-105 transition-all',
                className
            )}
        >
            <div className='relative z-10 flex-1'>{children}</div>
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
