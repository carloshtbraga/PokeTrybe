import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '@/components/Card'
import { useState } from 'react';
import { getTrybers } from '@/utils/queries';

export async function getStaticProps() {
  const trybers = await getTrybers();
  return {
    props: {
      trybers,
    },
  };
}

export default function Home({ trybers }) {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filtered = trybers.filter((tryber) => {
    const nameMatch = tryber.name.toLowerCase().includes(search.toLowerCase());
    const turmaMatch = selectedType ? tryber.classNumber === selectedType : true;
    return nameMatch && turmaMatch;
  });

  const turmaTypes = {};

  const turmaOptions = trybers.map((tryber) => {
    if (!turmaTypes.hasOwnProperty(tryber.classNumber)) {
      turmaTypes[tryber.classNumber] = true;
      return <option key={tryber.name}>{tryber.classNumber}</option>;
    }
    return null;
  });

  return (
    <div className={styles.bg}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Trybe</span></h1>
        
        <Image
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt='PokeNext'
          className={styles.img}
        />
              </div>
      <div className={styles.inputs}>
          <label htmlFor="oi" className={styles.nome}>
            <input
              type="text"
              id="oi"
              onChange={({ target: { value } }) => setSearch(value)}
              value={search}
              placeholder={'Pesquise pelo nome do aluno'}
              className={styles.nome}
            />
          </label>
          <select
            name=""
            id=""
            className={styles.select}
            onChange={({ target }) => setSelectedType(target.value)}
            value={selectedType}
          >
            <option value="" style={{ color: "gray" }}>Turma</option>
            {turmaOptions}
          </select>
        </div>
        <br />
      <div className={styles.pokemon_container}>
        {filtered.map((trybers) => (
          <Card trybers={trybers} key={trybers.id} />
        ))}
      </div>
    </div>
  )
}
