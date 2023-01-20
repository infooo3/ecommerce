const ProductPreview=()=> {
    const id="dddgdfg4"
    return (
        <div className="productPreview">
            <span style={{width:"30%", display:"flex", flexDirection:"column"}}> 
                <a style={{maxWidth:"100%" }} href={'produit/' + id}>
                    <img style={{width:"100%", maxHeight:"50vh"  }} src="images/product1.png" alt="Smartphone"  />
                </a>
                <button  className="admin"> Retirer</button>
            </span>
        </div>          
    )
}
export default ProductPreview