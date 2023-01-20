import styles from "./NavLogo.module.scss"

export default function NavLogo(){
    return(
        <>
        <div>
            <img className={styles.img} src="http://localhost:3000/placeholder.com-logo3.jpg" alt=""  width={150}/>
        </div>
        </>
    )
}