const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim : true,
        required: [true, 'Enter name']
    },
    password:{
        type: String,
        trim: true,
        required : [true, 'Enter a password'],
        minlength: [6, 'Password should be atleast 6 characters']
    },
    email: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 6,
        unique: true,
        lowercase:true
    },
    phoneNo: {
        type: Number,
        trim: true,
        require: [true, "Enter an Contact Number"],
        unique: [true, "Contact Number already Exists"],
      },
    isAdmin: {type: Boolean, default:false},
    isSeller: {type: Boolean, default: false},
    isBuyer: {type: Boolean, default:true},
    avatar: {
        type:String
    },
    productList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"product"
        }
    ]

},
{
    timestamps:true,
})

const User = mongoose.model("user", userSchema);
module.exports = User;