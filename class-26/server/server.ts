import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { appointmentSchema, doctorSchema, serviceSchema, userSchema } from './schema';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors())


// MongoDB Connection
const mongoURI = "mongodb+srv://connectionuser:connectionpassword@cluster0.azxufzl.mongodb.net/connection?retryWrites=true&w=majority";
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));


// Models
const User = mongoose.model('User', userSchema)
const Doctor = mongoose.model('Doctor', doctorSchema)
const Service = mongoose.model('Service', serviceSchema)
const Appointment = mongoose.model('Appointment', appointmentSchema)

// Basic route
app.get('/', (_req, res) => {
    res.json({ message: 'Server is running Working!' });
});

// user route GET, POST, PUT, DELETE
app.get('/api/user', async (req, res) => {
    const user = await User.find({});
    if (!user) res.json({
        status: '404',
        message: 'there is no user data'
    })
    res.json({
        status: 'success',
        message: 'user data fetch sucessfully ',
        data: user
    })
})

app.post('/api/user', async (req, res) => {
    const { name, email, phone } = req.body;
    console.log('name:', name)
    if (!name && !email && !phone) res.status(400).json({
        status: '',
        message: "name not found"
    })
    const user = new User({
        id: Date.now(),
        name,
        email,
        phone
    })
    const u = await user.save()
    res.json({
        status: 'success',
        message: "User created successfully",
        data: u
    })
})

app.put('/api/user', async (req, res) => {
    const { id, name, email, phone } = req.body;
    if (!name && !email && !phone) res.status(400).json({
        status: '',
        message: "name not found"
    })
    console.log("id", id)
    const user = await User.findByIdAndUpdate(id, { name, email, phone })
    console.log("user", user)
    res.json({
        status: 'success',
        message: "User updated successfully",
        data: user
    })
})

app.delete('/api/user', async (req, res) => {
    const { id } = req.body;
    console.log("id", id)
    const user = await User.findByIdAndDelete(id)
    console.log("user", user)
    res.json({
        status: 'success',
        message: "User deleted successfully",
        data: user
    })
})

// doctor route GET, POST, PUT, DELETE

app.post('/api/doctor/uploadMany', async (req, res) => {
    const doctors = req.body;
    const doctor = await Doctor.insertMany(doctors)
    res.json({
        status: 'success',
        message: "Doctors uploaded successfully",
        data: doctor
    })
})

app.get('/api/doctors/:id', async (req, res) => {
    const id = req.params.id;
    console.log("id", id)
    const doctor = await Doctor.findById(id)
    console.log("doctor", doctor)
    if (!doctor) res.json({
        message: 'Doctor not found'
    })
    res.json({
        message: 'Doctor found',
        data: doctor
    })
})

app.get('/api/doctors', async (req, res) => {
    const doctor = await Doctor.find({})
    if (!doctor) res.json({
        status: '404',
        message: 'there is no doctor data'
    })

    res.json({
        status: 'success',
        data: doctor,
        message: 'doctor data fetch successfully '
    })
})

// service route GET , POST, PUT, DELETE = Try later with relationship
// app.get('/api/services', async (req, res) => {
//     const service = await Service.find({})
//     if (!service) res.json({
//         status: '404',
//         message: 'there is no service data'
//     })
//     res.json({
//         status: 'success',
//         message: 'service fetch successfully ',
//         data: service
//     })
// })

// appointment GET, POST, PUT, DELETE
app.get('/api/apointment', async (req, res) => {
    const appointment = await Appointment.find({});
    if (!appointment) res.json({
        status: '404',
        message: 'there is no appointment data'
    })
    res.json({
        status: 'success',
        message: 'appointment fetch successfully ',
        data: appointment
    })
})


app.get('/api/apointment/:id', async (req, res) => {
    const id = req.params.id;
    const appointment = await Appointment.findById(id);
    if (!appointment) res.json({
        status: '404',
        message: 'there is no appointment data'
    })
    res.json({
        status: 'success',
        message: 'appointment fetch successfully ',
        data: appointment
    })
})

app.post('/api/apointment', async (req, res) => {
    const { name, email, phone, reason, time, doctorId, date, service } = req.body;
    console.log("name", name)
    console.log("email", email)
    console.log("phone", phone)
    console.log("reason", reason)
    console.log("time", time)
    console.log("doctorId", doctorId)
    console.log("date", date)
    console.log("service", service)

    res.send("ok");

    // if (!name && !email && !phone) res.json({
    //     status: '404',
    //     message: 'there is no appointment data'
    // })
    // const appointment = new Appointment({
    //     name,
    //     email,
    //     phone
    // })
    // const a = await appointment.save()
    // res.json({
    //     status: 'success',
    //     message: 'appointment fetch successfully ',
    //     data: a
    // })
})


app.listen(PORT, () => {
    console.log('Over the network server will listen', PORT)
})