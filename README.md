# Beautiful Gardens #

A static website generator boilerplate.

## Description ##

The Beautiful Gardens static website generator boilerplate was developed for use on my innermind website. This can be used as a starting point for a static generated site or just serve as an example of how a site of this type can be done.

## Features ##

* Gulp.js task runner for automation
* Uses Bootstrap CSS framework
* Panini flat file generator for compiling HTML and layouts into HTML pages
* Templating using Handlebars
* SASS to CSS conversion
* CSS Autoprefixing
* Sitewide CSS and JavaScript output to single files
* CSS and JavaScript file minification
* Supports using certain CSS and JavaScript files only on specific pages
* Watch for file changes to recompile
* Live reload browser with BrowserSync

## How to use boilerplate ##

As a prerequisite node.js must be installed on the computer. Node.js installers can be found at https://nodejs.org and version 8 or later is recommended.

1. If gulp version 3 is installed globally on the computer it should be uninstalled. Linux users might need to use sudo depending on how the computer is set up.
```
npm uninstall -g gulp
```
2. Install Gulp-cli which supports both gulp version 3 and 4.
```
npm install -g gulp-cli
```
3. Download the zip from this GitHub repository, unzip it, rename the folder to what you want and move the folder to where you to use it.
4. Open a command prompt/terminal and cd to the folder. The gulp plugins and their dependencies first need to be installed.
```
npm install
```
After this is complete the gulp tasks can be run.
```
gulp build  //compiles and copies everything to the dist folder
gulp        //builds and runs BrowserSync
```

For the default gulp task a browser should open with the Beautiful Gardens site.

## Changelog ##

### 0.0.1 ###
* Initial release.
