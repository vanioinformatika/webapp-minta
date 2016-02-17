var path = require('path');

module.exports = {
  
    entry: "./src/main/resources/public/app/entry.js",
    output: {
        path: path.join(__dirname, '/target/classes/public/app'),
        filename: "app.bundle.js"
    },
    
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.html$/, loader: "html" }
        ]
    },
    
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/main/resources/public/scss")]
    }
  
};