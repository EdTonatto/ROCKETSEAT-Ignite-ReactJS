/* eslint-disable react/jsx-key */
import { Header } from './components/Header.jsx'
import { Post } from './components/Post.jsx'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/EdTonatto.png',
      name: 'Eduardo Tonatto',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu github. É um projeto que fiz enquanto estudava React na Rocketseat. O nome do projeto é Game Notes 🚀' },
      { type: 'link', content: 'edtonatto.github.io/game-notes' },
    ],
    publishedAt: new Date('2023-07-01 18:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>  
    </div>
  )
}