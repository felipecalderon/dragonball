import CharacterCard from '@/components/character-card'
import { URL } from '@/constants/config'
import { Character } from '@/constants/interfaces'

interface ResponseCharacters {
    items: Character[]
}
export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>
}) {
    const { page } = await searchParams
    const existPage = page ? Number(page) : 1
    const charactersRes = await fetch(
        `${URL}/characters?page=${existPage}&limit=9`
    )
    const characters: ResponseCharacters = await charactersRes.json()
    return (
        <div className='min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='grid grid-cols-3 gap-3 items-center justify-center'>
                {characters.items.map((c) => (
                    <CharacterCard key={c.id} character={c} />
                ))}
            </main>
        </div>
    )
}
