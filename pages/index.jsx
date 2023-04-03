import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '@/components/Card'
import { trybers } from './api/hello'


export default function Home() {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Trybe</span></h1>
        <Image
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt='PokeNext'
        />
      </div>
      <div className={styles.pokemon_container}>
        {trybers.map((trybers) => (
          <Card trybers={trybers} key={trybers.id}/>
        ))}
      </div>
    </>
  )
}
