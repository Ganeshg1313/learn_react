//We need to use core react library for creating an element
// const heading = React.createElement("h1",{id: "heading"},"Hello world from react!");

// console.log(heading) //It will log an object not a html element

//We need to use react-dom library for creating root and to use dom 
// const root = ReactDOM.createRoot(document.getElementById('root'));

// Then we use render method to append the heading(child) to the root in the DOM
// root.render(heading);

const parent = React.createElement("div",{id: "parent"},
    [
        React.createElement("div",{id: "child"}, [
            React.createElement("h1",{}, "I am h1 Tag"),
            React.createElement("h2",{}, "I am h2 Tag")
        ]),
        React.createElement("div",{id: "child2"}, [
            React.createElement("h1",{}, "I am h1 Tag"),
            React.createElement("h2",{}, "I am h2 Tag")
        ])
    ]
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)