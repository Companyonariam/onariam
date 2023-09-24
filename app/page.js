import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { SectionOne } from '@/components/SectionOne'
import { SectionTwo } from '@/components/SectionTwo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-11/12 mx-auto h-fit ">
      <Header />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
    </main>
  )
}
