import './App.css';
import './styles/header.css';
import { CiSearch } from "react-icons/ci";
import { TiTimes } from "react-icons/ti";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Component from './component.jsx';
import ComponentDetails from './ComponentDetails.jsx';
import Loader from './loader.jsx';
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
function App() {

  let filteredData;
   
  const [ credential, setCredential ] = useState('');
  const [character,setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  let [id, setId] = useState(1);
  console.log(id);

  // let idi = 1;
    useEffect(() => {
      const fetchData = async () => {
         try {
              const res = await axios.get(`https://swapi.dev/api/people/?page=${id}`);
              const status = res.status;
              if(!status == 200){
               console.log('Error occured while fetchin the data')
              }
              console.log(res.data.results);
              setCharacter(res.data.results);

         } catch (error) {
           throw new Error(error);
         }finally{
           setLoading(false);
         }
      }
      fetchData();
      setLoading(true)
 },[id])

let imgId = null;
 
 const toggleBtn1 = () => {
  setBtn1((btn1) => !btn1);
  if(!btn1){
    setBtn2(() => false)
  }
  console.log(filteredData);
}

const toggleBtn2 = () => {
setBtn2((btn2) => !btn2);
if(!btn2){
  setBtn1(() => false);
}
}

 if (loading) return <div><Loader/></div>;

  filteredData = character.filter((char) =>
    char.name.toLowerCase().includes(credential.toLowerCase())
);
  
  return (
    <>
    <Router>
        <div className="header-section">
             <div className="logo">
                <h4>Star Wars</h4>
             </div>
             <div className="details-section">
                 <div className="search">
                   <input 
                                type="text"  
                                placeholder='search name of the star' 
                                value={credential}
                                onChange={(e) => setCredential(e.target.value)}
                                />
                                {credential ? <TiTimes  className='times-icon' onClick={() => setCredential('')}/> : ''}
                           <button onClick={find}><CiSearch className='icon'/></button>
                  </div>
             </div>
             <div className="btns">
             <button onClick={toggleBtn1} style={btn1? {background: 'rgba(85, 85, 1, 0.644)'}: {background: '#363636'}}>male</button> 
             <button onClick={toggleBtn2} style={btn2? {background: 'rgba(85, 85, 1, 0.644)'}: {background: '#363636'}}>female</button>
             </div>
        </div>
        <Routes>
             <Route path='/' element = {<Component imgId = { imgId } character = {filteredData} id = {id} setId = {setId} />} />
             <Route path="/character/:id" element={<ComponentDetails imgId = {imgId} />} />
        </Routes>
        </Router>
    </>
  )
}

export default App