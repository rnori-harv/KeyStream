// render a title that says "welcome to Keystream" in a blue color
import styles from './Welcome.module.css'
const Welcome = () => {
    return (   
        <div>
            <div className={styles.multicolortext}>
            <h1>Welcome to Keystream</h1>
            </div>               
        </div>
    )
}
export default Welcome