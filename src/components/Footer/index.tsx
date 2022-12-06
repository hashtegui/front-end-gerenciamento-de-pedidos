const Footer = () => {
  return (
    <footer className="page-footer" style={{ backgroundColor: "#05e0d5" }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="black-text">Entregaz</h5>
            <p className="black-text text-lighten-4">
              Suas Entregaz muito mais rápidas!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="black-text"></h5>
            <ul></ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container black-text">
          © 2022 Copyright Text
          <a className="black-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
