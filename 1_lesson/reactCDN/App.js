import React from "react";
import ReactDOM from "react-dom/client";

//We need to use core react library for creating an element
// const heading = React.createElement("h1",{id: "heading"},"Hello world from react!");

// console.log(heading) //It will log an object not a html element

//We need to use react-dom library for creating root and to use dom 
// const root = ReactDOM.createRoot(document.getElementById('root'));

// Then we use render method to append the heading(child) to the root in the DOM
// root.render(heading);

// const parent = React.createElement("div",{id: "parent"},
//     [
//         React.createElement("div",{id: "child"}, [
//             React.createElement("h1",{}, "I am h1 Tag"),
//             React.createElement("h2",{}, "I am h2 Tag")
//         ]),
//         React.createElement("div",{id: "child2"}, [
//             React.createElement("h1",{}, "I am h1 Tag"),
//             React.createElement("h2",{}, "I am h2 Tag")
//         ])
//     ]
// )

// console.log(parent)

const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React 🚀"
)

// const jsxHeading = <h1 id="jsxHeading">Namaste React Using JSX 🚀</h1>

const jsxHeading = (
 <h1 id="jsxHeading">Namaste React Using JSX 🚀</h1>
)

console.log(heading)
console.log(jsxHeading)


// Functional Component :
const HeadingComponent = () =>(
    <h1 className="headingComp">Heading using functioal Component</h1>
)

//Same as above but writing "return" is better practice
const HeadingComponent2 = () => {
    return <h1 className="headingComp">Heading using functioal Component 2</h1>
}

// When we use a normal function syntax we have to use return keyword compulsory
const Title = function(){
    return <h1>Title using Functional Component 🐱‍👤</h1>
}

//Let's create a normal JSX element and put it inside the container
const heading3 = (
    <h3>This is heading 3 🐱‍🚀</h3>
)

//Component Composition : Component inside component
const Container = () => {
    return (
        <div className="Container">
            {/* <Title /> */}
            {Title()}
            <h2>{100+200}</h2>
            {/* <p>{alert("JSX is Amazing 😎")}</p> */}
            {/* {localStorage.setItem("JSX" , "Amazing")}
            <p>{localStorage.getItem("JSX")}</p> */}
            {heading3}
            <HeadingComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(jsxHeading)

root.render(<Container />)