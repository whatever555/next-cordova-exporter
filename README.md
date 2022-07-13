# NextJs Cordova exporter
Use this package if you want to run a nextjs project in cordova  

#Requirements  

[NextJs](https://www.npmjs.com/package/next)  
[Cordova](https://www.npmjs.com/package/cordova)

You will need Cordova installed as a global package  
e.g: `npm i -g cordova`


# Steps required  
Install cordova: (`npm -g cordova` or `yarn global add cordova`)  
Install this package (`npm install next-cordova-exporter` or `yarn add next-cordova-exporter`)  

Add the following scripts to your `package.json` file:  
```
  "scripts": {
    "export": "next build && next export",
    "export-cordova": "next-cordova-export",
    "cordova-run": "cordova run android/browser/ios",
    ...
  },
```

Export your nextjs project (`npm run export`)  
Run the command (in your terminal) `npm run export-cordova` in the root folder of your project

run `npm run cordova-run`


# TODO  
Images and css may not yet work  
Currrenly ignores cordova config.

