import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import style from './AuthForm.module.css';

const AuthForm = () => {

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={style.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" type="text" name="firstName" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={style.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : isLogin ? 'Sign in' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
