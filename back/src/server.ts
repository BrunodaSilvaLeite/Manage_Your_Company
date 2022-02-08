import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors"
import express,{Request, Response, NextFunction} from "express";
import cors  from "cors"
import {router} from "./routes";

const app = express();

app.use(express.json());
app.use(cors())
app.use(router);

app.use((err:Error, request:Request, response:Response, nextFunction:NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen('3000', ()=>{console.log('listening on 3000');});

