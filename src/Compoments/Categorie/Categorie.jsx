import React from 'react'
import './Categorie.css'
const Categorie =()=> {
 
    return (
    <>
      
      <div className='categorie'>
      <strong>categorie</strong>
      <select name="annimé" id="">
        <option value="">Comédie</option>
        <option value="">Aventure </option>
        <option value="">Fantastique/Fantasy</option>
        <option value="">Science-Fiction </option>
        <option value="">Drame </option>
        <option value="">Horreur </option>
        
      </select>
      </div>
      
      
      </>
    )
  }

  export default Categorie;