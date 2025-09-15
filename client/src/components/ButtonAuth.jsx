import styles from "../modules/comps/ButtonAuth.module.css";
import PropTypes from "prop-types";

ButtonAuth.defaultProps = {
    type: "button",
}

ButtonAuth.propTypes = {
    btnContent: PropTypes.string.isRequired,
    btnType: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string
}

export default function ButtonAuth({btnContent, btnType, onClick, type}) {
    return (
        <button className={`${styles.buttonAuth} ${styles[btnType]}`} onClick={onClick} type={type}>{btnContent}</button>
    );
}
