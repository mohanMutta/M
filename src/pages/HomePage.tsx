import Hero from '../components/Hero';
import CreatorProfile from '../components/CreatorProfile';
import Dashboard from '../components/Dashboard';
import FeaturedContent from '../components/FeaturedContent';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreatorProfile />
      <Dashboard />
      <FeaturedContent />
      <Gallery />
    </>
  );
}
