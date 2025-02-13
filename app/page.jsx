
import Experience from "./components/Experience";
import GetInTouch from "./components/GetInTouch";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import MyApproach from "./components/MyApproach";
import Navbar from "./components/Navbar";
import RecentProjects from "./components/RecentPorjects";
import Testimonial from "./components/Testimonial";







export default function Home() {
  return (
    
<div className="relative bg-grid-stone-950 bg-black-100 bg-[length:100px_100px] overflow-x-hidden"
  style={{
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='28' height='28' fill='none'>
        <path d='M0 0.5H31.5V32' stroke='rgba(255, 255, 255, 0.2)' stroke-width='0.01' />
        <path d='M0 1.5H31.5V32' stroke='rgba(255, 255, 255, 0.2)' stroke-width='0.1' />
      </svg>`
    )}")`,
  }}

>
  
  <div className="container mx-auto text-white">
    <div className="py-4"></div>

<Navbar/>
    <Hero />
    <Grid/>
    <RecentProjects/>
    <Testimonial/>
    <Experience/>
  <MyApproach/>
  <GetInTouch/>
  </div>
</div>

  );
}
