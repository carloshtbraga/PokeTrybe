import Image from 'next/image';
import styles from '../../styles/Pokemon.module.css';
import { trybers } from '../api/hello';

export const getStaticPaths = async () => {
    // repete o primeiro fetch
      const paths = trybers.map((trybe) => {
        return {
            params: { tryberid: trybe.id }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const trybe = trybers.find((trybe) => trybe.id === params.tryberid )
    return {
        props: { trybe }
    }
}

export default function Trybe({ trybe }) {
    return (
        <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{trybe.name}</h1>
        <p>Mais conhecido como: {trybe.alias}</p>
        <br />
        <Image 
        src={trybe.pic}
        width='300'
        height='300'
        alt={trybe.name}
        className={styles.pic}
        />
        <h3>Frase Favorita:</h3>
          <p>"{trybe.frase}"</p>
        <div>
          <h3>Turma:</h3>
          <p>{trybe.turma}</p>
        </div>
        <div>
          <h3>Habilidades:</h3>
          <div className={styles.types_container}>
            {trybe.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type}`} 
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h3>Animal favorito:</h3>
    
            <p>{trybe.animal}</p>
          </div>
          <div className={styles.data_weight}>
            <h3>Localização:</h3>
           
            <p>{trybe.cidade}</p>
          </div>
        </div>
      </div>
    )
}
