
import star from '../images/star.png';

export default function Card(props) {
    return (
        <div className="card">
            <img src="" alt="" className="card--img"/>
            <div className="card--status">
                <p className="status--text">sold out</p>
            </div>
            <div className="card--content">
                <div className="card--stats">
                    <img src={star} alt="star rating" className="star--img"/> 
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p className="title">{props.title}</p>
                <p className="pricing"><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    )
}