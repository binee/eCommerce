const cloudinary = require('../middlewares/cloudinary');

const router = require('express').Router;



//Create Product


router.post('/', async(req,res) => {
    const {name, categories, image, desc, price} = req.body;
    try {
        
        if(image){
           const uploadRes =  await cloudinary.uploader.upload(image,{
                upload_preset: 'online-shop'
            })
            if(uploadRes){
                const product = new Product({
                    name,
                    categories,
                    desc,
                    price,
                    image: uploadRes
                })
                const saveProduct = await product.save();
                res.staus(201).send(saveProduct)
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


router.get("/", async(req,res)=>{
    try {
        const response = await Product.find();
        res.status(200).send(response)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }

})


module.exports = router