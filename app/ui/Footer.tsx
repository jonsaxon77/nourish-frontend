import styles from './Footer.module.scss'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Nourish Foods - Meals on Wheels
            </p>
            <div className={styles.footer__left}>
                <a href="https://github.com/snipcart/snipcart-nextjs">Github</a>
            </div>
        </footer>
    )
}