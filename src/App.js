import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const components = ['Wire', 'Screw', 'Pin', 'Pen', 'Rubber', 'Pencil'];
  const products = [{name: 'Photoshop', price: '95.55'},
  {name: 'Illustrator', price: '65.55'},
  {name: 'Acrobat', price: '45.55'},
];
const productNames = products.map(product => product.name);
console.log(productNames);
const componentNames = components.map(component => component);
console.log(componentNames);
  var style = 
  {
    color: 'red',
    backgroundColor: 'white'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload the app.
        </p> */}
        <h2 style = {style}>Hello there, This is  </h2>
        <h1>Mazharul Islam</h1>
        <h2 style = {{backgroundColor: 'cyan', color: 'black'}}>I'm a react developer</h2>
        <p>I design and develop website</p>
        {/* <Person name="1st component" job="Results"></Person>
        <Person name="2nd component" job="Details"></Person>
        <Person name="3rd component" job="Discuss"></Person> */}

        <Person name={components[0]} job="Results"></Person>
        <Person name={components[1]} job="Details"></Person>
        <Person name={components[2]}  job="Discuss"></Person>

      {/* <Product name={products[0].name} price= {products[0].price}></Product>
      <Product name={products[1].name} price= {products[1].price}></Product>
      <Product name={products[2].name} price= {products[2].price}></Product> */}
      
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
      {
        products.map(pd => <Product product={pd}></Product>)
      }

      <ul>
        {
          components.map(component => <li>{component}</li>)
        }
        {
          products.map(pd => <li>{pd.name}</li>)
        }
      </ul>

      <Counter></Counter>
      <Users></Users>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Product(params) 
{
  const productStyle = 
  {
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: 'slategray',
    height: '250px',
    width: '300px',
    float: 'left',
    color: 'cyan',
    margin: '5px'
  }
  const {name, price} = params.product;
  return   (
    // <div style={productStyle}>
    <div style={productStyle}>
      {/* <h2>{params.product.name}</h2>
      <h1>Price: ${params.product.price}</h1> */}
      <h2>{name}</h2>
      <h1>Price: ${price}</h1>
      <button>BUY NOW</button>
    </div>
  );

}

function Users() 
{
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>{users.length} Dynamic Users</h3>
      <p><i><u>from JSON placeholder</u></i></p>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div> 
  ) 
}

function Counter(props) 
{
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => 
        {
          if (count > 0) 
          {
            setCount(count - 1);
          }
        }
      }>DECREASE</button>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
    </div>
  )
}

function Person(props) 
{
  const PersonStyle =
  {
    border: '2px solid green',
    margin: '5px',
    padding: '2px'
  }
  return (
    // <div style={{border: "2px solid red", margin: '5px'}}>
    <div style={PersonStyle}>
      <h1>New component</h1>
      <h3>{props.name}</h3>
      <h3>Showing {props.job}</h3>
    </div>
  );
}

export default App;
