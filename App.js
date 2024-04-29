import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


// const heading = React.createElement("h1",{id:"heading"},"Hello Ram !!");
// root.render(heading);


// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{},"I'm H1 Tag !!")
//     )
// );
// root.render(parent);


const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [
                React.createElement("h1",{},"I'm H1 Tag  222!!"),
                React.createElement("h2",{},"I'm H2 Tag !!")
            ]
        ),
        React.createElement("div",{id:"child"},
            [
                React.createElement("h1",{},"I'm H1 Tag !!"),
                React.createElement("h2",{},"I'm H2 Tag !!")
            ]
        )
    ]
);
root.render(parent);