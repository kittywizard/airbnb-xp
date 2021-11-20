import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
    const cardData = data.map(card => {
        return <Card 
                    key={card.id}
                    item={card}
                />
    });

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <section className="section--card">
                {cardData}
            </section>
        </div>
    )
}