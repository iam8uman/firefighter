import Features from '@/components/Features';
import Partners from '@/components/Partners';
import Navbar from '@/components/static/Navbar';
import Footer from '@/components/Footer';
import LandingPage from '@/components/static/LandingPage';
import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import TopEvent from '@/components/TopEvent';

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div className="relative w-full bg-muted py-5">
        <Features />
      </div>
      <MaxWidthWrapper>
        <TopEvent />
      </MaxWidthWrapper>

      <div className="relative w-full bg-light">
        <Partners />
      </div>
      <Footer />
    </>
  );
}
