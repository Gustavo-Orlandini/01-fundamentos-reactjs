import { Header } from './components/header';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
            
            <Sidebar />

            <main>
                <Post 
                    author="Diego Fernandes" 
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere possimus aut, explicabo obcaecati cupiditate praesentium rem animi voluptatem, quam distinctio doloremque! Asperiores, facere aperiam nisi quo ad quas non?"
                />
                <Post 
                    author="Gabriel Buzzi"
                    content="Um novo posto muito legal"     
                />
            </main>
        </div>


          
    </div>
  )
}


