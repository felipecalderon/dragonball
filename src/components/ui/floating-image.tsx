'use client'

import { Race } from '@/constants/interfaces'
import Image from 'next/image'
import { useState } from 'react'

export default function FloatingImage({ race }: { race: Race }) {
    const [tempImg, setImg] = useState(race)
    return (
        <Image
            className='absolute bottom-0 left-0 rounded-full'
            src={`/icons/races/${tempImg}.jpg`}
            alt={race}
            width={30}
            height={30}
            onError={(e) => {
                setImg(Race.Unknown)
            }}
        />
    )
}
