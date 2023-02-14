import { Await, defer, json, useLoaderData } from 'react-router-dom';

import PostsList from '../components/PostsList';
import { Suspense } from 'react';

const PostsPage = () => {
    const { posts } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={posts}>
                {(loadedPosts) => <PostsList posts={loadedPosts} />}
            </Await>
        </Suspense>
    );
}

export default PostsPage;

async function loadPosts() {
    const response = await fetch('http://localhost:8080/posts');

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch posts.' },
            {
                status: 500,
            }
        );
    }
    const resData = await response.json();
    return resData.posts;
}

export function loader() {
    return defer({
        posts: loadPosts(),
    });
}
