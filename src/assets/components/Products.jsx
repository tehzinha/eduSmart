

function Products(){
    const products = [
        {
        name: "Iphone",
        price: 15000
        },
        {
          name:"Samsung",
          price:10000
        }
    ]
    return(
        <>
         <p>{products.map((product)=>(
      <div>
        <p className='texto'>{product.name}</p>
        <p>{product.price}</p>
      </div>
    ))} </p>
        </>
    )
}

export default Products