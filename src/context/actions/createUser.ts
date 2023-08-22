import { UserAction, IUser } from "../../@types/user";

export const createUser = async (
  newUser: IUser,
  dispatch: React.Dispatch<UserAction>
) => {
  dispatch({
    type: "CREATE_USER_LOADING",
  });

  try {
    const response = await fetch(
      "https://628fbdd9dc4785236545fb25.mockapi.io/users",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      }
    );

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    const data = await response.json();

    dispatch({
      type: "CREATE_USER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "CREATE_USER_ERROR",
    });
  }
};
