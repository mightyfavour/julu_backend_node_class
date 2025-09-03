// http methods:
// (1)GET method
app.get('/about', (req, res) =>{
    res.send('About Page');
});

//(1b)Get method with param
app.get('/about', (req, res) =>{
    res.send(`User ID: ${req.params.id}`);
});

//(2)POST method
app.post('/Submit', (req, res) => {
    res.send('Form submitted successfully');
});