import Image from 'next/image'
import styles from '../../styles/Pokemon.module.css'
import { trybers } from '../api/hello'

export const getStaticPaths = async () => {
    // repete o primeiro fetch
      const paths = trybers.map((pkn, i) => {
        return {
            params: { pokemonid: i.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}



export default function Pokemon({ trybers}) {
    return (
        <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{trybers.name}</h1>
        <Image 
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width='120'
        height='120'
        alt={trybers.name}
        />
        <div>
          <h3>Número:</h3>
          <p>#{trybers.name}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {trybers.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles['type_' + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{trybers.name} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{trybers.name} kg</p>
          </div>
        </div>
      </div>
    )
}
