import PropTypes from "prop-types"

const ColorUppercaseText = ({ text, color }) => {
    return (
        <>
            <p style={{ color: color }}>
                {text.toUpperCase()}
            </p>
        </>
    )
}


ColorUppercaseText.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ColorUppercaseText