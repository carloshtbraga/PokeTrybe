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
        <div>
          <h3>Turma:</h3>
          <p>{trybe.turma}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {trybe.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles['type_' + item]}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{trybe.name} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{trybe.name} kg</p>
          </div>
        </div>
      </div>
    )
}
