// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCVwtADF2BlEhklNgYn5aTW30SugYsa9zk",
    authDomain: "todolistapp-a9a20.firebaseapp.com",
    databaseURL: "https://todolistapp-a9a20.firebaseio.com",
    projectId: "todolistapp-a9a20",
    storageBucket: "todolistapp-a9a20.appspot.com",
    messagingSenderId: "708108693264"
  }
};
