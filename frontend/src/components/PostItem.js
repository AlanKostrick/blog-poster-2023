import { Link, useSubmit } from 'react-router-dom';

import classes from './PostItem.module.css';

function PostItem({ post }) {

    const submit = useSubmit();

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            submit(null, { method: 'delete' });
        }
    }

    return (
        <article className={classes.container}>
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <time>{post.date}</time>
            <p>{post.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default PostItem;
