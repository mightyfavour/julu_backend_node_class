import express from "express";

export const startServer = ()=> {
    
    const httpServer = express();
    
    try{
        httpServer.listen(3000, ()=>{
            console.log(`Server running on port 3000............`);
        });
    }catch(err){
        throw new Error(err);
    }
}
    