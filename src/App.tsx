import Post, { PostType } from "./components/Post";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import './global.css';
import styles from './App.module.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-12-13 12:16:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Oi gente tudo bom? 👋'},
      {type: 'paragraph', content: 'Mais um projeto saindo do forno. É um projeto que fiz no Ignite JS, trilha da Rocketseat. O nome do projeto é Fundamentals 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-12-14 15:10:00'),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}> 
        <SideBar />

        <main>
          { 
            posts.map( post => {
              return (
                <Post 
                  key={post.id} 
                  post={post}
                />
              );
            })
          }
        </main>

      </div>
    </>
  );
};

export default App;
