import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import logoFont from 'next/font/local'
import SectionContainer from '../components/sectionContainer'
import Link from 'next/link'
import { ButtonList } from '../components/headerButtons'

const inter = Inter({ subsets: ['latin'] })
const snesFont = logoFont({ src: 'SnesItalic-1G9Be.ttf' })

export const metadata: Metadata = {
  title: '96 Exits',
  description: 'Daniel\'s gaming blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <div className='h-screen md:w-12 shrink-0' />
          <div className='h-screen bg-purple sm:w-24 shrink-0' />
          <SectionContainer>
            <div className="flex flex-col justify-between h-screen">
              <header className="items-center justify-between py-10 sm:flex">
                <div>
                  <Link href="/">
                    <div className="flex items-center justify-between">
                      <div className="mr-3">
                        <p className={snesFont.className + " text-8xl"}>96 Exits</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="space-x-3 md:flex">
                  {ButtonList.map((info) => (
                    <Link href={info.target} key={info.target} className='w-20 p-2 text-center border-2 rounded-full bg-light-gray hover:bg-light-purple'>{info.text}</Link>
                  ))}
                </div>
              </header>
              <main className="mb-auto">{children}</main>
            </div>
          </SectionContainer>
        </div>
      </body>
    </html>
  )
}
