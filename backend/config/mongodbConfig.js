const mongoose = require("mongoose");

// const MONGODB_URI =
// process.env.NODE_ENV === "production"
// ? "  "
// : "mongodb://localhost:27017/esummit";

const MONGODB_URI =
	"  ";

const connectToMongoDB = () => {
	mongoose.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		autoCreate: true,
		useFindAndModify: false,
	});
	mongoose.connection.once("open", () => {
		console.log("MongoDB database connection established successfully");
	});
	mongoose.connection.on("error", (err) => {
		console.error(err);
		console.info("MongoDB connection error. Please make sure MongoDB is running.");
		process.exit();
	});
};

module.exports = {
	connectToMongoDB,
};
