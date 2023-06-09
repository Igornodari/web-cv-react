
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function HomepageHeader() {
    return (
        <header className={clsx(styles.heroBackground, styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--7', styles.appHeaderItens)}>
                        <img src="img/perfil.jpg" className={styles.appLogoNav} alt="logo" />
                        <h1 className={styles.textTitle}>IGOR LEAL NODARI</h1>
                        <p className={styles.textSubtitle}>Angular8+ Front-End Developer</p>
                    </div>

                    <div className={clsx('col col--4', styles.appHeaderItens)}>
                        <div className="row" >
                            <img src="img/email.png" className={styles.appLogo} alt="logo" />
                            <p className={clsx(styles.textSubtitle, styles.textoCentro)}>igor.nods@gmail.com </p>
                        </div>
                        <div className="row">
                            <img src="img/whatsapp.png" className={styles.appLogo} alt="logo" />
                            <p className={clsx(styles.textSubtitle, styles.textoCentro)}> +55(11) 94264-7380</p>
                        </div>
                        <div className="row"> <img src="img/linkedin.png" className={styles.appLogo} alt="logo" />
                            <a className={clsx(styles.textSubtitle, styles.textoCentro)} href="https://www.linkedin.com/in/igor-leal-nodari-512b7914a/"> Linkedin</a>
                        </div>

                    </div>
                    <hr></hr>






                </div>
            </div>

        </header>
    );
}
export default HomepageHeader