'use client'

import Image from 'next/image'

export default function Loading() {
    return (
        <div className='z-50 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <Image src='/title-db.webp' alt='Imagen dragon ball' className='mx-auto' width={800} height={400} />
            <h3 className='text-center text-3xl font-black py-3'>Cargando personaje...</h3>
        </div>
    )
}
