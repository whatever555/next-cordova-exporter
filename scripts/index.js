#! /usr/bin/env node
var shell = require("shelljs");
var mkdirp = require("mkdirp");

var getDirName = require("path").dirname;

//shell.exec("yarn build");
//shell.exec("yarn export");

var fs = require("fs");
var newCordobaJsFile;
fs.readFile("out/index.html", function(err, buf) {
  var myString = buf.toString();
  var myRegexp = /href=\"\/\_next.*?\"/g;
  var match = myRegexp.exec(myString);

  var nextJsDump = "";
  while (match != null) {
    const jsFilePath = match[0]
      .replace('href="/', "")
      .replace('"', "")
      .replace("_", "out/_");
    nextJsDump += fs.readFileSync(jsFilePath).toString();
    match = myRegexp.exec(myString);
  }

  newCordobaJsFile = fs
    .readFileSync(
      "./node_modules/next-cordova-exporter/templates/cordova/index.js"
    )
    .toString()
    .replace("---NEXT_JS---", nextJsDump);

  writeFile("www/js/index.js", newCordobaJsFile, function(err) {
    if (err) throw err;
    console.log("Saved new js!");
  });
});

function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function(err) {
    if (err) return cb(err);

    fs.writeFile(path, contents, cb);
  });
}
