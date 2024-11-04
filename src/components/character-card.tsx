import { Character, Race } from '@/constants/interfaces'
import { MagicCard } from './ui/magic-card'
import Image from 'next/image'
import { formatKi, parseKi } from '@/lib/parseKi'
import GenderSymbol from './gender-symbol'

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <MagicCard className='px-6 py-3 text-center size-auto flex flex-col justify-between relative'>
            <Image src={character.image} alt={character.name} width={150} height={150} className='mx-auto w-fit max-h-40 drop-shadow-2xl' />
            <p className='text-xl font-black'>{character.name}</p>
            <p className='text-sm'>
                Poder: <span className='text-base font-semibold'>{formatKi(parseKi(character.ki))}</span>
            </p>
            <p className='text-sm'>
                Max poder: <span className='text-base font-semibold'>{formatKi(parseKi(character.maxKi))}</span>
            </p>
            <p className='text-xs italic mx-auto w-2/3'>
                {character.description.length > 150 ? character.description.slice(0, 150) + '...' : character.description}
            </p>
            <p className='absolute top-0 left-0 text-white'>
                <GenderSymbol gender={character.gender} />
            </p>
            <p className='text-xs absolute top-0 right-0'>{character.affiliation}</p>
            {character.race === Race.Saiyan ? (
                <Image className='absolute bottom-0 left-0' src='/icons/Saiyan.png' alt={character.race} width={30} height={30} />
            ) : (
                <p className='text-xs absolute bottom-0 left-0'>{character.race}</p>
            )}
            <p className='text-xs'>{character.originPlanet}</p>
        </MagicCard>
    )
}
