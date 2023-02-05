import classes from './PageContent.module.css';

function PageContent({ title, children }) {

  const name = sessionStorage.getItem('name');


  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {name && <h2>Hello {name}</h2>}
      {children}
    </div>
  );
}

export default PageContent;
