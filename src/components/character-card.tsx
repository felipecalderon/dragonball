import { Character } from '@/constants/interfaces'
import { MagicCard } from './ui/magic-card'

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <MagicCard>
            <div className='px-6 py-10 text-center'>
                <p className='text-xl'>{character.name}</p>
            </div>
        </MagicCard>
    )
}
