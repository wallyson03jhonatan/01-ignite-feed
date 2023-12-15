import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import Avatar from './Avatar';
import Comment from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    content: Content[];
    publishedAt: Date;
}

interface PostProps {
    post: PostType;
}

function Post({ post }: PostProps) {

    const [comments, setComments] = useState<string[]>([]);
    const [newCommentText, setNewCommentText] = useState<string>('');

    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateFormatedToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement> ) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={post.author.avatarUrl} />    

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>

                </div>

                <time 
                    dateTime={post.publishedAt.toISOString()}
                    title={publishedDateFormated}
                >
                    há {publishedDateFormatedToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    post.content.map(item => {
                        switch(item.type) {
                            case 'paragraph':
                                return <p key={item.content}>{item.content}</p>;
                            case 'link':
                                return <a href={item.content} key={item.content}>{item.content}</a>;
                            default:
                                return null;
                        }
                    })
                }
            </div>


            <form className={styles.comentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>    
            </form>

            <div className={styles.commentList}>
                {
                    comments.map( comment => {
                        return (
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>
        </article>
    );
};

export default Post;