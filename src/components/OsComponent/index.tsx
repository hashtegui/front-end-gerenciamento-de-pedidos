import { useRouter } from "next/router";
import { IOSProps } from "../../@types/os";
import * as React from "react";
import { OsContext } from "../../providers/OsContext";

const OS = () => {
  const router = useRouter();
  const {
    os: { id, corporacao, nf, dataOrdem },
  } = React.useContext(OsContext);
  return (
    <>
      <tr onClick={() => router.push(`/os/${id}`)}>
        <td>{id}</td>
        <td>{corporacao.nome}</td>
        <td>{nf.numNota}</td>
        <td>{dataOrdem}</td>
        <td>P</td>
      </tr>
    </>
  );
};

export default OS;
