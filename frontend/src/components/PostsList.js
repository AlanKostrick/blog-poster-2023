import { Form, Link, json, redirect } from 'react-router-dom';

import { getAuthToken } from '../util/auth';
import style from './PostsList.module.css';

const PostsList = ({ posts }) => (
    <div className={style.container}>
        <h1>All Blog Posts</h1>
        <ul className={style.list}>
            {posts.map((post) => (
                <li key={post.id} className={style.item}>
                    <Link to={`/posts/${post.id}`}>
                        <img src={post.image} alt={post.title} />
                        <div className={style.content}>
                            <h2>{post.title}</h2>
                            <time>{post.date}</time>
                        </div>
                    </Link>
                    <Form method="delete">
                        <button>x</button>
                        <input type="hidden" name="id" defaultValue={post.id} />
                    </Form>
                </li>
            ))}
        </ul>
    </div>
);

export default PostsList;



export async function action({ params, request }) {
    const token = getAuthToken();
    const data = await request.formData();

    const postData = {
        id: data.get("id")
    }

    const response = await fetch('http://localhost:8080/posts/' + postData.id, {
        method: request.method,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete post.' },
            {
                status: 500,
            }
        );
    }
    return redirect('/posts');
}