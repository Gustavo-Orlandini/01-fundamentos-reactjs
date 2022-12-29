import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {

        onDeleteComment(content);

    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/matemora.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Morais</strong>
                            <time title='27 de Maio às 15:02h' dateTime='2022-12-27 15:02:50' >Cerca há 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário.'>
                            <Trash size={24}/>    
                        </button>
                    </header>

                    <p>{content}</p>
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