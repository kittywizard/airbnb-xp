import hero from '../images/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} className="hero--img" alt="a nice collage"/>
            <h1 className="hero--headline">Online Experiences</h1>
            <p className="hero--subhead">
                Join unique interactive activities led by one - of -a - kind hosts— all without leaving home.
            </p>
        </section>
    )
}