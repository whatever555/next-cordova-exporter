# NextJs Cordova exporter
Use this package if you want to run a nextjs project in cordova  

# Steps required  
Install cordova: (`npm install cordova` or `yarn add cordova`)  
Install this package (`npm install next-cordova-exporter` or `yarn add next-cordova-exporter`)  

Add the following scripts to your `package.json` file:  
```
  "scripts": {
    "export": "next build && next export",
    "export-cordova": "next-cordova-export",
    ...
  },
```

Build your nextjs project (`npm run build`)   
Export your nextjs project (`npm run export`)  
Run the command (in your terminal) `npm run export-cordova` in the root folder of your project

run `cordova run android/browser/ios`


# TODO  
Images and css may not yet work  
Currrenly ignores cordova config.

