const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Form</title>
  </head>
  <body>
      <h3>This is a Form</h3>
      <form action="backend.php">
          <label for="name">Name :</label>
          <div>
              <input type="text" name="myName" id="name">
          </div>
          <br>
          <div>
              Roll:  <input type="text" name ="myRole">  
          </div>
          <br>
          <div>
              Email :<input type="email" name ="myEmail">
          </div>
          <br>
          <div>
              Date: <input type="date" name="date">
          </div>
          <br>
          <label for="car">Car</label>
          <div>
              <select name="mycar" id="car">
                  <option value = "ind">Indica</option>
                  <option value="swf">Swift</option>
              </select>
          </div>
          <br>
          <div>
              Gender : Male<input type="radio" name="gender"> Female <input type="Radio" name="gender">
          </div>
          <br>
          <div>
              Are you eligible : <input type="checkbox" value="eligible">
          </div>
          <br>
          <div>
              write abt yourself :<br> <textarea name="myText" cols="20" rows="4"></textarea>
          </div>
          <br>
          <div>
              <input type="submit" value="submit">
          </div>
          <br>
          <div>
              <input type="reset" value="reset">
          </div>
      </form>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});