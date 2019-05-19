import React, { Component } from "react";

import { Form, Input } from "@rocketseat/unform";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SigninActions } from "../../store/ducks/auth";

import { Link } from "react-router-dom";

import { Container, Wrapper, Error, Title } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignin = async e => {
    const { history } = this.props;
    const { signinRequest } = this.props;
    const { email, password } = this.state;
    signinRequest({
      email,
      password,
      history
    });
  };

  render() {
    const { error, loading } = this.props;
    return (
      <Container>
        <Form onSubmit={this.handleSignin}>
          <Wrapper>
            <Title>Fazer Login</Title>
            {error && <Error>{error}</Error>}
            <div>
              <p>Email:</p>
              <Input
                name="email"
                type="text"
                placeholder="Digite seu email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div>
              <p>Senha:</p>
              <Input
                name="password"
                type="password"
                placeholder="Sua senha secreta"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : "Entrar"}
            </button>
            <Link to="/SignUp">Criar conta grátis</Link>
          </Wrapper>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SigninActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
