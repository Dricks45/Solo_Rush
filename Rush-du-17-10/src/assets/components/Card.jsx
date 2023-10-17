import ProTypes from "prop-types";

function Card(props) {
    const { data } = props;

        return (
            <figure>
                <h2>{data.name}</h2>
                <article className='description'>
                    <figcaption>{data.about}</figcaption>
                    <img src={data.img} alt={data.name} />
                </article>
            </figure>
    )
}

Card.propTypes = {
    data: ProTypes.shape({
        name: ProTypes.string.isRequired,
        img: ProTypes.string.isRequired,
        about: ProTypes.string.isRequired,
    }).isRequired,
}

export default Card;