import React, {Fragment} from "react";
import '../style.css';

const ProductRenderized = (props) => {
    return(
        <div className="col-lg-6 col-sm-12 border py-1">
            <img src={props.image} alt='Imagem do producto' className="my-image-2"/>
            <h3 className='h3 py-2'>{props.title}</h3>
            <h4>{props.price} mts</h4>
            <p className='py-2'>{props.description}</p>
        </div>
    );
}

export default ProductRenderized;