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
  <IconSquare icon="🏠" label="Home" />
  <IconSquare icon="📍" label="Map" />
  <IconSquare icon="🛒" label="Shop" />
  <IconSquare icon="💬" label="Chat" />

</div>



    </>

  );
}
