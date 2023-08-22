export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IUser {
  id?: string;
  name: string;
  photoUrl: string;
  age: number;
  city: string;
  contactList: string[];
}

export interface UserState {
  users: IUser[];
  status: Status;
}

export type UserAction =
  | {
      type: "GET_USERS_LOADING";
    }
  | {
      type: "GET_USERS_SUCCESS";
      payload: IUser[];
    }
  | {
      type: "GET_USERS_ERROR";
    }
  | {
      type: "CREATE_USER_LOADING";
    }
  | {
      type: "CREATE_USER_SUCCESS";
      payload: IUser;
    }
  | {
      type: "CREATE_USER_ERROR";
    };
