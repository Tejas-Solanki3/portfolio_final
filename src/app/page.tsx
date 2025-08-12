import Header from '@/components/header';
import LandingPage from '@/components/landing-page';
import Gallery from '@/components/gallery';
import Journey from '@/components/journey';
import Projects from '@/components/projects';
import AboutMe from '@/components/about-me';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LandingPage />
        <AboutMe />
        <Projects />
        <Gallery />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
