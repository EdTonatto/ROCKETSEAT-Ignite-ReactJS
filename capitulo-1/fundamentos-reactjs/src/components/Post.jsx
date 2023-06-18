import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://github.com/EdTonatto.png" 
          />
          <div className={styles.authorInfo}>
            <strong>Eduardo Tonatto</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title='17 de Junho as 20:10' dateTime='2023-06-17 20:10:00'>Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a></p>
      </div>
    </article>
  )
}