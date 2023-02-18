import AuthenticationPage, { action as authAction } from './pages/Authentication';
import PostDetailPage, { action as deletePostAction, loader as postDetailLoader } from './pages/PostDetail';
import PostsPage, { loader as postsLoader } from './pages/Posts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditPostPage from './pages/EditPost';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import Layout from './pages/Layout';
import LoginContextProvider from './components/login-context/LoginContext';
import NewPostPage from './pages/NewPost';
import PostsLayout from './pages/PostsLayout';
import { action as addOrEditPostAction } from './components/PostForm';
import { action as deletePost } from './components/PostsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
      },
      {
        path: 'posts',
        element: <PostsLayout />,
        children: [
          {
            index: true,
            element: <PostsPage />,
            loader: postsLoader,
            action: deletePost,
          },
          {
            path: ':postId',
            id: 'post-detail',
            loader: postDetailLoader,
            children: [
              {
                index: true,
                element: <PostDetailPage />,
                action: deletePostAction
              },
              {
                path: 'edit',
                element: <EditPostPage />,
                action: addOrEditPostAction,
              },
            ]
          },
          {
            path: 'new',
            element: <NewPostPage />,
            action: addOrEditPostAction
          }
        ],
      },
    ],
  },
]);

function App() {



  return (
    <LoginContextProvider>
      <RouterProvider router={router} />
    </LoginContextProvider>
  )
}

export default App;
