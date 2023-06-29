import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/EdTonatto.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Tonatto</strong>
              <time title='17 de Junho as 20:10' dateTime='2023-06-17 20:10:00'>Cerca de 1h atras</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={25} />
            </button>
          </header>

          <p>Muito bom, parabens!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
