import LogoName from "../components/LogoName";
import ThemeChanger from "../components/ThemeChanger";
import styles from "../modules/pages/Auth.module.css";

export default function Auth() {
    return (
        <>
            <header>
                <LogoName />
                <ThemeChanger />
            </header>
        </>
    );
}
