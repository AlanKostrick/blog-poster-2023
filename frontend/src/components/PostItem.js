import { Link, useSubmit } from 'react-router-dom';

import style from './PostItem.module.css';

const PostItem = ({ post }) => {

    const submit = useSubmit();

    const confirmDelete = () => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            submit(null, { method: 'delete' });
        }
    }

    return (
        <article className={style.container}>
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <time>{post.date}</time>
            <p>{post.description}</p>
            <menu className={style.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={confirmDelete}>Delete</button>
            </menu>
        </article>
    );
}

export default PostItem;
