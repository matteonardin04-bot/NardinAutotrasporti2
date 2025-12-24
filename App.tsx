
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home">
          <Hero onQuoteClick={() => setIsChatOpen(true)} />
        </section>

        <section id="chi-siamo" className="py-20 bg-white">
          <About />
        </section>
        
        <section id="servizi" className="py-20 bg-gray-50">
          <Services />
        </section>
        
        <section id="progetti" className="py-20 bg-white">
          <Projects />
        </section>
        
        <section id="contatti" className="py-20 bg-gray-50">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating Action Button for AI Assistant */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat con esperto"
      >
        {isChatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="hidden md:inline font-semibold">Chiedi all'esperto</span>
          </div>
        )}
      </button>

      {/* AI Chat Drawer/Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px] z-50 bg-white shadow-2xl rounded-t-2xl md:rounded-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Logistics Consultant AI</h3>
              <p className="text-xs opacity-80">Nardin Autotrasporti Expert</p>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-hidden">
            <AIConsultant />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
