import Image from "next/image"
import styles from '../styles/About.module.css'
import { trybers } from "./api/hello"

export default function about() {
  return (
  <div div className={styles.about}>
 
      <div>
        <h1>Sobre o projeto</h1>
        <p>Esse projeto foi desenvolvido em Next.JS, com base nas aulas dadas pelo Prof Matheus Battisti em seu curso. O intuito do projeto é ter um site aonde tenhamos um database dos alunos, principalmente da turma 27, para que no futuro, daqui a 20 ou 30 anos, possamos matar saudades e lembrar de todos. 
          
          No momento esse projeto mapeia um objetão local, a idéia é conforme o curso avance em front-end a gente possa tornar todo o sistema de cadastro de novos alunos dentro da própria aplicação para que os usuários possam fazer um CRUD com seu perfil.</p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Image
          src={trybers[3].pic}
          height='150'
          width='150'
          alt='Carlin kkk'
          className={styles.us}
        />


        <Image
          src={trybers[0].pic}
          height='150'
          width='150'
          alt='Gerddicleykkk'
          className={styles.us}
        />
      
    </div>
    <p>Projeto desenvolvido por Carlos Tonini e José Gomes</p>
    </div>
  )
}