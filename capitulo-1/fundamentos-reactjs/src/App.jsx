import { Header } from './components/Header.jsx'
import { Post } from './Post.jsx'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post author="Eduardo Tonatto" content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sint, deserunt unde optio, nostrum dignissimos odit tenetur, voluptatem expedita nam esse error blanditiis dolore? Labore temporibus explicabo autem deleniti cumque?"/>
      <Post author="Artur Tonatto" content = "Oi, meu nome eh Artur, tudo bem com vc?"/>
    </div>
  )
}