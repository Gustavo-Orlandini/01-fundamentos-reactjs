import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                clasName={styles.cover} 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />
        
            <div className={styles.profile}>
                <strong>Joyce Orlandini</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar o seu perfil</a>
            </footer>
        </aside>
    );
}