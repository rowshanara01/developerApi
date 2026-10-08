import cors from "cors";
import express, { Application } from "express";
import userRouter from "./Modules/user/user.route";

const app: Application = express();

// cors use
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
    step1: interface create 
    step2: schema create interface stracture flowing
    step3: model
    step4: database query on Model
  */
app.use("/api/v1/user", userRouter);

export default app;

// breakdown moduler pattern

/*

1. Interface           -> interface.ts   #step1
2. Schema , Model      -> service        #step2 and Step3


3.route
4.route function               -> controller.ts
5.database query function      -> service                #step4

*/
