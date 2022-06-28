import './App.css';

const App = ()=> {
  var cities = [
    'Agra',
    'Allahabad',
    'Aligarh',
    'Ambedkar Nagar',
    'Auraiya',
    'Azamgarh',
    'Barabanki',
    'Budaun',
    'Bagpat',
    'Bahraich',
    'Bijnor',
    'Ballia',
    'Banda',
    'Balrampur',
    'Bareilly',
    'Basti',
    'Bulandshahr',
    'Chandauli',
    'Chhatrapati Shahuji Maharaj Nagar',
    'Chitrakoot',
    'Deoria',
    'Etah',
    'Kanshi Ram Nagar',
    'Etawah',
    'Firozabad',
    'Farrukhabad',
    'Fatehpur',
    'Faizabad',
    'Gautam Buddh Nagar',
    'Gonda',
    'Ghazipur',
    'Gorakhpur',
    'Ghaziabad',
    'Hamirpur',
    'Hardoi',
    'Mahamaya Nagar',
    'Jhansi',
    'Jalaun',
    'Jyotiba Phule Nagar',
    'Jaunpur district',
    'Ramabai Nagar (Kanpur Dehat)',
    'Kannauj',
    'Kanpur',
    'Kaushambi',
    'Kushinagar',
    'Lalitpur',
    'Lakhimpur Kheri',
    'Lucknow',
    'Mau',
    'Meerut',
    'Maharajganj',
    'Mahoba',
    'Mirzapur',
    'Moradabad',
    'Mainpuri',
    'Mathura',
    'Muzaffarnagar',
    'Panchsheel Nagar district (Hapur)',
    'Pilibhit',
    'Shamli',
    'Pratapgarh',
    'Rampur',
    'Raebareli',
    'Saharanpur',
    'Sitapur',
    'Shahjahanpur',
    'Sant Kabir Nagar',
    'Siddharthnagar',
    'Sonbhadra',
    'Sant Ravidas Nagar',
    'Sultanpur',
    'Shravasti',
    'Unnao',
    'Varanasi',
];
  const asc = cities.sort();
  // var barray = [];
  const sortedAsc = asc.map(i => 
  i.substring(0,1) == "B" ? <li>{i}</li> : <></>
  
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting of cities name that start with B</h1>
      <ul>{sortedAsc}</ul>
      </header>
    </div>
  );
}

export default App;
