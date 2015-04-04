# webpack-angular-bootstrap
webpack, angular, bootstrap

https://scotch.io/tutorials/angularjs-best-practices-directory-structure
https://medium.com/opinionated-angularjs/scalable-code-organization-in-angularjs-9f01b594bf06
https://github.com/toddmotto/angularjs-styleguide

```
app/
----- components/ // acts as reusable components or partials of our site
---------- uppernav/
--------------- upperNavDirective.js
--------------- upperNav.html
--------------- upperNav.less
---------- sideNav/
--------------- sideNavDirective.js
--------------- sideNav.html
--------------- upperNav.less
---------- discoveryChatterWidget/
--------------- discoveryChatterWidgetDirective.js
--------------- discoveryChatterWidget.html
--------------- discoveryChatterWidget.less
----- states/ // each state (dashboard) is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
--------------- homeView.less
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
--------------- blogView.less
----- app.module.js
----- app.routes.js
assets/ //this is the same as weblib
----- img/ // Images and icons for your app
----- js/ // JavaScript files written for our app that are not for angular
----- libs/ // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
```

Run `npm` start to begin webpack-dev-server

`http://localhost:3002`
