import PropTypes from "prop-types";

function ChooseCard (props) {
    console.log(props)
    return (
        <>
        {props.chooseCard > 0 && <button className="former" onClick={props.handleFormer}>Précédent</button> }

        {props.chooseCard < props.data.length - 1 && <button className="next" onClick={props.handleNext}>Suivant</button>}
        </>
    )
}

ChooseCard.propTypes = {
    chooseCard: PropTypes.any.isRequired,
    handleFormer: PropTypes.string.isRequired,
    handleNext: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default ChooseCard;