import './TestimonyCard.css';

const TestimonyCard = (props) => {
    const { img, name, work, place, workplace, testimony } = props;
    return (
        <div className="testimony__container">
            <div className="testimony__header">
                <img src={img} alt={name} />
            </div>
            <div className="testimony__footer">
                <p><span class="bold">{name}</span> en {place}</p>
                <p>{work} en <span class="bold">{workplace}</span></p>
                <p class="justify">"{testimony}"</p>
            </div>
        </div>
    )
}

export default TestimonyCard;