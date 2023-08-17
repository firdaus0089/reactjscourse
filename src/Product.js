import React, { useState } from 'react'

const Product = (myprop) => {
    const [prods, setProds] = useState(myprop.prod)

    return (
        <div className="container">
            <div className="row">
                {prods.map((prodsList) => {
                    return (
                        <div style={{textAlign:'center'}} className="col-sm">
                            <div ><img src={prodsList.img} alt="Girl in a jacket" width="200" height="200"></img></div>
                            <div>{prodsList.desc}</div>
                            <b>{prodsList.price}</b>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default Product
