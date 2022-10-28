import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as React from "react";
import { OsContext } from "../../providers/OsContext";
import { useRouter } from "next/router";

import Head from "next/head";
const OsPage = () => {
  const [value, setValue] = React.useState("");
  const osState = React.useContext(OsContext);
  const { os, setOs } = osState;
  const router = useRouter();

  const handleClick = () => {
    console.log(value);
    if (value.length > 0) {
      fetch(`http://192.168.0.39:8080/os/${value}`, {})
        .then((r) => {
          setValue("");
          if (!r.ok) {
            M.toast({
              html: "Ordem de Serviço não encontrada",
              classes: "red",
            });
            throw new Error("erro na requisicao");
          }
          return r.json();
        })
        .then((r) => {
          setOs(r);
        })
        .catch((e: Error) => console.log("error", e.message));
    } else
      M.toast({ html: "Insira um valor antes de pesquisar", classes: "red" });
  };
  return (
    <>
      <Head>
        <title>Gerenciamento de OS</title>
      </Head>
      <Header />
      <main>
        <section className="pedidos">
          <div className="pedidos-pesquisa">
            <input
              placeholder="Pesquise por OS, Empresa ou Nota"
              type="text"
              name="serch-pesq"
              id=""
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleClick();
                }
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <a href="#" onClick={(e) => handleClick()}>
              <i className="small material-icons">search</i>
            </a>
          </div>
          <div className="pedidos-dados">
            <table className="table highlight centered">
              <thead>
                <tr>
                  <th>N OS</th>
                  <th>Empresa</th>
                  <th>N Nota</th>
                  <th>Data Ordem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {!!os && (
                  <tr onClick={() => router.push(`/os/${os.id}`)}>
                    <td>{os.id}</td>
                    <td>{os.corporacao.nome}</td>
                    <td>{os.nf.numNota}</td>
                    <td>{os.dataOrdem}</td>
                    <td>P</td>
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
