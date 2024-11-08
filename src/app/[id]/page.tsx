import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { URL } from '@/constants/config'
import { Character } from '@/constants/interfaces'
import { ArrowLeft, Earth, Sword, Users } from 'lucide-react'
import Link from 'next/link'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const fetchCharacter = await fetch(`${URL}/characters/${id}`)
    const character: Character = await fetchCharacter.json()
    return (
        <div className='max-w-4xl mx-auto p-4'>
            <Link href='/' className='inline-block mb-4'>
                <Button variant='outline' className='text-white border-white/20 hover:bg-white/10'>
                    <ArrowLeft size={16} className='mr-2' />
                    Volver al inicio
                </Button>
            </Link>
            <Card className='bg-slate-900 text-white'>
                <CardHeader className='relative'>
                    <div className='flex items-center gap-6'>
                        <div className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500'>
                            <img src={character.image} alt={character.name} className='w-full h-full object-cover object-top' />
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-3 mb-2'>
                                <CardTitle className='text-3xl font-bold'>{character.name}</CardTitle>
                                <Badge variant='secondary' className='bg-orange-500'>
                                    {character.race}
                                </Badge>
                            </div>
                            <div className='flex flex-wrap gap-4 text-sm text-gray-300'>
                                <div className='flex items-center gap-2'>
                                    <Users size={16} />
                                    <span>{character.affiliation}</span>
                                </div>
                                {character.originPlanet && (
                                    <div className='flex items-center gap-2'>
                                        <Earth size={16} />
                                        <span>Planeta: {character.originPlanet.name}</span>
                                        {character.originPlanet.isDestroyed && (
                                            <Badge variant='destructive' className='text-xs'>
                                                Destruído
                                            </Badge>
                                        )}
                                    </div>
                                )}
                                <div className='flex items-center gap-2'>
                                    <Sword size={16} />
                                    <span>{character.gender}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className='space-y-6'>
                        {/* Power Level Section */}
                        <div className='space-y-2'>
                            <h3 className='text-lg font-semibold'>Nivel de pelea</h3>
                            <div className='space-y-1'>
                                <div className='flex justify-between text-sm'>
                                    <span>Ki Normal: {character.ki}</span>
                                    <span>Máximo Ki: {character.maxKi}</span>
                                </div>
                                <Progress className='h-2 bg-slate-700' />
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className='space-y-2'>
                            <h3 className='text-lg font-semibold'>Descripción</h3>
                            <p className='text-gray-300 text-sm'>{character.description}</p>
                        </div>

                        {/* Transformations Section */}
                        {character.transformations && character.transformations.length > 0 && (
                            <div className='space-y-2'>
                                <h3 className='text-lg font-semibold'>Transformaciones</h3>
                                <ScrollArea className='w-full whitespace-nowrap rounded-lg bg-slate-800 p-4'>
                                    <div className='flex flex-wrap gap-4'>
                                        {character.transformations.map((character, index) => (
                                            <div key={index} className='inline-block'>
                                                <h3 className='text-sm font-semibold text-center'>{character.name}</h3>
                                                <div className='w-24 h-24 rounded-lg bg-slate-700 overflow-hidden'>
                                                    <img
                                                        src={character.image}
                                                        alt={`Transformation ${index + 1}`}
                                                        className='w-full h-full object-cover object-top'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
