import CharacterCard from '@/components/character-card'
import ShimmerButton from '@/components/ui/shimmer-button'
import { URL } from '@/constants/config'
import { Character } from '@/constants/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface ResponseCharacters {
    items: Character[]
    meta: {
        totalItems: number
        itemCount: number
        itemsPerPage: number
        totalPages: number
        currentPage: number
    }
}
export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams
    const existPage = page ? Number(page) : 1
    const charactersRes = await fetch(`${URL}/characters?page=${existPage}&limit=9`)
    const characters: ResponseCharacters = await charactersRes.json()

    const totalPages = Math.ceil(characters.meta.totalItems / 9)
    const isFirstPage = characters.meta.currentPage === 1
    const isLastPage = characters.meta.currentPage === totalPages
    const nextPage = isLastPage ? totalPages : characters.meta.currentPage + 1
    const prevPage = isFirstPage ? 1 : characters.meta.currentPage - 1
    // await timeout(20000)
    return (
        <div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <Image src='/title-db.webp' alt='Imagen dragon ball' className='mx-auto' width={800} height={400} />
            <main className='z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center justify-center place-items-center'>
                {characters.items.map((c) => (
                    <CharacterCard key={c.id} character={c} />
                ))}
            </main>
            <div className='flex justify-center gap-4 mt-3'>
                <Link href={`/?page=${prevPage}`} className={`${isFirstPage ? 'opacity-70 pointer-events-none' : ''}`}>
                    <ShimmerButton disabled={isFirstPage}>{'<'} Anterior</ShimmerButton>
                </Link>
                <Link href={`/?page=${nextPage}`} className={`${isLastPage ? 'opacity-70 pointer-events-none' : ''}`}>
                    <ShimmerButton disabled={isLastPage}>Siguiente {'>'}</ShimmerButton>
                </Link>
            </div>
        </div>
    )
}
