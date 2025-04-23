import News from './components/News';
import IconSquare from './components/IconSquare';
import ServicesSection from './components/service';
import AchievementsPage from './components/achievements';
import ImageSlider from './components/bigimgs';
import Image from "next/image";

export default function Home() {
  return (
    <>
<ImageSlider/>
<ServicesSection/>
<AchievementsPage/>


        <News/>
        <div className="flex justify-center gap-8 mt-16 md:gap-12 lg:gap-16 bg-gray-100 p-8 rounded-lg">
  <IconSquare icon="📝" label="About" href='/about' />
  <IconSquare icon="📍" label="Map" href='/map' />
  <IconSquare icon="☎︎" label="Call" href="/about#policy" />
  <IconSquare icon="💬" label="Chat" href='qa' />

</div>



    </>

  );
}
