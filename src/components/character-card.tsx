import { Character } from '@/constants/interfaces'
import { MagicCard } from './ui/magic-card'
import Image from 'next/image'
import { parseKi } from '@/lib/parseKi'

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <MagicCard className='px-6 py-3 text-center flex flex-col justify-between relative'>
            <Image src={character.image} alt={character.name} width={150} height={150} className='mx-auto w-fit max-h-40 drop-shadow-2xl' />
            <p className='text-xl font-black'>{character.name}</p>
            <p className='text-sm'>
                {parseKi(character.ki).toLocaleString('es-ES')} - {parseKi(character.maxKi).toLocaleString('es-ES')}
            </p>
            <p className='text-xs italic mx-auto w-2/3'>
                {character.description.length > 150 ? character.description.slice(0, 150) + '...' : character.description}
            </p>
            <p className='text-xs absolute top-0 right-0'>{character.affiliation}</p>
            <p className='text-xs absolute top-0 left-0'>{character.gender}</p>
            <p className='text-xs absolute bottom-0 left-0'>{character.race}</p>
            <p className='text-xs'>{character.originPlanet}</p>
        </MagicCard>
    )
}
