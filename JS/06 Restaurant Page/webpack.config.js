const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js", // A file path from the config file to whichever file is our entry point, which in this case is src/index.js
    // output: An object containing information about the output bundle.
    output: {
        filename: "main.js", // The name of the output bundle
        path: path.resolve(__dirname, "dist"), // The path to the output directory, in this case, dist. If this directory doesn’t already exist when we run Webpack, it will automatically create it for us as well.
        clean: true, // If we include this option and set it to true, then each time we run Webpack to bundle, it will empty the output directory first before bundling the files into it. This helps us keep dist clean, so it only contains the files produced by the most recent bundling.
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};