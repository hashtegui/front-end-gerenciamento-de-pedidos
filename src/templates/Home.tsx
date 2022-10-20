import React, { useState } from "react";
import Templogo from "../assets/logo.svg";
import { Header } from "../components/Header";
import "./style.css";

type PedidoProps = {
  os: number;
  empresa: { id: number; nome: string };
  itens: { descricao: string; quantidade: number }[];
};

const pedidos: PedidoProps[] = [
  {
    os: 1,
    empresa: { id: 1, nome: "aaa" },
    itens: [
      {
        descricao: "item 1",
        quantidade: 1,
      },
    ],
  },
];

export const Home = () => {
  const [pedido, setPedido] = useState<PedidoProps[]>();
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
                {pedidos.map((valor, key) => (
                  <tr key={key}>
                    <td>{valor.os}</td>
                    <td>{valor.empresa.nome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};
