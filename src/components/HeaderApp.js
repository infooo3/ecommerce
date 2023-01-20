import '../styles/style.css'
const HeaderApp=()=> {
    return (
        <div className="HeaderApp"> 
            <a href="/"><img style={{width:"42px", height:"42px" }} src={require('../assets/logoOrange.png')  } alt="logo header" /> </a>
            <a href="/login"><img style={{height:"42px" }} src={require('../assets/loginImg.png')  } alt="login header" /> </a>
            <a href="/mon-panier"><img style={{height:"42px" }} src={require('../assets/shoppingCartImg.png')  } alt="shopping cart header" /> </a>
        </div>          
    )
}

export default HeaderApp 