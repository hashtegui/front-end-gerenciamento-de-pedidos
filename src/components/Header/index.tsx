type HeaderProps = {
  name?: string;
};

const Header = ({ name }: HeaderProps) => {
  const header = name ? name : "Gerenciamento de Pedidos";
  return (
    <header>
      <div
        style={{
          backgroundColor: "#05e0d5",
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
          <p className="center-align">{header}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
