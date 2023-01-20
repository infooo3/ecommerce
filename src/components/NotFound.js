import React  from 'react';
import HeaderApp from './HeaderApp';
const NotFound = ()=>{
    return (
        <div className='not-found'>
            <HeaderApp/>
            <h1>Erreur 404</h1>
            <h2>La page demandée n'existe pas</h2>
        </div>
    )
}
export default NotFound