import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '@/components/Card'
import { trybers } from './api/hello'
import { useState } from 'react';




export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filtered = trybers.filter((tryber) => {
    const nameMatch = tryber.name.toLowerCase().includes(search.toLowerCase());
    const turmaMatch = selectedType ? tryber.turma === selectedType : true;
    return nameMatch && turmaMatch;
  });

  const turmaTypes = {};

  const turmaOptions = trybers.map((tryber) => {
    if (!turmaTypes.hasOwnProperty(tryber.turma)) {
      turmaTypes[tryber.turma] = true;
      return <option key={tryber.name}>{tryber.turma}</option>;
    }
    return null;
  });

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
      <div className={styles.inputs}>
          <label htmlFor="oi">
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
    </>
  )
}
