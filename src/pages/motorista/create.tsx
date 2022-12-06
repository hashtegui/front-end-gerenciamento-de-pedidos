import * as React from "react";
import Header from "../../components/Header";
import { UserContext } from "../../providers/UserContext";
const CreateMotorista = () => {
  const { user } = React.useContext(UserContext);
  return (
    <>
      <Header name="Cadastro de Motorista"></Header>
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">Nome</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">CPF</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="cnh" type="text" className="validate" />
                <label htmlFor="cnh">CHN</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="placa" type="text" className="validate" />
                <label htmlFor="placa">Placa</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="chassi" type="text" className="validate" />
                <label htmlFor="chassi">Chassi Veículo</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="input-field inline">
                  <input id="ano" type="text" className="validate" />
                  <label htmlFor="ano">Ano Veículo</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateMotorista;
