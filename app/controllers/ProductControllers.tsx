"use client";
import { useState } from 'react';
import {Product, dummyProducts} from '../models/Product';

export const ProductControllers = () => {
    const [products, setProduct] = useState<Product[]>(dummyProducts);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const addProduct = async (newProduct : Product)=>{
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 500)); 
        setProduct(prevProduct => [...prevProduct, newProduct])
        setLoading(false)
    }

    const addNewProduct = async (newProduct : Product)=>{
        setLoading(true)
        setProduct(prevProduct => [...prevProduct, newProduct])
        setLoading(false)
    }

    return{products, loading, error, addProduct};
} 
