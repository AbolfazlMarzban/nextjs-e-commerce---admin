import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductForm from "@/components/productForm"

export default function NewProduct(){
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [goToProducts, setGoToProducts] = useState(false)
    async function createProduct(ev){
        ev.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data)
        setGoToProducts(true)
    }
    if(goToProducts){
     router.push("/products")
    }
        return(
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    )
}