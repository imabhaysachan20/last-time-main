import { AuroraBackground } from '@/components/AuroraBg';
import { TextGenerateEffect } from '@/components/ui/TextGenerate2';
import { BsRocketTakeoff } from "react-icons/bs"; 
import MagicButton from '@/components/ui/MagicButton';
const Hero = ({serviceName,serviceDesc}:{serviceName:string,serviceDesc:string}) => {
  return (
    <>
    <AuroraBackground>
    <TextGenerateEffect words={serviceName} className="text-center text-[40px] md:text-5xl lg:text-6xl"></TextGenerateEffect>
    <p className='text-white text-center uppercase tracking-wide text-sm md:text-md lg:text-lg'>{serviceDesc}</p>
    <div className="mt-4">
    <a href='#work'><MagicButton  icon={<BsRocketTakeoff />} position="right" otherClasses="tracking-widest uppercase text-md" text='Explore Our Work'></MagicButton></a>
    </div>
  </AuroraBackground>
  </>
  )
}

export default Hero
