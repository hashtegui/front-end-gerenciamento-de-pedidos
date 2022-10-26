import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as React from "react";
import { OsContext } from "../../providers/OsContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
const OsPage = () => {
  const [value, setValue] = React.useState("");

  const osState = React.useContext(OsContext);

  const { os, setOs } = osState;

  const router = useRouter();
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
      .catch((e: Error) => console.log("error", e.message));
  };

  return (
    <>
      <Head>
        <title>Gerenciamento de OS</title>
      </Head>
      <Header></Header>
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
              <i className="small material-icons">search</i>
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
                  <tr onClick={() => router.push(`/os/${os.id}`)}>
                    <td>{os.id}</td>
                    <td>{os.corporacao.nome}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default OsPage;
