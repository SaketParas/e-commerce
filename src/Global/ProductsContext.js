import React, {createContext, useState} from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id:1, name:'table',price:3000,image:'https://i5.walmartimages.com/asr/0cf8df77-be1a-4318-b86e-10e6295be2c0.42a70560b98c791865962b3fe9679f4f.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff',status:'hot'},
        {id:2, name:'chair',price:4000,image:'https://cdn.homecrux.com/wp-content/uploads/2020/08/Best-Office-Chairs-to-Work-from-Home.jpg',status:'new'},
        {id:3, name:'window',price:8000,image:'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1441128891/p/photo/image/728529/house_for_Dr.hariharan_5.jpg',status:'new'},
        {id:4, name:'bed',price:12000,image:'https://ii1.pepperfry.com/media/catalog/product/a/x/568x625/axis-king-size-bed-with-storage-in-matte-finish-by-auspicious-home-axis-king-size-bed-with-storage-i-zx6iq1.jpg',status:'hot'},
        {id:5, name:'kitchen-set',price:15000,image:'https://i.pinimg.com/474x/94/25/e1/9425e1d600076e5dd4dc0f2d3f23a76c.jpg',status:'hot'},
        {id:6, name:'Paintings',price:5000,image:'https://static.dezeen.com/uploads/2020/06/milton-glaser-graphic-design-roundup_dezeen_2364_sq-2-300x300.jpg',status:'new'},
        {id:7, name:'door Design',price:25000,image:'https://images.homify.com/image/upload/c_scale,h_500,w_500/v1560767633/p/photo/image/3093838/12_architects_interior_designers_vizag.jpg',status:'hot'},
        {id:8, name:'Sofa',price:35000,image:'https://images.woodenstreet.de/image/cache/data%2Fwooden-sofa%2Fwinster-wooden-sofa-revised%2Frevised%2Fhoney%2Ffront-3-1-1-574x396.jpg',status:'new'},
    ])
    return (
        <ProductsContext.Provider value={{products: [...products]}}>
                {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;
