const path = require("path");

module.exports = {
    mode: "production",

    devServer: {
        port: 8081,
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },

    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

};
