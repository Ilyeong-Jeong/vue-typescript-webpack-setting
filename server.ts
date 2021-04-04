import * as path    from "path";
import * as express from "express";

const app: express.Application = express();

const port: number = Number(process.env.PORT) || 3000; 

app.use('/', express.static(__dirname + '/dist'));

app.get('*', function (request, response, next){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(port, () => {
  console.log(`server started on port at http://localhost:${port}`)
});
