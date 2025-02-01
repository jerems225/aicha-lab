import React from 'react'
import Header from '../../Compoments/Entet/Header/Header';
import Baniere from '../../Compoments/Bannier/Baniere';
import Foother from '../../Compoments/Entet/Foother/Foother';
import CategorieList from '../../Compoments/Categorie/CategorieList';
import RecentMovies from '../../Compoments/Movies/RecentMovies/RecentMovies';

const Accueil=()=>  {
  
    return (
      <div>
       <Header/>
        <Baniere/>
        <CategorieList />
        <RecentMovies />
        <Foother/>
      </div>
    )
 
}
export default Accueil;