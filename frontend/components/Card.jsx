import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'


export default function Card({ trybers }) {
  const myLoader=()=>{
    return trybers.picture;
  }
  
  return (
    <div className={styles.card}>
      <Image
        loader={myLoader}
        src={trybers.picture}
        width='150'
        height='150' 
        />
      <p className={styles.id}>#{trybers.classNumber}</p>
      <h3 className={styles.title}>{trybers.name}</h3>
      <Link legacyBehavior href={`/tryber/${trybers.id}`}><a className={styles.btn}>Detalhes</a></Link>
    </div>
  )
}
