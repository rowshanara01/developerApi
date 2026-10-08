import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connect

async function main() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/Developers");
    console.log("database connect");
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (err) {
    console.log(`faild to connect ${err}`);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch((err) => console.log(err));
