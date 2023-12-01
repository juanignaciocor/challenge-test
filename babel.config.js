module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { modules: "commonjs", corejs: 3, loose: true, useBuiltIns: "usage" },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
