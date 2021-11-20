import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
    const cardData = data.map(card => {
        return <Card 
                title={card.title}
                price={card.price}
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                
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