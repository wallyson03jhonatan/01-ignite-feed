import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { ThumbsUp, Trash } from '@phosphor-icons/react';

import Avatar from './Avatar';

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}
function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    const publishedAt = new Date('2023-12-14 13:45:00');
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })
    const publishedDateFormatedToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR
    });

    function handleDeleteComment() {
        onDeleteComment(content);
    }  

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/wallyson03jhonatan.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wallyson Jhonatan</strong>
                            <time 
                                dateTime={publishedAt.toISOString()}
                                title={publishedDateFormated}
                            >
                                há {publishedDateFormatedToNow}
                            </time>
                        </div>

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={24}/> 
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>   
        </div>
    );  
};

export default Comment;