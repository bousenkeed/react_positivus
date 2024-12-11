import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Studies from './components/Studies/Studies';
import Process from './components/Process/Process';
import Team from './components/Team/Team';
import Slider from './components/Slider/Slider';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {

    return (
        <div className="app">
            <Header />
            <main className='main'>
                <Hero />
                <Services />
                <Studies />
                <Process />
                <Team />
                <Slider options={{ loop: true }}/>
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
