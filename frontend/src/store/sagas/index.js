import { all, takeLatest } from "redux-saga/effects";

// Reducer
import { Types as SignupTypes } from "../ducks/signup";
import { Types as SigninTypes } from "../ducks/auth";
// import { Types as UserTypes } from "../ducks/user";

// Sagas
import { signupUser } from "./signup";
import { signinUser } from "./auth";
// import { userUpdate, fetchUser, setPreferences } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(SignupTypes.REQUEST, signupUser),
    takeLatest(SigninTypes.REQUEST, signinUser)
    // takeLatest(UserTypes.REQUEST, userUpdate),
    // takeLatest(UserTypes.PREFERENCE_REQUEST, fetchUser),
    // takeLatest(UserTypes.SET_PREFERENCES_REQUEST, setPreferences)
  ]);
}
