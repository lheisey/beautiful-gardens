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

## Demo website ##

A Demo website of the Beautiful Gardens static website generator boilerplate is at https://lheisey.github.io/beautiful-gardens-site

## Changelog ##

### 1.1.4 ###

* Fixed favicon manifest files

### 1.1.3 ###

* Added favicons

### 1.1.2 ###

* Removed gallery .html pages and added gallery .hbs pages
* Implemented workaround for hbs extension issue
 * https://github.com/zurb/panini/issues/171

### 1.1.1 ###

* Change to show active for more than one index.html in navbar
* Copy gallery.html to index.html and delete gallery.html

### 1.1.0 ###

* Created partial for section-title block

### 1.0.5 ###

* Added gulp copy of github readme for website

### 1.0.4 ###

* Added default index page to resource directories

### 1.0.3 ###

* Moved tablesorter scss to separate file

### 1.0.2 ###

* Made Home page pictures links to galleries

### 1.0.1 ###

* Added Beautiful Gardens demo website link to readme

### 1.0.0 ###
* Renamed APP directory to beautifulgardenssite

### 0.1.10 ###
* Moved APP directory to different location

### 0.1.9 ###
* Changed some of text on About page

### 0.1.8 ###
* Changed some font sizes

### 0.1.7 ###
* Added content for Plant List page

### 0.1.6 ###
* Added picture caption content for gallery pages

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
