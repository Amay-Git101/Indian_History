import React from 'react';
import { Users, BookOpen, Map, Database } from 'lucide-react';

const TEAM_MEMBERS = [
  { id: 1, role: 'Team Member 1' },
  { id: 2, role: 'Team Member 2' },
  { id: 3, role: 'Team Member 3' },
  { id: 4, role: 'Team Member 4' },
  { id: 5, role: 'Team Member 5' },
];

const HOW_IT_WORKS = [
  {
    icon: Map,
    title: 'Interactive Map',
    description:
      'The map uses React-Leaflet with OpenStreetMap tiles. Each location is represented by a custom marker whose colour indicates its primary art form category. Clicking a marker opens a detailed side panel.',
  },
  {
    icon: Database,
    title: 'Data Architecture',
    description:
      'Location, artist, movement, and artwork data is stored in strongly-typed TypeScript files. The architecture is normalised so that data can be migrated to a Supabase database without structural changes.',
  },
  {
    icon: BookOpen,
    title: 'Historical Content',
    description:
      'All historical information is based on documented scholarly sources. Approximate dates are indicated with "c." Distinctions are maintained between historical fact, interpretation, and cultural significance.',
  },
  {
    icon: Users,
    title: 'Search & Filter',
    description:
      'A global debounced search indexes locations, artists, and movements simultaneously. Filter controls update the map in real time. Searching for an artist or movement zooms the map to the relevant location.',
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-parchment-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label mb-3">About This Project</p>
          <h2 id="about-heading" className="section-heading mb-5">
            Indian Art Atlas
          </h2>
          <div className="w-12 h-px bg-gold-400 mb-6" aria-hidden="true" />
          <p className="font-sans text-charcoal-600 text-base leading-relaxed mb-4">
            Indian Art Atlas is an educational interactive map exploring the geographic diversity
            of Indian art history. The project was created as a college assignment for CO1 — Interactive
            Art Map, submitted in September 2026.
          </p>
          <p className="font-sans text-charcoal-600 text-base leading-relaxed">
            The central argument of this project is that Indian art is not one tradition — it is a
            geographic network of artistic traditions that evolved across centuries, shaped by geography,
            patronage, religion, trade, and cultural exchange. The map is designed to make this geographic
            and historical complexity immediately visible and explorable.
          </p>
        </div>

        {/* Objective */}
        <div className="bg-charcoal-800 text-parchment-100 rounded-sm p-8 mb-16">
          <p className="section-label text-gold-300 mb-3">Assignment Objective</p>
          <p className="font-serif text-xl leading-relaxed">
            "To explore the geographic spread and influence of different art styles across India
            through an interactive digital map of key art-historical locations."
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <p className="section-label mb-3">How It Works</p>
          <h3 className="font-serif text-2xl text-charcoal-900 mb-10">Methodology & Architecture</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-charcoal-100 rounded-sm flex items-center justify-center">
                  <Icon size={18} className="text-charcoal-600" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-charcoal-900 mb-1">{title}</h4>
                  <p className="text-sm font-sans text-charcoal-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <p className="section-label mb-3">The Team</p>
          <h3 className="font-serif text-2xl text-charcoal-900 mb-8">Team Members</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="text-center p-5 border border-charcoal-100 rounded-sm bg-white hover:border-charcoal-300 transition-colors duration-150"
              >
                <div className="w-12 h-12 rounded-full bg-charcoal-100 flex items-center justify-center mx-auto mb-3">
                  <Users size={18} className="text-charcoal-400" aria-hidden="true" />
                </div>
                <p className="text-xs font-sans text-charcoal-500">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-sans text-charcoal-400 mt-4 italic">
            * Team member names are placeholders pending assignment submission.
          </p>
        </div>

        {/* Sources */}
        <div>
          <p className="section-label mb-3">Sources & Attribution</p>
          <h3 className="font-serif text-2xl text-charcoal-900 mb-6">Data Sources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Archaeological Survey of India (ASI) — official monument data and historical context',
              'National Gallery of Modern Art (NGMA) — modern Indian art records',
              'Wikimedia Commons — openly licensed images (CC BY-SA and Public Domain)',
              'UNESCO World Heritage Centre — heritage site documentation',
              'National Museum, New Delhi — collection documentation',
              'Indian Museum, Kolkata — collection documentation',
              'Government of India Ministry of Culture — institutional data',
              'Published scholarship on Indian art history',
            ].map((source) => (
              <div key={source} className="flex gap-2 items-start">
                <span className="text-gold-500 text-sm flex-shrink-0 mt-0.5">·</span>
                <p className="text-sm font-sans text-charcoal-600">{source}</p>
              </div>
            ))}
          </div>
          <p className="text-xs font-sans text-charcoal-400 mt-6">
            All images are sourced from openly licensed cultural archives. Where dates are uncertain,
            approximate periods are used (indicated with "c."). No historical information has been fabricated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
