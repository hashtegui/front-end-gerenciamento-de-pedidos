interface NF {
  data: string;
  numNota: string;
  valorTotalNota: number;
  valorTotalProdutos: number;
}

interface Cliente {
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
}

interface Produto {
  quantidade: number;
  produto: {
    id: number;
    codigo: string;
    codBarras: string;
  };
}

interface Corporacao {
  id: number;
  nome: string;
  tipoContrato: string;
}

export interface IOSProps {
  id: number;
  dataOrdem: string;
  corporacao: Corporacao;
  nf: NF;
  cliente: Cliente;
  listaProdutos: Produto[];
}
