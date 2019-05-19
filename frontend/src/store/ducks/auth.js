/* Action Types */
export const Types = {
  REQUEST: "auth/SIGNIN_REQUEST",
  SUCCESS: "auth/SIGNIN_SUCCESS",
  FAILURE: "auth/SIGNIN_FAILURE",
  LOGOUT_REQUEST: "auth/LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "auth/LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "auth/LOGOUT_FAILURE"
};

/* Reducer */
const INITIAL_STATE = {
  loading: false,
  error: "",
  data: {}
};

export default function signin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        data: action.payload.data
      };
    case Types.FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    case Types.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case Types.LOGOUT_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false
      };
    case Types.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
}

/* Action Creators */
export const Creators = {
  signinRequest: ({ email, password, history }) => ({
    type: Types.REQUEST,
    payload: { email, password, history }
  }),

  signinSuccess: ({ data, id }) => ({
    type: Types.SUCCESS,
    payload: { data, id }
  }),

  signinFailure: error => ({
    type: Types.FAILURE,
    payload: { error }
  }),

  logoutRequest: ({ email, password, history }) => ({
    type: Types.LOGOUT_REQUEST,
    payload: { email, password, history }
  }),

  logoutSuccess: ({ data }) => ({
    type: Types.LOGOUT_SUCCESS,
    payload: { data }
  }),

  logoutFailure: error => ({
    type: Types.LOGOUT_FAILURE,
    payload: { error }
  })
};
