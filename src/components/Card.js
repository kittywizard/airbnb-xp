
import star from '../images/star.png';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt={props.title} className="card--img"/>
           { /* 
           in the below, the statement is saying that if badgeText has any value (its undefined if 
           it doesn't meet either if statement), then you can display badgeText
           
           */}
            {badgeText &&
                <div className="card--status">
                    <p className="status--text">{badgeText}</p>
                </div>}
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