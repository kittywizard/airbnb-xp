import katie from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="" className="card--img"/>
            <div className="card--status">
                <p className="status--text">sold out</p>
            </div>
            <div className="card--content">
                <div className="card--stats">
                    <img src={star} alt="star rating" className="star--img"/> 
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray">USA</span>
                </div>
                <p className="title">Life lessons with Katie Zaferes</p>
                <p className="pricing"><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}