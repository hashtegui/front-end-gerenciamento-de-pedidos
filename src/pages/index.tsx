import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React from "react";
import { UserContext } from "../providers/UserContext";

export default function Home() {
  const userState = React.useContext(UserContext);

  const { setUser, user } = userState;

  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };

    const options: RequestInit = {
      body: JSON.stringify(body),
      method: "POST",
    };

    fetch("http://localhost:8080/login", options)
      .then((r) => r.json())
      .then((r) => {
        if (r.status == 200) {
          setUser({ username, password, acesstoken: r.accessToken });
        } else {
          M.toast({ html: "Usuário e/ou Senha incorretos", classes: "red" });
          setPassword((e) => (e = ""));
        }
      });
  };

  return (
    <div className="form-login">
      <h1 className="">Login - Entregaz</h1>
      <div className="login">
        <div>
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            className="validate"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onSubmit={handleLogin}
          className="waves-effect waves-light btn black-text"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
