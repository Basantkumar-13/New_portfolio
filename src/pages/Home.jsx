import Hero from '../components/home/Hero';
import MetricsRow from '../components/home/MetricsRow';
import AboutSection from '../components/home/AboutSection';
import FeaturedProjects from '../components/home/FeaturedProjects';

export default function Home() {
  return (
    <div className="space-y-10 pb-8">
      {/* 1. Hero Section with 3D Workspace Graphic */}
      <Hero />

      {/* 2. Key Metrics Row (4 Cards) */}
      <MetricsRow />

      {/* 3. About Section (Moved into Home) */}
      <AboutSection />

      {/* 4. Featured Projects Showcase (4 Cards) */}
      <FeaturedProjects />
    </div>
  );
}
