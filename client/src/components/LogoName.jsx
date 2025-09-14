import styles from '../modules/LogoName.module.css';

export default function LogoName() {
    return (
        <div className={styles.logoName} onClick={() => window.location.href = '/'}>
            <img
                src="../../public/Logo - IndeAccess.png"
                alt="Logo - IndeAccess"
            />
            <div className={styles.logoNameText}>
                <span className={styles.pageName}>IndeAccess</span>
                <span className={styles.pageDescription}>
                    Gestión Educativa
                </span>
            </div>
        </div>
    );
}