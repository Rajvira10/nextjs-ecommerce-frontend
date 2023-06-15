import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";

export default async function handler(req,res){
    if(req.method!== 'POST'){
        res.json('should be a POST request');
        return;
    }
    const {name, email, city, postalCode, streetAddress, country, products} = req.body;
    await mongooseConnect();
    const productsIds = products.split(',');
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({_id: uniqueIds});
    
    let line_items = [];
    for (const productId of uniqueIds){
        const quantity = productIds.filter(id => id === productId)?.length || 0;
        const productInfo = productsInfos.find(p => p._id.toString() === productId);
        if(quantity>0){
            line_items.push({
                quantity,
                price_data: {
                    currecy: 'BDT',
                    product_data: {name: productInfo.title},
                    unit_amount: quantity * productInfo.price,
                }            
            })
        }

    }
    const orderDoc = await Order.create({
        line_items,name,email,city,postalCode,streetAddress,streetAddress,country,paid:false,
    })
    res.json({line_items});
}