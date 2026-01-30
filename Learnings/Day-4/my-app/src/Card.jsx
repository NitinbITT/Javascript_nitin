import "./Card.css"
export default function Card({details}){
    return(
        <>
            <div id="Card">
                <p>{details.name}</p>
                <p>{details.price}</p>
                <p>{details.description}</p>
            </div>
        </>
    );
}