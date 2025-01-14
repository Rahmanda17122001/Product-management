import React, { useState } from 'react';
import {Product, dummyProducts} from '../models/Product';

const NewProduct: React.FC = () => {
    const generateKode = (currentProducts: Product[]) => {
        const newKodeNumber = currentProducts.length + 1; // Menentukan kode berdasarkan jumlah produk
        return `P${String(newKodeNumber).padStart(5, '0')}`; // Menghasilkan kode dalam format P00001, P00002, dll.
    };

    const [TheProduct, setTheProduct] = useState<Product>({
        nama: '',
        hargaBeli: 0,
        hargaJual: 0,
        stok: 0,
        kode: generateKode(dummyProducts)
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // Memperbarui state berdasarkan nama input
        setTheProduct((prevProduct) => ({
            ...prevProduct,
            [name]: name === "hargaBeli" || name === "hargaJual" || name === "stok" ? Number(value) : value,
            
        }));
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newKode = generateKode(dummyProducts); // Menghasilkan kode baru berdasarkan produk yang ada
            const newProduct = { ...TheProduct, kode: newKode }; // Menambahkan kode ke produk baru
            console.log(newProduct); // Ganti dengan logic untuk menyimpan produk baru
        };
    };

    return(
        <div>
            <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
            <div>
                <div>{TheProduct.nama}</div>
                <div>{TheProduct.hargaBeli}</div>
                <div>{TheProduct.hargaJual}</div>
                <div>{TheProduct.stok}</div>
                <div>{TheProduct.kode}</div>
            </div>
            <form >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nama</label>
                    <input
                        type="text"
                        name="nama"
                        value={TheProduct.nama}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Harga Beli</label>
                    <input
                        type="number"
                        name="hargaBeli"
                        value={TheProduct.hargaBeli}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Harga Jual</label>
                    <input
                        type="number"
                        name="hargaJual"
                        value={TheProduct.hargaJual}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Stok</label>
                    <input
                        type="number"
                        name="stok"
                        value={TheProduct.stok}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <input type="submit" value="Submit"></input>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Simpan Produk
                </button>
            </form>
        </div>
        </div>
    )
}

export default NewProduct;
