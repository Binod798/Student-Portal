const express = require("express");
const app = express()
const cors    = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({
  origin: 'http://localhost:3000', // your React app URL
  credentials: true,
}));

const authRoute = require("./routes/authRoutes")
const apiRoutes = require("./routes/apiRoutes")
const adminRoutes = require("./routes/adminRoutes")

const port = 4000

app.use("/auth",authRoute)
app.use("/api",apiRoutes)
app.use("/admin",adminRoutes)


app.listen(port,()=>{
    console.log(`Server is listening in port ${port}`)
})