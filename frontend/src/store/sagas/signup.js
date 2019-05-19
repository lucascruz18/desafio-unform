import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { login } from "../../services/auth";
import { Creators as SignupActions } from "../ducks/signup";
import { Creators as SigninActions } from "../ducks/auth";

export function* signupUser(action) {
  const {
    username,
    email,
    password,
    password_confirmation,
    history
  } = action.payload.data;

  if (!email || !password || !password_confirmation) {
    return yield put(
      SignupActions.signupFailure(
        "Campos senha e confirmação de senha são obrigatórios."
      )
    );
  }

  try {
    const response = yield call(api.post, "users", {
      username,
      email,
      password,
      password_confirmation
    });
    yield put(SignupActions.signupSuccess(response.data));
    localStorage.setItem("@unform-id_user", response.data.id);
    localStorage.setItem("@unform-username", response.data.username);

    const authResponse = yield call(api.post, "sessions", {
      email,
      password
    });
    yield put(SigninActions.signinSuccess(authResponse.data));
    login(authResponse.data.token);
    history.push("/Profile");
  } catch (error) {
    yield put(SignupActions.signupFailure("Algo deu errado, tente novamente"));
  }
}
