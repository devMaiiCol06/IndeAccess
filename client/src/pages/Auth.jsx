import LogoName from "../components/LogoName";
import ThemeChanger from "../components/ThemeChanger";
import ButtonAuth from "../components/ButtonAuth";
import ButtonLogin from "../components/ButtonLogin";
import styles from "../modules/pages/Auth.module.css";
import "../index.css";
import { Users, Shield, Ellipsis } from "lucide-react";
import { useState } from "react";

export default function Auth() {
    const [showAdminCode, setShowAdminCode] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <LogoName />
                <ThemeChanger />
            </div>
            <div className={styles.main}>
                <h1 className={styles.pageTitle}>
                    Bienvenido a<span className="specialName"> IndeAccess</span>
                </h1>
                <p className={styles.pageDescription}>
                    Selecciona cómo deseas acceder a la plataforma
                </p>
                <div className={styles.cardTutorSelector}>
                    <div className={styles.cardPrimaryPart}>
                        <div className={styles.cardIconContainer}>
                            <Users
                                className={styles.cardIcon}
                                color="var(--textColorTertiary)"
                                size={45}
                            />
                        </div>
                        <h3 className={styles.cardTitle}>Soy Acudiente</h3>
                        <p className={styles.cardDescription}>
                            Registra e inscribe el futuro de Colombia en la IE
                            La Independencia
                        </p>
                    </div>
                    <div className={styles.cardSecondaryPart}>
                        <ButtonAuth
                            className={styles.buttonAuth}
                            btnContent="Registrarme como Acudiente"
                            btnType="btnRegister"
                        />
                        <div className={styles.featuresContainer}>
                            <div className={styles.featureItem}>
                                <span className={styles.featureIcon}>1</span>
                                <span className={styles.featureText}>
                                    Nueva matrícula
                                </span>
                            </div>
                            <div className={styles.featureItem}>
                                <span className={styles.featureIcon}>2</span>
                                <span className={styles.featureText}>
                                    Renovar matrícula
                                </span>
                            </div>
                            <div className={styles.featureItem}>
                                <span className={styles.featureIcon}>3</span>
                                <span className={styles.featureText}>
                                    Gestionar Estudiantes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.loginText}>
                    ¿Ya tienes una cuenta de acudiente?
                </p>
                <ButtonLogin btnContent="Iniciar sesión" />
                <hr />
                <div className={styles.adminLoginContainer}>
                    {!showAdminCode && (
                        <span
                            onClick={() => setShowAdminCode(true)}
                            className={styles.adminLoginText}
                        >
                            <Ellipsis />
                            Acceso administrativo
                        </span>
                    )}
                    {showAdminCode && (
                        <div className={styles.adminCodeContainer}>
                            <div className={styles.adminLoginFormHeader}>
                                <Shield
                                    color="var(--textColorSecondary)"
                                    size={20}
                                />
                                <p>Personal administrativo</p>
                            </div>
                            <form
                                className={styles.adminCodeForm}
                                method="POST"
                                action="../../../server/adminCodeVerificatory.php"
                            >
                                <label htmlFor="adminCode">
                                    Código Institucional
                                </label>
                                <input
                                    type="text"
                                    name="adminCode"
                                    id="adminCode"
                                    placeholder="Código de acceso"
                                />
                                <div className={styles.adminCodeFooter}>
                                    <ButtonAuth
                                        btnContent="Cancelar"
                                        btnType="btnNormal"
                                        onClick={() => setShowAdminCode(false)}
                                    />
                                    <ButtonAuth
                                        btnContent="Verificar"
                                        btnType="btnVerify"
                                        type="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
