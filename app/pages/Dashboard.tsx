"use client"

import { ProductControllers } from "../controllers/ProductControllers";


const Dashboard: React.FC = () => {
    const {products, loading, error} = ProductControllers();

    return(
        <div className="p-4 bg-white h-fit rounded-lg">
            <h1 className="flex text-xl font-bold text-black mb-4">Product List</h1>
            <div className='flex overflow-scroll bg-red-500'>
                <table className="table min-w-full bg-gray-800 rounded-lg">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="py-3 px-4 text-left text-gray-300">Nama</th>
                        <th className="py-3 px-4 text-left text-gray-300">Harga Beli</th>
                        <th className="py-3 px-4 text-left text-gray-300">Harga Jual</th>
                        <th className="py-3 px-4 text-left text-gray-300">Stok</th>
                        <th className="py-3 px-4 text-left text-gray-300">Kode</th>
                    </tr>
                </thead>
                <tbody >
                    {products.map((product, index) => (
                        <tr key={index} className="border-b border-gray-600 hover:bg-gray-700">
                            <td className="py-3 px-4 text-gray-200">{product.nama}</td>
                            <td className="py-3 px-4 text-gray-200">{product.hargaBeli.toLocaleString()}</td>
                            <td className="py-3 px-4 text-gray-200">{product.hargaJual.toLocaleString()}</td>
                            <td className="py-3 px-4 text-gray-200">{product.stok}</td>
                            <td className="py-3 px-4 text-gray-200">{product.kode}</td>
                        </tr>
                    ))}
                </tbody>
            </table></div>
        </div>
    )
}

export default Dashboard;