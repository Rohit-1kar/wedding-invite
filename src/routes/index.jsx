import { createFileRoute } from '@tanstack/react-router';
import { useContent } from '../hooks/useContent.js';
import Navbar from '../components/layout/Navbar.jsx';
import Hero from '../components/sections/Hero.jsx';
import EventDetails from '../components/sections/EventDetails.jsx';
import Rsvp from '../components/sections/Rsvp.jsx';
import Countdown from '../components/sections/Countdown.jsx';
import Gallery from '../components/sections/Gallery.jsx';
import Intro from '../components/sections/Intro.jsx';
import Promotion from '../components/sections/Promotion.jsx';
import Family from '../components/sections/Family.jsx';
import Wishes from '../components/sections/Wishes.jsx';

export const Route = createFileRoute('/')({
  component: IndexComponent,
});

function IndexComponent() {
  const { content, language, toggleLanguage } = useContent();

  return (
    <main className="pt-16">
      <Navbar 
        data={content.navbar} 
        onLanguageToggle={toggleLanguage} 
        currentLang={language} 
      />

      {/* Main Sections with ID tags for navigation */}
      <section id="hero">
        <Hero data={content.hero} />
      </section>

      <Countdown targetDate="2046-12-12T00:00:00" labels={content.countdown} />
      
      <Intro data={content.intro} />

      <section id="family">
        <Family data={content.family} />
      </section>

      <section id="gallery">
        <Gallery data={content.gallery} />
      </section>

      <section id="events">
        <EventDetails 
          events={content.events} 
          title={content.eventSectionTitle} 
        />
      </section>

     


      <section id="rsvp">
        <Rsvp data={content.rsvp} hostNumber={content.meta.hostNumber} />
      </section>

      <Promotion />
    </main>
  );
}