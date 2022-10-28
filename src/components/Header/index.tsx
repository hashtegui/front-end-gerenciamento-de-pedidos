const Header = () => {
  return (
    <header>
      <div
        style={{
          backgroundColor: "#e03e52",
          padding: "10px",
        }}
        className="row"
      >
        <div className="col s1">
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="medium material-icons" id="trigger">
              menu
            </i>
          </a>
        </div>
        <div className="col s10">
          <p className="center-align">Gerenciamento de Pedidos</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
