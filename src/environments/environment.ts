// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
  	apiKey: "AIzaSyBAjevU-2STPazyVQE-KtWccVOt7VFO2dM",
    authDomain: "fs1prod-86030.firebaseapp.com",
    databaseURL: "https://fs1prod-86030.firebaseio.com",
    projectId: "fs1prod-86030",
    storageBucket: "fs1prod-86030.appspot.com",
    messagingSenderId: "943988290318"
  }
};
