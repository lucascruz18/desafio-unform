import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { login } from "../../services/auth";
import { Creators as SigninActions } from "../ducks/auth";

export function* signinUser(action) {
  const { email, password, history } = action.payload;

  if (!email || !password) {
    yield put(
      SigninActions.signinFailure("Preencha e-mail e senha para continuar!")
    );
  }

  try {
    const response = yield call(api.post, "sessions", {
      email,
      password
    });
    yield put(SigninActions.signinSuccess(response.data));
    login(response.data.token);

    history.push("/Profile");
  } catch (error) {
    yield put(SigninActions.signinFailure("Usuário ou Senha inválidos"));
  }
}
