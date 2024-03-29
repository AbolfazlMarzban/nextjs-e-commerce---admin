import { mongooseConnect } from "@/lib/mongoos";
import { Product } from "@/models/product";

export default async function handler(req, res){
    const { method } = req
    await mongooseConnect();
    if(method === "POST"){
        const {title, description, price} = req.body
     const productDoc =  await Product.create({
            title, description, price
        })
        res.json(productDoc)
    }
    if(method === "GET"){
        if(req.query?.id){
            res.json(await Product.findOne({_id:req.query.id}))
        } else {
            res.json(await Product.find())
        }
    }
    if(method === "PUT"){
        const {title, description, price, _id} = req.body
        await Product.updateOne({_id}, {title: title, description: description, price: price})
        res.json(true);
    }
    if(method === "DELETE"){
        if(req.query?.id){
            await Product.deleteOne({_id:req.query?.id})
            res.json(true)
        }
    }
}