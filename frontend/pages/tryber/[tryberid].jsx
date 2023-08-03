import Image from 'next/image';
import styles from '../../styles/Pokemon.module.css';
import { getTrybers } from '@/utils/queries';

export const getStaticPaths = async () => {
    // repete o primeiro fetch
    const trybers = await getTrybers();

    const paths = trybers.map((trybe) => {
      return {
          params: { tryberid: trybe.id.toString() },
   }
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({params}) => {
    const trybers = await getTrybers();
    const trybe = trybers.find((trybe) => trybe.id.toString() === params.tryberid )
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
        src={trybe.picture}
        width='300'
        height='300'
        alt={trybe.name}
        className={styles.pic}
        />
        <h3>Frase Favorita:</h3>
          <p>"{trybe.phrase}"</p>
        <div>
          <h3>Turma:</h3>
          <p>{trybe.classNumber}</p>
        </div>
        <div>
          <h3>Habilidades:</h3>
          <div className={styles.types_container}>
            {trybe.skills.map((item, index) => (
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
           
            <p>{trybe.city}</p>
          </div>
        </div>
      </div>
    )
}
