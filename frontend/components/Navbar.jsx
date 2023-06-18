import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
           <div className={styles.logo}>
           <Link href='/' className={styles.logo}>
             <Image
                    src="/images/pokeball.png"
                    width='30'
                    height='30'
                    alt='Pokedex'
                    className={styles.img}
                    >
                </Image></Link>
                
                <Link href='/' className={styles.logo}> <h1>PokeTrybe</h1></Link>
                
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link legacyBehavior href='/'><a className={styles.logo}>Home</a></Link>
                </li>
                <li>
                    <Link legacyBehavior href='/about'><a className={styles.logo}>Sobre</a></Link>
                </li>
            </ul>
        </nav>
    )
}
