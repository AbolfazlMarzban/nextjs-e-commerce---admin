import mongoose from "mongoose"

export function mongooseConnect(){
    if(mongoose.connection.readyState === 1){
        console.log('connected')
        return mongoose.connection.asPromise()
    } else {
        console.log('gooz')
        const uri = process.env.MONGODB_URI
        return mongoose.connect(uri)
    }
}  

 