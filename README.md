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
    "export-cordova": "next build && next export && next-cordova-export",
    ...
  },
```

Run the command (in your terminal) `npm run export-cordova` in the root folder of your project

Add cordova platforms for project:  
e.g:   
`cordova platform add browser`  
`cordova platform add android`  
`cordova platform add ios`  
  
The to run in the browser:  
run `cordova run browser`
For IOS
run `cordova run ios`
For Android 
run `cordova run android`

# Tidy up  
Be sure to hide the following folders from linters, tyescript, and git etc

Typescript:  
Add the following to your `.tsconfig` file:  
```
"exclude": ["out", "www", "platforms"],
```
Git:  
Add the following to your `.gitignore` file:  
```
**/platforms/*
**/out/*
**/www/*
```

Eslint:  
Add the following to your `.eslintignore` file:  
```
**/platforms/*
**/out/*
**/www/*
config.xml
```

# TODO  
Images and css may not yet work  
Currrenly ignores cordova config.

