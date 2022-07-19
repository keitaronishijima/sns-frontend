import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
  // user: {
  //   _id: "62cba4f13dc933e3c3681757",
  //   username: "shincode",
  //   email: "shincode@gmail.com",
  //   password: "123456",
  //   profilePicture: "/person/1.jpeg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};