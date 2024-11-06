'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Music4 } from 'lucide-react'

const musicSymbols = ['𝄞', '𝅗𝅥', '𝅘𝅥', '𝅘𝅥𝅯', '𝆕']

const MusicNote = ({ symbol }: { symbol: string }) => {
    const angle = Math.random() * 360
    const startDistance = 60 // Start from the edge of the button
    const endDistance = 60 // End further away
    const duration = 6 + Math.random() * 2 // Longer animation duration

    return (
        <div
            className='absolute text-blue-300 text-2xl z-20' // Increased z-index
            style={{
                left: '50%',
                top: '50%',
                animation: `floatOut ${duration}s linear forwards`,
                opacity: 0,
                transform: `rotate(${angle}deg) translate(${startDistance}px) rotate(-${angle}deg)`,
            }}
        >
            {symbol}
        </div>
    )
}

export default function PlayButton({ src }: { src: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [notes, setNotes] = useState<string[]>([])

    useEffect(() => {
        audioRef.current = new Audio(src)
        audioRef.current.addEventListener('ended', () => setIsPlaying(false))
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', () => setIsPlaying(false))
            }
        }
    }, [])

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setNotes((prev) => [...prev.slice(-5), musicSymbols[Math.floor(Math.random() * musicSymbols.length)]])
            }, 500) // Increased interval for better visibility
            return () => clearInterval(interval)
        } else {
            setNotes([])
        }
    }, [isPlaying])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className='fixed z-50 top-3 right-3 w-32 h-32 flex items-center justify-center'>
            {notes.map((note, index) => (
                <MusicNote key={`${index}-${note}`} symbol={note} />
            ))}
            <button
                onClick={togglePlay}
                className='w-16 h-16 rounded-full flex items-center justify-center bg-red-700 text-white transition-all duration-300 hover:bg-red-800 z-50'
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            >
                {isPlaying ? <Music4 className='w-8 h-8 animate-ping -rotate-90 scale-75' /> : <Play className='w-8 h-8' />}
            </button>
        </div>
    )
}
