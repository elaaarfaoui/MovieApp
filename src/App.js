import { useState } from 'react';
import './App.css';
import MovieList from './Component/MovieList/MovieList';
import NavBarre from './Component/NavBarre/NavBarre';
import data from "./Constant/data";
import Add from './Component/AddMovie/Add';
 


function App() {

  
const [movie, setMovie] = useState(data);
const handleSave= (newMovie)=> {setMovie ([...movie, newMovie]) }

const [serchText, setSerchText] = useState("")
const searchText = (text)=> { setSerchText(text) }
console.log("searchText",serchText)
const [rate, setRate] = useState(0)
console.log("rate",rate)
  return (
    <div> 
<NavBarre handleSearch= {searchText} setRate={setRate} />
  
<Add  handleAddMovie= {handleSave} />
<MovieList movie={movie} serchText={serchText} rate ={rate}/>


   </div>
  );
}

export default App;
