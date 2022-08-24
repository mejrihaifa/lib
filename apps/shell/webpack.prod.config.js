module.exports = require('./webpack.config');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// module.exports = {
//   mode: 'production',
//   plugins: [
//     new ModuleFederationPlugin(
//       {
//         name: 'shell',
//         filename:
//           'remoteEntry.js',
//         exposes: {
//           './Component': './apps/shell/src/app/app.component.ts',
//         },
//         remotes: {
//           'mfe1': "mfe1@https://master.dyxtvwg8nguhc.amplifyapp.com"
//         },
//       }
//     ),
//   ],
//
// };
