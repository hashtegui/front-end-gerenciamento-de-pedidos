import React, { useEffect, useState } from "react";
import Templogo from "../assets/logo.svg";
import { Header } from "../components/Header";
import "./style.css";

const ulr_base = "http://localhost:8080";

type OrdemServicoProps = {
  id: number;
  dataOrdem: string;
  corporacao: { id: number; nome: string; tipoContrato: string };
  nf: {
    data: string;
    numNota: string;
    valorTotalNota: number;
    valorTotalProdutos: number;
  };
  cliente: {
    contato: { id: number; celular: string; telefone: string };
    endereco: {
      id: number;
      rua: string;
      casa: string;
      cep: string;
      bairro: string;
    };
    cpf: string;
    nome: string;
    sobrenome: string;
  };
  listaProdutos: {
    quantidade: number;
    produto: {
      id: number;
      codigo: string;
      codBarras: string;
      quantidade: number;
    };
  }[];
};

export const Home = () => {
  const [pedidos, setPedidos] = useState<OrdemServicoProps>();

  useEffect(() => {
    fetch("http://localhost:8080/os/1", {
      //mode: "no-cors",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((r) => console.log(r))
      .catch((e) => console.log("error", e));
    // .then((r) => console.log(r));

    console.log(pedidos);
  }, []);
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
            />
            <a href="#">
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
                {/* {! pedidos typeof undefined > 0 
                  pedidos.map((valor, key) => (
                    <tr key={key}>
                      <td>{valor.id}</td>
                      <td>{valor.corporacao.nome}</td>
                    </tr>
                  ))} */}

                {/* {!!!pedidos && <p>Ainda não existem pedidos</p>} */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};
