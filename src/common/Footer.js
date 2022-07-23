// import Languages from './Languages';
export default function Footer() {
  const curYear = new Date().getFullYear();

  return (
    <div id='page-container'>
      <div id='content-wrap'></div>
      <footer id='footer'> ©{curYear} Kompweb HQ </footer>
    </div>
  );
}
