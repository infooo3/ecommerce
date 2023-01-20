import React  from 'react';
import HeaderApp from '../components/HeaderApp'
import SearchBar from '../components/SearchBar'
import ProductPreview from '../components/ProductPreview'

const Home=()=> {

    return (
        <div className="home"> 
            <HeaderApp/>   
            <SearchBar/>
            <div>
                <form className="admin" style={{flexDirection:"column", display: "flex", width:"30%", border:"solid black"}}>
                    <h1>Nouveau produit</h1>
                    <label htmlFor="name"><b>Nom du produit</b></label>
                    <input type="text" placeholder="Nom du produit" name="name" required/>
                    <label htmlFor="price"><b>Prix</b></label>
                    <input type="text" placeholder="Prix du produit" name="price" required/>
                    <label htmlFor="quantity"><b>Quantité</b></label>
                    <input type="number" placeholder="Quantité" name="quantity" required/>
                    <label htmlFor="image"><b>Image</b></label>
                    <label className="home_button" htmlFor="file"></label>
                    <input type="file" multiple accept=".jpg, .jpeg, .png"/>
                    <button type="submit" className="btn">Ajouter produit</button>
                </form>
            </div>        
            <ProductPreview/>
        </div>          

    )

}

export default Home;

