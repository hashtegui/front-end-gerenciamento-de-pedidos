import * as React from "react";
import { Header } from "../../components/Header";
import { OsContext } from "../../providers/OsContext";

export const OrdemServico = () => {
  const { os, setOs } = React.useContext(OsContext);
  return (
    <>
      <Header />
      <section>
        <div>
          <p>cabecalho</p>
        </div>
      </section>
    </>
  );
};
