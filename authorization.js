function isAdmin(req, res, next) {
    if(req.user && req.user.role === "admin") {
        next();
    }else{
        res.status(404).send("Access Denied")
    }
}