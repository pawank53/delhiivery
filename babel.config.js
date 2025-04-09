// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [["babel-preset-expo", {
//       jsxImportSource: "nativewind"
//     }], "nativewind/babel"],

//     plugins: [["module-resolver", {
//       root: ["./"],

//       alias: {
//         "@": "./",
//         "tailwind.config": "./tailwind.config.js"
//       }
//     }]]
//   };
// };
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
  
};
