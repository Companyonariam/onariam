import { Header } from './components/Header'
import { HeroSection } from '@/components/HeroSection'
import { SectionGrid } from '@/components/SectionGrid'
import { SectionOne } from '@/components/SectionOne'
import { SectionTwo } from '@/components/SectionTwo'
import { BlogCard } from '@/components/Blogs/BlogCard'




export default async function Home() {

  return (

    <main className="w-11/12 sm:w-full md:w-11/12 lg:w-1/2 xl:w-1/2 mx-auto">
      <Header />
      <HeroSection />
      <SectionGrid />
      <BlogCard />
      <SectionOne />
      <SectionTwo />
    </main>


  )
}

