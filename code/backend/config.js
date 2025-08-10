const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratham:pratham%404912@cluster0.tkdayze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ Connected to MongoDB Atlas");
})
.catch(err => {
    console.error("❌ MongoDB connection error:", err);
});