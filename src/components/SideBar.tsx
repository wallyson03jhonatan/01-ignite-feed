import styles from './SideBar.module.css';
import Avatar from './Avatar';
import { PencilLine } from '@phosphor-icons/react'

function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/wallyson03jhonatan.png"/>
        
                <strong>Wallyson Oliveira</strong>
                <span>Fullstack Developer</span>
            </div>
                
            <footer>
                <a href="#"> 
                    <PencilLine size={20}/> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};

export default SideBar;