import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { useState } from 'react';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0); /* Como é algo que vai mudar de acordo com a ação do ususário, é preciso armazenar em um State */

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {  /*Toda ação de submit (botão) esperam uma função */
        setLikeCount((state) => {
            return state + 1
        });
    }


    return(
        <div className={style.comment}>
            <Avatar 
            src="https://i.pinimg.com/236x/25/39/2b/25392bc6f4360af33b187e9b6ce16dd1.jpg" 
            alt="" 
            />
            
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Devon Shimit</strong>
                            <time title="10 de Outubro às 14:58h" dateTime="200-10-10 14:58:36">Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>       
                    </header>

                    <p>{content}</p>
                </div>

                <footer> 
                   <button onClick={handleLikeComment}>  
                    <ThumbsUp /> 
                    Aplaudir 
                    <span>{likeCount}</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}