
import star from '../images/star.png';

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            <img src={`../images/${props.item.img}`} alt={props.item.title} className="card--img"/>
           { /* 
           in the below, the statement is saying that if badgeText has any value (its undefined if 
           it doesn't meet either if statement, then you can display badgeText
           
           */}
            {badgeText &&
                <div className="card--status">
                    <p className="status--text">{badgeText}</p>
                </div>}
            <div className="card--content">
                <div className="card--stats">
                    <img src={star} alt="star rating" className="star--img"/> 
                    <span>{props.item.rating}</span>
                    <span className="gray">({props.item.reviewCount}) • </span>
                    <span className="gray">{props.item.country}</span>
                </div>
                <p className="title">{props.item.title}</p>
                <p className="pricing"><strong>From ${props.item.price}</strong> / person</p>
            </div>
        </div>
    )
}