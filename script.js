
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child"},
    [React.createElement("h1", {}, "i am nested siva"),React.createElement("h2", {}, "i am nested ashok")]
  ),React.createElement(
    "div",
    { id: "child"},
    [React.createElement("h1", {}, "i am nested siva"),React.createElement("h2", {}, "i am nested ashok")]
  )]
);

console.log(parent);
const heading = React.createElement("h1", {}, "hii i am siva from react");
const body = document.getElementById("container");
const reactRoot = ReactDOM.createRoot(body);
reactRoot.render(parent);

