import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElemnt = {
  type : 'a',
  props : {
      href: "https://google.com",
      target : '_blank'
  },
  children : "Click Here"
}

function MyApp() {
  return (
    <div>
      <h1>Custom react App</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='_blank'> Visit Here</a>
);

const areactElement = React.createElement(
  'a',
  {href : 'https:google.com', target:'_blank'},
  'click to vissit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  // AnotherElement
  // <MyApp/> or MyApp()
  // areactElement
)
