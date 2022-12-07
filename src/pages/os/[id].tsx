import * as React from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { OsContext } from "../../providers/OsContext";
import { IOSProps, Produto } from "../../@types/os";

const OsIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query);
  const { os, setOs } = React.useContext(OsContext);

  const Item: React.FC<Produto> = (item: Produto) => {
    return (
      <tr>
        <td>{item.produto.codigo}</td>
        <td>{item.produto.codBarras}</td>
        <td>{item.quantidade}</td>
      </tr>
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        {!os && <p>Ordem de serviço não encontrada</p>}

        {!!os && (
          <div className="">
            <div className="row" style={{ display: "flex" }}>
              <div className="col s12 m10">
                <div
                  className="card grey lighten-1"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="card-content black-text">
                    <span className="card-title" style={{ fontWeight: "bold" }}>
                      Cliente
                    </span>
                    <p>
                      {os.cliente.nome} {os.cliente.sobrenome}
                    </p>
                    <p>CPF: {os.cliente.cpf}</p>
                    <br />
                    <span style={{ fontWeight: "bold" }}>Contato</span>
                    <p>{os.cliente.contato.celular}</p>
                  </div>

                  <div className="card-content black-text">
                    <span className="card-title" style={{ fontWeight: "bold" }}>
                      Endereço de entrega
                    </span>

                    <p>Bairro: {os.cliente.endereco.bairro}</p>
                    <p>Rua: {os.cliente.endereco.rua}</p>
                    <p>N Casa: {os.cliente.endereco.casa}</p>
                    <p>CEP: {os.cliente.endereco.cep}</p>
                  </div>
                </div>
              </div>

              <div className="col s12 m8">
                <div
                  className="card grey lighten-1"
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div className="card-content black-text">
                    <p>{os.corporacao.nome}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <table className="table-hover">
                <tr>
                  <th>Codigo</th>
                  <th>Cod Bárras</th>
                  <th>Quantidade</th>
                </tr>
                <tbody>
                  {os.listaProdutos.map((item) => (
                    <Item {...item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OsIdPage;
