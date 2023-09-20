import Image from 'next/image'
import HeroSection from './components/HeroSection'
import { roboto } from './fonts'



export default function Home() {

  return (
    <>
    <HeroSection className={roboto.className}/>
    </>
  )
}
