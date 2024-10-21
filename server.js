const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images)
app.use('/photos', express.static(path.join(__dirname, 'photos')));
app.use('/banks', express.static(path.join(__dirname, 'banks')));
app.use('/', express.static(path.join(__dirname)));


// Routes for Navbar
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about us.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/emi-calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'emi calculator.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact us.html'));
});

app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, 'testimonials.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/apply-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'apply form.html'));
});

// Server listens on port 3000 (or any port you prefer)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
