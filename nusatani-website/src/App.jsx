import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Commodities from './components/Commodities';
import Workflow from './components/Workflow';
import Advantages from './components/Advantages';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-nusa-cream">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Commodities />
        <Workflow />
        <Advantages />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
