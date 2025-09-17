try {
    const result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("Error", error.message);    
}finally{
    console.log("Cleanup code runs no matter what");
}

function errorHandler(err, req, res, next){
    console.log(err.stack);
    res.status(500).json({message:err.message})
}

app.use(errorHandler);