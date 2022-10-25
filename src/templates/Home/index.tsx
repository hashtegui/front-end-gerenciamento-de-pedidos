import React, { useEffect, useState } from "react";
import Templogo from "../assets/logo.svg";
import { Header } from "../../components/Header";
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

  const [value, setValue] = useState("");

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
        setPedidos(r);
        console.log(pedidos);
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
                {!!pedidos && (
                  <tr>
                    <td>{pedidos.id}</td>
                    <td>{pedidos.corporacao.nome}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};
