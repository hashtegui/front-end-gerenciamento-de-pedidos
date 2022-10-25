import * as React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OsContext } from "../../providers/OsContext";

export const OrdemServico = () => {
  const [value, setValue] = React.useState("");

  const osState = React.useContext(OsContext);

  const { os, setOs } = osState;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    fetch(`http://localhost:8080/os/${value}`, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error("erro na requisicao");
        }
        return r.json();
      })
      .then((r) => {
        setOs(r);
      })
      .catch((e) => console.log("error", e));
  };
  return (
    <>
      <Header />
      <main>
        <section className="pedidos">
          <div className="pedidos-pesquisa">
            <input
              placeholder="Pesquise por OS, Empresa ou Nota"
              type="search"
              name="serch-pesq"
              id=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <a href="#" onClick={handleClick}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                alt=""
              />
            </a>
          </div>
          <div className="pedidos-dados">
            <table>
              <thead>
                <tr>
                  <th>N OS</th>
                  <th>Empresa</th>
                </tr>
              </thead>
              <tbody>
                {!!os && (
                  <tr>
                    <td>{os.id}</td>
                    <td>{os.corporacao.nome}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
