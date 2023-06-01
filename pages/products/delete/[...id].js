import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function DeleteProductPage(){
    const router = useRouter()
    const {id} = router.query
    function goBack(){
        router.push('/products')
    }
return(
    <Layout>
        <h1>Do you really want to delete product X? </h1>
        <button>Yes</button>
        <button onClick={goBack}>No</button>
    </Layout>
)
}