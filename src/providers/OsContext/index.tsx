import * as React from "react";
import { OrdemServicoProps } from "../../templates/Home";

const initialState: OrdemServicoProps = {
  id: 1,
  dataOrdem: "2022-10-25",
  corporacao: {
    id: 1,
    nome: "Kazanto",
    tipoContrato: "TOTAL",
  },
  nf: {
    data: "2022-10-16",
    numNota: "5315354648",
    valorTotalNota: 75.99,
    valorTotalProdutos: 50.99,
  },
  cliente: {
    contato: {
      id: 1,
      celular: "92985856969",
      telefone: "9298356548",
    },
    endereco: {
      id: 1,
      rua: "142",
      casa: "28",
      cep: "69094800",
      bairro: "Cidade Nova",
    },
    cpf: "05177175227",
    nome: "Lucas",
    sobrenome: "Marcos Goes Marinho",
  },
  listaProdutos: [
    {
      quantidade: 2,
      produto: {
        id: 1,
        codigo: "32545",
        codBarras: "54531584854",
      },
    },
  ],
};

interface IOsProps {
  os: OrdemServicoProps | null;
  setOs: React.Dispatch<React.SetStateAction<OrdemServicoProps | null>>;
}

export const OsContext = React.createContext<IOsProps>({} as IOsProps);

export const OsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [os, setOs] = React.useState<OrdemServicoProps | null>(initialState);

  return (
    <OsContext.Provider value={{ os, setOs }}>{children}</OsContext.Provider>
  );
};
