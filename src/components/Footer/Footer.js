import React from "react";
import "./styles.css";

var style = {
    backgroundColor: "#343a40",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }
  
  function Footer({ children }) {
      return (
          <div>
              <div style={phantom} />
              <div style={style}>
              <p style= {{color: "white", fontSize: "1.2vw", margin: "auto" }}> Created by Luke Martin | Copyright © 2021</p>
                  { children }
              </div>
            
          </div>
      )
  }
  
export default Footer;