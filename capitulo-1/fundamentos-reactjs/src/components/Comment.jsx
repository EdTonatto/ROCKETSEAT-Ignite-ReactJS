/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

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

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={25} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
