import * as React from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { OsContext } from "../../providers/OsContext";

const OsIdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query);
  const { os, setOs } = React.useContext(OsContext);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {!os && <p>Ordem de serviço não encontrada</p>}

          {!!os && (
            <div>
              <p>{os.id}</p>
              <p>{os.cliente.nome}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OsIdPage;
