function costomRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'childer') continue //
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElemnt = {
    type : 'a',
    props : {
        href: "https://google.com",
        target : '_blank'
    },
    children : "Click Here"
}

const mainContainer = document.querySelector("#root");

costomRender(reactElemnt, mainContainer);