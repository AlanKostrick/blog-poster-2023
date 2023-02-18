import style from './PageContent.module.css';

const PageContent = ({ name, title, children }) => {

  return (
    <div className={style.content}>
      <h1>{title}</h1>
      {name && <h2>Hello {name}</h2>}
      {children}
    </div>
  );
}

export default PageContent;
