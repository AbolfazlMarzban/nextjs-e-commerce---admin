import Layout from "@/components/Layout";

export default function NewProduct(){
    return(
        <Layout>
            <h1>New Product</h1>
            <label>Product name</label>
           <input type="text" placeholder="product name"></input>
           <label>description</label>
            <textarea placeholder="description"></textarea>
            <label>Price (in USD)</label>
            <input type="number" placeholder="price"></input>
            <button className="btn-primary">Save</button>
        </Layout>
    )
}