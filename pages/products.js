import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('/api/products').then(response =>{
            setProducts(response.data)
        })
    }, [])
    return(
        <Layout>
            <Link className="bg-blue-900 text-white py-1 px-2 rounded-md" href={'/products/new'}>Add new product</Link>
            <table className="basic">
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                            <tr key={product.name}>
                                <td >{product.title}</td>
                                <td>
                                    buttons
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Layout>
    )
}