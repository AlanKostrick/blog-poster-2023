import {
    Form,
    json,
    redirect,
    useActionData,
    useNavigate,
    useNavigation
} from 'react-router-dom';

import { getAuthToken } from '../util/auth';
import style from './PostForm.module.css';

const PostForm = ({ method, post }) => {
    const data = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const cancelPost = () => {
        navigate('..');
    }

    return (
        <Form method={method} className={style.form}>
            {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={post ? post.title : ''}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={post ? post.image : ''}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={post ? post.date : ''}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={post ? post.description : ''}
                />
            </p>
            <div className={style.actions}>
                <button type="button" onClick={cancelPost} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Save'}
                </button>
            </div>
        </Form>
    );
}

export default PostForm;

export async function action({ request, params }) {
    const method = request.method;
    const data = await request.formData();

    const postData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    };

    let url = 'http://localhost:8080/posts';

    if (method === 'PATCH') {
        const postId = params.postId;
        url = 'http://localhost:8080/posts/' + postId;
    }

    const token = getAuthToken();

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(postData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not save post.' }, { status: 500 });
    }

    return method === 'PATCH' ? redirect('/posts/' + params.postId) : redirect('/posts');
}

