import React from 'react';
import { ProductControllers } from '../controllers/ProductControllers';
import {Product} from '../models/Product';


const Addproductpage: React.FC = () =>{
    const {addProduct} = ProductControllers();

    const handleAddProduct = () => {
        const newProduct: Product = {
            nama: "Produk Baru",
            hargaBeli: 10000,
            hargaJual: 15000,
            stok: 10,
            kode: "P00221"
        };
        addProduct(newProduct);
    };
    return(
        <div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    )
}

export default Addproductpage;