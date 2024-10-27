const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"it's heading one"),
        React.createElement("h1",{},"it's heading one")]
    ),
    React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"it's heading one"),
        React.createElement("h1",{},"it's heading one")]
    )]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);