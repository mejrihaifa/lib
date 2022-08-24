
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  ['@demo/auth-lib'] );

module.exports = {
  output: {
    //publicPath: "http://localhost:5000/",
    //publicPath: "https://master.d1eedh4gstvimd.amplifyapp.com/",
    publicPath: "auto",
    uniqueName: "shell",
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      //******************************
      //
       name: "shell",
       filename: "remoteEntry.js",
       exposes: {
         './Component': './apps/shell/src/app/app.component.ts',
       },
      //******************************
      //  For hosts (please adjust)
      //   remotes: {
      //  'mfe1': "mfe1@https://master.dyxtvwg8nguhc.amplifyapp.com"
      //  },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
