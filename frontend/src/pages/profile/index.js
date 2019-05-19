import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";

import { Container, Title, Text } from "./styles";

import Header from "../../components/header";
export default class profile extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <Title>Bem-Vindo!</Title>
          <Text>
            Um pequeno sistema de login e cadastro de usuário, utilizando o
            Unform da Rocketseat
          </Text>
          <Link onClick={() => logout()} to="/">
            <button>Sair</button>
          </Link>
        </Container>
      </Fragment>
    );
  }
}
