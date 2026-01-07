import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'coreApp',
  exposes: {
    './Routes': 'apps/core/coreApp/src/app/remote-entry/entry.routes.ts',
  },
  remotes: [
    'GeneralApp',
    //anotherApp: 'http://localhost:4201/remoteEntry.js',
  ],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
