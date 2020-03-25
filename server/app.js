import path from "path";
import app from "./config/express";
import routes from "./routes/index.route";
import * as errorHandler from "./middlewares/errorHandler";

// enable webpack hot module replacement in development mode
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack/webpack.config.dev";

if (process.env.NODE_ENV === "development") {
  console.log("App running in development mode!");
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

// Router
app.use("/", routes);

// Landing page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

// const Server = require('socket.io');
// const io = new Server(9000);

var http = require("http").Server(app);
var io = require("socket.io")(http);



//console.log(http + "========" + io);

io.on("connect", function(socket) {
  console.log("Socket " + socket.id + " CONNECTED");
  socket.on("data", function(data) {
    console.log("weapon detected");
    var dataArr = [];
    //console.log(data.weapon);
    for (var i in data) {
      this[i] = data[i].split("._____.");
    }
    for (var j = 0; j < this.weapon.length; j++) {
      dataArr[j] = {
        weapon: this.weapon[j],
        percentage: this.percentage[j],
        img: this.img[j]
      };
    }
    io.emit("dataAA", dataArr);
  });



  // to receive stream from camera client
  socket.on("stream", function(data){
    //socket.broadcast.emit("streams", data);
    io.sockets.emit("streams", data);
    //console.log(data);
  })



  socket.on("close", function(data) {
    console.log(data);
    io.emit("response", data);
  });
  socket.on("passcmd", function(data) {
    io.emit("cmd", data);
    console.log(data);
  });
  socket.on("disconnect", function() {
    console.log(socket.id + " DISCONNECT");
  });
});

// app.listen(app.get('port'), app.get('host'), () => {
//     console.log('server running');
// })
http.listen(app.get("port"), app.get("host"), () => {
  console.log(
    "SERVER RUNNING AT " + process.env.APP_HOST + ":" + process.env.APP_PORT
  );
});

export default app;
