import './App.css';

const Prime=(max)=> {
  max =  100;
  var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store[i]) 
          {
            primes.push(i+"  ");
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    
 
  return (
    <div className="Prime">
      <header className="App-header">
        <p>
          All prime numbers between 0 and 100 are :
        </p>
        <h4>{primes}</h4>

    
      </header>
    </div>
  );
}

export default Prime;
