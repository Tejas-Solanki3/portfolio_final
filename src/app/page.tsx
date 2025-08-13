import Header from '@/components/header';
import LandingPage from '@/components/landing-page';
import Gallery from '@/components/gallery';
import Journey from '@/components/journey';
import Projects from '@/components/projects';
import AboutMe from '@/components/about-me';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Expertise from '@/components/expertise';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LandingPage />
        <div className="relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_48px]">
              <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
          </div>
          <AboutMe />
        </div>
        <Expertise />
        <Projects />
        <Gallery />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
