module.exports = require('./webpack.config');
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;
//
// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.base.json'),
//   ['@demo/auth-lib']);
//
// module.exports = {
//   name : "mfe1",
//   output: {
//     uniqueName: "mfe1",
//     //publicPath: "http://localhost:3000/"
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       library: { type: "var", name: "mfe1" },
//       // For remotes (please adjust)
//       name: "mfe1",
//       filename: "remoteEntry.js",
//       exposes: {
//         './Component': './apps/mfe1/src/app/app.component.ts',
//         './Module': './apps/mfe1/src/app/flights/flights.module.ts',
//       },
//
//       // For hosts (please adjust)
//       remotes: {
//         "shell": "https://master.d1eedh4gstvimd.amplifyapp.com/remoteEntry.js",
//       },
//
//       shared: share({
//         "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true},
//         "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true},
//         "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true},
//         "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true},
//
//         ...sharedMappings.getDescriptors()
//       })
//     }),
//
//     sharedMappings.getPlugin()
//   ],
// };
