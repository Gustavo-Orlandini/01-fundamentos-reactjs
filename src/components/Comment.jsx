import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/matemora.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Morais</strong>
                            <time title='27 de Maio às 15:02h' dateTime='2022-12-27 15:02:50' >Cerca há 1h atrás</time>
                        </div>

                        <button title='Ícone para deletar um comentário.'>
                            <Trash size={20}/>    
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
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