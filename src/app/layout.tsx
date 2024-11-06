import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import FlickeringGrid from '@/components/ui/flickering-grid'
import PlayButton from '@/components/play-button'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Dragon ball',
    description: 'Testing the API wea',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='es'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
                <PlayButton src='https://res.cloudinary.com/duwncbe8p/video/upload/f_auto:video,q_auto/tid3ql2rqgduqyyizcey' />
                <FlickeringGrid className='-z-10 fixed size-full bg-yellow-600/80 overflow-hidden' />
                {children}
            </body>
        </html>
    )
}
