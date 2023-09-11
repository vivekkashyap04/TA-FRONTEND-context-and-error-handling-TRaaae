import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { UserContext } from "../UserContext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <UserContext.Provider value={isDarkMode}>
          <Header />
          <Main />
          <SwitchButton changeMode={this.changeMode} />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
