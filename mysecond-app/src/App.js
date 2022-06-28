import './App.css';

const App=(num)=> {
  num = 5;
  var fact=1;
  if(num <2)
  {
    fact= 1;
  }
  else
  {
    for(let i=1;i<=num;i++){
      fact = fact*i;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Factorial of {num}
        </h2>
        <h1>{fact}</h1>

       
      </header>
    </div>
  );
}

export default App;
