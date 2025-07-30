import PropTypes from "prop-types"
import "./Button.css";

const Button = ({ label }) => {
    const labelAlert = () => {
        alert(`A label desse botão é ${label}`);
    }

    return (
        <button onClick={labelAlert} className="button">
            {label}
        </button>
    )
}

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export default Button