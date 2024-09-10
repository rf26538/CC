import Card from './components/Card'

function App() {

  let obj = {
    fullName :"Fazal",
    Age : 26,
    Addrress : {
      city : 'New Delhi',
      state : "Delhi",
      Country : 'India'
    }
  }

  let newArr = [1,2,3,4];

  return (
    <>
      <Card username= 'Rehan Fazal'/>
      <Card username= 'testr' post='user not found'/>
      <Card username= 'new Arr' myArr={newArr}/>
    </>
  )
}

export default App
