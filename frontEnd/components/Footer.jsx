import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
   <footer className={styles.footer}>
    <p><span>PokeTrybe:</span> By Carlos Tonini and José Gomes &copy; 2023</p>
    <Image
                    src="/images/pokeball.png"
                    width='20'
                    height='20'
                    alt='Pokedex'
                    
                    className={styles.img}>
                   
                </Image>
                
                
   </footer>
  )
}
