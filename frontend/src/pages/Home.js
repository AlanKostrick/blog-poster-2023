import PageContent from '../components/PageContent';

const HomePage = () => {

  const token = sessionStorage.getItem('token');

  return (
    <PageContent title="Welcome!">
      <p>Check out our blog posts</p>
      {!token && <p>Please log in to contribute to our content</p>}
    </PageContent>
  );
}

export default HomePage;
