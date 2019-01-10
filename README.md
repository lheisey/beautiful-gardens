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
* Choose Bootstrap CSS and JavaScript components to use in project
* Supports using certain CSS and JavaScript files only on specific pages
* Watch for file changes to recompile
* Live reload browser with BrowserSync
* Separate handling of images in picture gallery
* Responsive light gallery supporting touch and swipe navigation with jQuery lightgallery
* Cross-browser CSS animations with animate.css
* Table sorting with jquery.tablesorter.js (FORK)
* Scroll to top of page

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

### 0.1.5 ###
* Added content to Home page

### 0.1.4 ###
* Added default index page to sub directories
* Added return to gallery index link to gallery pages

### 0.1.3 ###
* Added alt tags to images

### 0.1.2 ###
* Changed Links page to two column layout
* Fixed double css class in navbar
* Fixed link to Home page for site logo
* Fixed missing div on Home page

### 0.1.1 ###
* Added scroll to top of page

### 0.1.0 ###
* Change CRLF line endings to LF

### 0.0.12 ###
* Updates to print styles

### 0.0.11 ###
* Removed unused Bootstrap CSS

### 0.0.10 ###
* Removed unused Bootstrap javascript

### 0.0.9 ###
* Changed image and font file handling to specific file extensions

### 0.0.8 ###
* Added Picture Galleries page information

### 0.0.7 ###
* Added table sorting

### 0.0.6 ###
* Added Plant List page

### 0.0.5 ###
* Added gallery pages.

### 0.0.4 ###
* Added links page text.

### 0.0.3 ###
* Added about page text and images.

### 0.0.2 ###
* Added LICENSE.txt and Github info to package.json.

### 0.0.1 ###
* Initial release.
