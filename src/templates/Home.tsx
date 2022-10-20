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
          <table>
            <thead>
              <th>
                <td>N OS</td>
                <td>Empresa</td>
              </th>
            </thead>
          </table>
        </section>
      </main>
    </>
  );
};
