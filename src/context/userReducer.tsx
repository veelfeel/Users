import { UserAction, UserState, Status } from "../@types/user";

export function userReducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case "GET_USERS_LOADING": {
      return {
        ...state,
        users: [],
        status: Status.LOADING,
      };
    }

    case "GET_USERS_SUCCESS": {
      return {
        ...state,
        users: action.payload,
        status: Status.SUCCESS,
      };
    }

    case "GET_USERS_ERROR": {
      return {
        ...state,
        users: [],
        status: Status.ERROR,
      };
    }

    case "CREATE_USER_LOADING": {
      return {
        ...state,
        status: Status.LOADING,
      };
    }

    case "CREATE_USER_SUCCESS": {
      return {
        ...state,
        users: [...state.users, action.payload],
        status: Status.SUCCESS,
      };
    }

    case "CREATE_USER_ERROR": {
      return {
        ...state,
        status: Status.ERROR,
      };
    }

    default:
      return state;
  }
}
