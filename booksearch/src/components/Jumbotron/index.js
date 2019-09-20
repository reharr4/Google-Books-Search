import React from "react";

function Jumbotron({children}){
    return(
        <div
        style={{height: 300, clear: "both", padding: 120, textAlign: "center"}}
        className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;