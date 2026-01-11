import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// MongoDB Connection
// const mongoURI = "mongodb+srv://admindoctor:passworddoctor@cluster0.6xo8c1s.mongodb.net/hospital?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://connectionuser:connectionpassword@cluster0.azxufzl.mongodb.net/connection?retryWrites=true&w=majority";
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Schemas
// const doctorSchema = new mongoose.Schema({
//     id: { type: Number, required: true, unique: true },
//     name: { type: String, required: true },
//     specialty: { type: String, required: true },
//     experience: { type: String, required: true },
//     location: { type: String, required: true },
//     image: { type: String, required: true },
//     available: { type: String, required: true },
//     time: { type: String, required: true },
//     bio: { type: String, required: true },
//     education: [{ type: String }],
//     services: [{ type: String }],
//     createdAt: { type: Date, default: Date.now }
// });

// const serviceSchema = new mongoose.Schema({
//     id: { type: Number, required: true, unique: true },
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     icon: { type: String, required: true },
//     detailedDescription: { type: String, required: true },
//     doctors: [{ type: Number }],
//     createdAt: { type: Date, default: Date.now }
// });

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String }
})

// Models
// const Doctor = mongoose.model('Doctor', doctorSchema);
// const Service = mongoose.model('Service', serviceSchema);
const User = mongoose.model('User', userSchema)
// product model user mode review model
// Basic route
app.get('/', (_req, res) => {
    res.json({ message: 'Server is running Working!' });
});

app.get('/user', async (req, res) => {
    const user = await User.find({});
    if (!user) res.json({
        status: '404',
        message: 'there is no user data'
    })
    res.json({
        data: user, message: 'user data fetch sucessfully '
    })
})

app.post('/user', async (req, res) => {
    const { name } = req.body;
    console.log('name:', name)
    if (!name) res.status(400).json({
        status: '',
        message: "name not found"
    })
    const user = new User({
        id: Date.now(),
        name
    })
    console.log('user', user)
    const u = await user.save()
    console.log('u', u)
    res.json({
        status: 'success',
        message: "User created successfully",
        data: u
    })
})



app.listen(PORT, () => {
    console.log('Over the network server will listen', PORT)
})