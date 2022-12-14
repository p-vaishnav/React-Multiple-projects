import React, { Component } from "react";
import {ThemeContext} from "./UseContext";
export default class ClassBasedComponent extends Component {
    themeStyles(dark) {
        return {
            color : dark ? "#fff" : "#ccc",
            backgroundColor :   !dark ? "#fff" : "#ccc"
        }
    }
  
    render() {
    return(
      <>
        <ThemeContext.Consumer>
            {
               (dark) => {
                    {/*this use karna padta hai */}
                    return <h1 style={this.themeStyles(dark)}>Have Patience success will me mine!</h1>
               }
            }
        </ThemeContext.Consumer>
      </>
    );
  }
}
