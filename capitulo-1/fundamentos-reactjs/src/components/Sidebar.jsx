import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1589137846286-b70355bb0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=50" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://github.com/EdTonatto.png" 
        />
        <strong>Eduardo Tonatto</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}