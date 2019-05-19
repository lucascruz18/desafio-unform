import React, { Component } from "react";

import { Form, Input } from "@rocketseat/unform";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SignupActions } from "../../store/ducks/signup";

import { Link } from "react-router-dom";

import { Container, Wrapper, Error, Title } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  handleSignup = async e => {
    const { history } = this.props;

    const { signupRequest } = this.props;
    const { username, email, password, password_confirmation } = this.state;

    signupRequest({
      username,
      email,
      password,
      password_confirmation,
      history
    });
  };

  render() {
    const { error, loading } = this.props;
    return (
      <Container>
        <Form onSubmit={this.handleSignup}>
          <Wrapper>
            <Title>Cadastro</Title>
            {error && <Error>{error}</Error>}
            <p>Nome</p>
            <Input
              name="username"
              placeholder="Digite seu nome"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <p>Email</p>
            <input
              name="email"
              placeholder="Digite seu email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <p>Senha</p>
            <input
              name="password"
              type="password"
              placeholder="Sua senha secreta"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <p>Confirme sua senha</p>
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirme sua senha secreta"
              onChange={e =>
                this.setState({ password_confirmation: e.target.value })
              }
            />
            <button type="submit">
              {loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                "Criar conta"
              )}
            </button>
            <Link to="/">Já tenho conta</Link>
          </Wrapper>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signup.error,
  loading: state.signup.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
