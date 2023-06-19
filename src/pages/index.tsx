import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen items-center justify-center ${inter.className}`}>

      <div className='flex space-x-8 py-4'>
        <a href='https://twitter.com/heliuslabs' target="_blank" className='flex opacity-70 hover:opacity-100 duration-200 items-center justify-center w-12 h-12  rounded-lg'>
          <Image className='' alt="start" src="/twt.svg" width={24} height={24}></Image>
        </a>

        <a href='https://docs.helius.xyz/' target="_blank" className='flex opacity-70 hover:opacity-100 duration-200 items-center justify-center w-12 h-12 rounded-lg'>
          <Image className='' alt="Gitb" src="/gitbook.svg" width={24} height={24}></Image>
        </a>
        <a href='https://helius.dev' target="_blank" className='flex opacity-70 hover:opacity-100 duration-200 items-center justify-center w-12 h-12 rounded-lg'>
          <Image className='' alt="Helius" src="/helius.svg" width={24} height={24}></Image>
        </a>
        <a href='https://github.com/Tidelaw/discord-sales-bot' target="_blank" className='flex opacity-70 hover:opacity-100 duration-200 items-center justify-center w-12 h-12 rounded-lg'>
          <Image className='' alt="Gith" src="/github.svg" width={24} height={24}></Image>
        </a>
      </div>

    </main>
  )
}
