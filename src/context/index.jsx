import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const monthsList = [
    { key: "January", value: "jan" },
    { key: "February", value: "feb" },
    { key: "March", value: "mar" },
    { key: "April", value: "apr" },
    { key: "May", value: "may" },
    { key: "Jun", value: "jun" },
    { key: "July", value: "jul" },
    { key: "August", value: "aug" },
    { key: "September", value: "sep" },
    { key: "October", value: "oct" },
    { key: "November", value: "nov" },
    { key: "December", value: "dec" },
  ];
  const currentMonth = new Date().getMonth();
  const [isAuth, setIsAuth] = useState(false);
  const [month, setMonth] = useState(monthsList[currentMonth].value);
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        month,
        setMonth,
        currentMonth,
        monthsList,
        openSideBar,
        setOpenSideBar,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
