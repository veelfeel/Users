import { UserAction } from "../../@types/user";

export const getUsers = async (dispatch: React.Dispatch<UserAction>) => {
  dispatch({
    type: "GET_USERS_LOADING",
  });

  try {
    const response = await fetch(
      "https://628fbdd9dc4785236545fb25.mockapi.io/users",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    const data = await response.json();

    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USERS_ERROR",
    });
  }
};
