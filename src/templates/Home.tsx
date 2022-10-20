import React, { useState } from "react";
import Templogo from "../assets/logo.svg";
import { Header } from "../components/Header";
import "./style.css";

export const Home = () => {
  const [pedido, setPedido] = useState();
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
            </table>
          </div>
        </section>
      </main>
    </>
  );
};
