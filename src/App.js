// import { Container } from 'react-bootstrap';
import './App.css';
// import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Login/Main';
import Keys from './components/keys/Keys';
// import States from './components/States';
// import { Container } from 'react-bootstrap';
import Products from './components/Products/Products';

function App() {
  // const states = [
  //   {name:"Kerala", language:"Malayalam"},
  //   {name:"TN", language:"Tamil"},
  //   {name:"AP", language:"Kannada"},
  //   {name:"Goa", language:"English"}
  // ]

//  let number = -1
//   const CheckNumber = () => {
//     if (number>0){
//       return <h1>Positive number</h1>;
//     }
//     else if (number<0){
//       return <h1>Negative number</h1>;
//     }
//     else{
//       return <h1>Zero</h1>;
//     }
//   };

// let isLoggedin =false
// return(
//   <div className='App'>
//     {isLoggedin? (<h1>Welcome to site</h1>):(<h1>Login Please</h1>)}
//   </div>
// );

// return <div className='App'>
//   <Main isLoggedin = {false}/>
//    </div>

// return (
//   <div className='App'>
//     <Keys/>
//   </div>
// )

return(
  <div className='App'>
    <Products/>
  </div>
)

    // <>
    //   <Header />  
    //     <States name={"Kerala"} language={"Malayalam"}/>
    //     <States name={"TN"} language={"Tamil"}/>
    //     <States name={"AP"} language={"Telugu"}/> 

    //     <Container>
    //       <States states={states}/>
    //     </Container> 
    //  </>

        // <div className="App">
        //   <CheckNumber/>
        // </div>
}
export default App;
