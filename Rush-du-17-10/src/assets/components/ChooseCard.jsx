import PropTypes from "prop-types";

function ChooseCard (props) {
    return (
        <>
        {props.chooseCard > 0 && <button className="former" onClick={props.handleFormer}>Précédent</button> }

        {props.chooseCard < props.data.length - 1 && <button className="next" onClick={props.handleNext}>Suivant</button>}
        </>
    )
}

ChooseCard.propTypes = {
    data: PropTypes.shape({
        chooseCard: PropTypes.string.isRequired,
        handleFormer: PropTypes.string.isRequired,
        handleNext: PropTypes.string.isRequired,
    }).isRequired,
}

export default ChooseCard;