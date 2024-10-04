const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to serve static files (HTML, CSS, etc.)
function serveFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(data);
            res.end();
        }
    });
}

// Create the server
const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        serveFile(path.join(__dirname, 'index.html'), 'text/html', res);
    } else if (req.url === '/styles.css') {
        serveFile(path.join(__dirname, 'styles.css'), 'text/css', res);
    } else if (req.url === '/Homepage.html') {
        serveFile(path.join(__dirname, 'Homepage.html'), 'text/html', res);
    } else if (req.url === '/userlog.html') {
        serveFile(path.join(__dirname, 'userlog.html'), 'text/html', res);
    } else if (req.url === '/admin-login.html') {
        serveFile(path.join(__dirname, 'admin-login.html'), 'text/html', res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
});

// Start the server on port 1100
server.listen(1100, () => {
    console.log('Server started at http://localhost:1100');
});
