import styles from "./Line.module.scss"
export default function Line(){
    return(
        <div className={styles.lineParent}>
            <div className={styles.line}></div>
        </div>
    )
}