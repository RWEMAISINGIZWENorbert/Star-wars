import './styles/Component.css';
// import {useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Component = ({character, id, setId, imgId}) => {
  return (
    <>
    <div className='component-section'>
         {
          character.map((el,index) => {
            // if(imgId == '17') {
            //   continue;
            // }
            //  for(index; index <=83; index++){
            if(id == 1){
              if((index + 1) == 10){
                imgId = '10';
                console.log(imgId)          
              }else{
              imgId = index + 1;
              }
               }else if(id == 2){
                if((index+ 1) == '7'){
                  imgId = '1' + (index + 2) ;
                }
                 if((index + 1) == 20){
                    imgId = '20';
                    console.log(imgId)
                  }else{
                    imgId = '1' + (index + 1);
                     console.log(imgId);
              }
              if(index +1){
                if((index + 1) == 7) {
                  imgId = '1' +( index + 2);
                }
                else{
                imgId = '1' + (index + 1);
                }
              }  
              }
              else if(id == 3){
                if((index+1) == 30){
                  imgId = '30';
                  console.log(imgId)
                }
                imgId = '2' + (index + 1);
                console.log(imgId);
               }else if(id == 4){
                if((index+1) == 40){
                  imgId = '40';
                  console.log(imgId)
                }
                imgId = '3' + (index + 1);
                console.log(imgId);
               }else if(id == 5){
                if((index+1) == 50){
                  imgId = '60';
                  console.log(imgId)
                }
                imgId = '4' + (index + 1);
                console.log(imgId);
               }else if(id == 6){
                if((index+1) == 60){
                  imgId = '70';
                  console.log(imgId)
                }
                imgId = '5' + (index + 1);
                console.log(imgId);
               }else if(id == 7){
                if((index+1) == 70){
                  imgId = '80';
                  console.log(imgId)
                }
                imgId = '6' +(index + 1);
                console.log(imgId);
               }else if(id == 8){
                if((index+1) == 80){
                  imgId = '80';
                  console.log(imgId)
                }
                imgId = '7' +(index + 1)
                console.log(imgId);
               }
               else{
                imgId;
                console.log(imgId);
              }
            // }  
          return( 
            <>
          <div className="main" key={index}>
                {/* <img src={image[`${imgId}`]} alt="" /> */}
                <img src={`https://starwars-visualguide.com/assets/img/characters/${imgId}.jpg`} alt="" />
                {console.log(imgId)}
                <p>{el.birth_year}</p>
                <h4>{el.name}</h4>
                <Link to= {`/character/${index + 1}`} style={{ background: 'transparent' , color: '#fff'}}>View details</ Link>
                <Outlet/>
            </div>
            </>
          )
          })
         }
    </div>
        <div className="btns-actions">
                <button onClick={() => setId(id - 1 || id > 1)}><MdOutlineKeyboardArrowLeft className='arrow-icon'/></button>
                <button onClick={() => setId(id + 1)}><MdKeyboardArrowRight className='arrow-icon'/></button>
           </div>
        </> 
  )
}

Component.propTypes = {
  character: PropTypes.string.isRequired,
  id: PropTypes.number,
  setId: PropTypes.number,
  imgId: PropTypes.number
}

export default Component;
