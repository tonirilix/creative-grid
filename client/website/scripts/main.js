/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var loader = __webpack_require__(12);
	
	function progressCb(e) {
	    var p = Math.round(100 * e.progress);
	
	    // show progress in loader
	    $('.loader').text(p + '%');
	}
	
	function completeCb() {
	    // hide loader
	    $('.loader').hide();
	
	    // run app
	    angular.bootstrap(document, ['mApp']);
	}
	
	/* bootstrap application */
	angular.element(document).ready(function () {
	    if (window.app.incompatible.isIncompatibleBrowser()) {
	        return;
	    }
	
	    // show loader
	    $('.loader').text('0%').show();
	
	    // start loader
	    loader.setProgressCb(progressCb);
	    loader.setCompleteCb(completeCb);
	    loader.createLoader();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(17);
	__webpack_require__(19);
	
	var Canvas = __webpack_require__(21);
	
	/* register main app */
	angular.module('mApp', ['ngTouch', 'ngSanitize', 'ui.router', 'mAnimations', 'mCtrls'])
	    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {
	        $stateProvider
	            .state('home', {
	                url: '/',
	                templateUrl: 'tpls/views/home.html',
	                controller: 'MyCtrl'
	            })
	            .state('page1', {
	                url: '/page1',
	                templateUrl: 'tpls/views/page1.html',
	                controller: 'MyCtrl'
	            })
	            .state('page1.detail', {
	                url: '/detail',
	                templateUrl: 'tpls/views/detail.html',
	                controller: 'DetailCtrl'
	            });
	
	        $urlRouterProvider.otherwise('/');
	
	        $locationProvider.html5Mode(true);
	    }])
	    .run(function () {
	        new Canvas('canvas-elem');
	    });


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var load = __webpack_require__(3);
	
	load.keys().forEach(load);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./routerAnimation.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);
	
	angular.module('mAnimations').animation('.view-change-animate', function () {
	    return {
	        enter: function (element, done) {
	            TweenMax.set(element, { autoAlpha: 0 });
	            TweenMax.to(element, 1, { autoAlpha: 1, onComplete: done });
	            /*
	            return function (isCancelled) {
	                if (isCancelled) {
	                    element.remove();
	                }
	            };
	            */
	        }
	        /*
	        ,
	        leave: function (element, done) {
	            TweenMax.set(element, { autoAlpha: 1 });
	            TweenMax.to(element, 0.5, { autoAlpha: 0, onComplete: done });
	
	            return function (isCancelled) {
	                if (isCancelled) {
	                    element.remove();
	                }
	            };
	        }
	        */
	    };
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Create animations module
	 */
	
	angular.module('mAnimations', ['ngAnimate']);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var load = __webpack_require__(7);
	
	load.keys().forEach(load);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./DetailCtrl.js": 8,
		"./MyCtrl.js": 10,
		"./RootCtrl.js": 11
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 7;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);
	
	angular.module('mCtrls').controller('DetailCtrl', ["$scope", function ($scope) {
	
	}]);


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Create controllers module
	 */
	
	angular.module('mCtrls', []);


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);
	
	angular.module('mCtrls').controller('MyCtrl', function () {
	    // ga('send', 'pageview', { 'page': $window.location.pathname });
	});


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(9);
	
	var log = window.debug('Ctrls'),
	    loader = __webpack_require__(12);
	
	angular.module('mCtrls').controller('RootCtrl', ["$scope", function ($scope) {
	    log('ahoj');
	    $scope.test = 'ahoj';
	    console.log(loader.getLoader().getResult('app-data'));
	}]);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var loaderData = __webpack_require__(13);
	
	var loader = (function () {
	    var _progressCb,
	        _completeCb,
	        _loader;
	
	    var setProgressCb = function (cb) {
	        _progressCb = cb;
	    };
	
	    var setCompleteCb = function (cb) {
	        _completeCb = cb;
	    };
	
	    var createLoader = function () {
	        _loader = new createjs.LoadQueue(true);
	
	        createjs.Sound.alternateExtensions = ['mp3'];
	        _loader.installPlugin(createjs.Sound);
	
	        _loader.addEventListener('progress', _progressCb);
	        _loader.addEventListener('complete', _completeCb);
	
	        _loader.loadManifest(loaderData);
	    };
	
	    var getLoader = function () {
	        return _loader;
	    };
	
	    // create spy for tests
	    var createSpyLoader = function (value) {
	        _loader = {
	            getResult: function () { return value; }
	        };
	    };
	
	    return {
	        setProgressCb: setProgressCb,
	        setCompleteCb: setCompleteCb,
	        createLoader:  createLoader,
	        getLoader: getLoader,
	        createSpyLoader: createSpyLoader
	    };
	})();
	
	module.exports = loader;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dataCommon   = __webpack_require__(14),
	    dataNoRetina = __webpack_require__(15),
	    dataRetina   = __webpack_require__(16),
	    isRetina     = window.devicePixelRatio > 1,
	    data;
	
	if (isRetina) {
	    data = dataCommon.concat(dataRetina);
	    data.push({ id: 'assets-css', src: 'css/assets/assets-retina.css' });
	} else {
	    data = dataCommon.concat(dataNoRetina);
	    data.push({ id: 'assets-css', src: 'css/assets/assets-no-retina.css' });
	}
	
	module.exports = data;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "app-data",
			"src": "data/data.json"
		}
	];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "plane",
			"src": "assets/images/plane.png"
		}
	];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": "plane",
			"src": "assets/images/plane@2x.png"
		}
	];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var load = __webpack_require__(18);
	
	load.keys().forEach(load);


/***/ },
/* 18 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 18;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var load = __webpack_require__(20);
	
	load.keys().forEach(load);


/***/ },
/* 20 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 20;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Plane = __webpack_require__(22);
	
	function Canvas(canvas) {
	    var scale = window.devicePixelRatio || 1,
	        canvasElement = document.getElementById(canvas);
	
	    this.width = window.innerWidth;
	    this.height = window.innerHeight;
	
	    canvasElement.style.width = this.width + 'px';
	    canvasElement.style.height = this.height + 'px';
	
	    this.container = new PIXI.Container();
	
	    this.renderer = new PIXI.autoDetectRenderer(this.width, this.height, {
	        view: canvasElement,
	        resolution: scale
	    });
	
	    this.renderer.backgroundColor = 0xFFFFFF;
	
	    this.createElements();
	
	    // register on resize callback
	    this.onResize();
	
	    // run animation
	    requestAnimationFrame(this.animate.bind(this));
	}
	
	Canvas.prototype.animate = function () {
	    requestAnimationFrame(this.animate.bind(this));
	    this.renderer.render(this.container);
	};
	
	Canvas.prototype.onResize = function () {
	    window.addEventListener('resize', function () {
	        // resize renderer
	        this.width = window.innerWidth;
	        this.height = window.innerHeight;
	
	        this.renderer.view.style.width = this.width + 'px';
	        this.renderer.view.style.height = this.height + 'px';
	
	        this.renderer.resize(this.width, this.height);
	
	        this.positionElementsOnResize();
	    }.bind(this));
	};
	
	Canvas.prototype.createElements = function () {
	    this.spritePlane = new Plane(this.renderer.resolution);
	    this.spritePlane.position.x = this.width / 2;
	    this.spritePlane.position.y = this.height / 2;
	
	    this.container.addChild(this.spritePlane);
	};
	
	Canvas.prototype.positionElementsOnResize = function () {
	    this.spritePlane.position.x = this.width / 2;
	    this.spritePlane.position.y = this.height / 2;
	};
	
	module.exports = Canvas;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var  loader = __webpack_require__(12);
	
	function Plane(resolution) {
	    var planeImg  = loader.getLoader().getResult('plane'),
	        planeBase = new PIXI.BaseTexture(planeImg),
	        planeTexture = new PIXI.Texture(planeBase),
	        scale = resolution > 1 ? 0.5 : 1;
	
	    PIXI.Sprite.call(this, planeTexture);
	
	    this.scale = new PIXI.Point(scale, scale);
	    this.anchor.x = 0.5;
	    this.anchor.y = 0.5;
	}
	
	Plane.prototype = Object.create(PIXI.Sprite.prototype);
	Plane.prototype.constructor = Plane;
	
	module.exports = Plane;


/***/ }
/******/ ]);
//# sourceMappingURL=maps/main.js.map