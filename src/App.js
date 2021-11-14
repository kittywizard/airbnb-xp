import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <section className="section--card">
                <Card />
            </section>
        </div>
    )
}