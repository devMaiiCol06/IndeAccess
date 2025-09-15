import styles from "../modules/comps/ButtonLogin.module.css";

export default function ButtonLogin({btnContent}) {
    return (
        <button className={styles.buttonLogin}>{btnContent}</button>
    );
}