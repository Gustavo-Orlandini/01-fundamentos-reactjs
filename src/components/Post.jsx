import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/joyceorlandini.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Joyce Ammirati</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time title='27 de Maio às 15:02h' dateTime='2022-12-27 15:02:50' >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p> 

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 

                <p>👉{' '} <a href="">jane.design/doctorcare</a></p> 

                <p>
                    <a href="">#novoprojeto</a>{' '} 
                    <a href="">#nlw</a>{' '} 
                    <a href="">#rocketseat</a>{' '} 
                </p> 

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}