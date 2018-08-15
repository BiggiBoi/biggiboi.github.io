(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _orthodict_orthodict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orthodict/orthodict.component */ "./src/app/orthodict/orthodict.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routers = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'orthodict', component: _orthodict_orthodict_component__WEBPACK_IMPORTED_MODULE_3__["OrthodictComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routers)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\r\n    flex: 0 0 auto;\r\n}\r\n.content{\r\n    flex: 1 0 auto;\r\n}\r\nfooter>.mat-toolbar-row, .mat-toolbar-single-row{\r\n    height: 32px;\r\n}\r\n.footer-space{\r\n    flex: 1 1 auto;\r\n}\r\n.footer-text{\r\n    font: 500 15px/32px Roboto,\"Helvetica Neue\",sans-serif !important;\r\n}\r\n.app-title{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span class=\"app-title\" mat-button routerLink='/' routerLinkActive=\"active\">{{title}}</span>\n      <a mat-button routerLink='/orthodict' routerLinkActive=\"active\">Генератор ударений</a>\n    </mat-toolbar-row>\n</mat-toolbar>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"app-footer\">\n  <mat-toolbar color=\"primary\">\n    <span class=\"footer-space\"></span>\n    <span class=\"footer-text\">Первушин П.В.</span>\n  </mat-toolbar>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Генератор для начальной школы';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _orthodict_orthodict_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orthodict/orthodict.component */ "./src/app/orthodict/orthodict.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _orthodict_orthodict_component__WEBPACK_IMPORTED_MODULE_6__["OrthodictComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/orthodict/orthodict.component.css":
/*!***************************************************!*\
  !*** ./src/app/orthodict/orthodict.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orhodict-styled{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin: 8px;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n.column{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.orhodict-card{\r\n    margin: 10px;\r\n}\r\n.orcho-button{\r\n    margin: 5px;\r\n}\r\n.orcho-save{\r\n    margin: 6.5px !important;\r\n}"

/***/ }),

/***/ "./src/app/orthodict/orthodict.component.html":
/*!****************************************************!*\
  !*** ./src/app/orthodict/orthodict.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='orhodict-styled'>\n  <mat-card class=\"orhodict-card\">\n    <mat-card-title>Класс</mat-card-title>\n    <mat-card-content>\n      <mat-form-field>\n        <mat-select [(value)]=\"SelectClass\">\n          <mat-option value=\"1\">1 класс</mat-option>\n          <mat-option value=\"2\">2 класс</mat-option>\n          <mat-option value=\"3\">3 класс</mat-option>\n          <mat-option value=\"4\">4 класс</mat-option>\n          <mat-option value=\"5\">Все классы</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-stroked-button color=\"primary\" class=\"orcho-button\" (click)='edit()'>Изменить</button>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"orhodict-card\">\n    <mat-card-title>Количество слов</mat-card-title>\n    <mat-card-content>\n      <mat-form-field>\n        <mat-select [(value)]=\"SelectAmountWords\">\n            <mat-option value=\"15\">15 слов</mat-option>\n            <mat-option value=\"30\">30 слов</mat-option>\n            <mat-option value=\"50\">50 слов</mat-option>\n            <mat-option value=\"100\">100 слов</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-stroked-button color=\"primary\" class=\"orcho-button\" (click)='edit()'>Изменить</button>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"orhodict-card\">\n    <mat-card-title>Готовое задание</mat-card-title>\n      <mat-card-content>\n        <div class=\"orcho-save\">\n        <button mat-stroked-button color=\"primary\" class=\"orcho-button\">Скачать</button>\n        <button mat-stroked-button color=\"primary\" class=\"orcho-button\">Распечать</button>\n        <button mat-stroked-button color=\"primary\" class=\"orcho-button\" (click)='resetForm()'>Сбросить</button>\n        </div>\n      </mat-card-content>\n  </mat-card>\n</div>\n<div *ngIf='editable' class='orhodict-styled'>\n  <mat-card class=\"orhodict-card\">\n    <mat-card-title>Для детей</mat-card-title>\n    <mat-card-content>\n      <ul *ngFor='let dat of wordsForPupil'>\n        <li>{{dat}}</li>\n      </ul>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"orhodict-card\">\n    <mat-card-title>Для родителей</mat-card-title>\n    <mat-card-content>\n      <ul *ngFor='let d of wordsForParent'>\n        <li>{{d}}</li>\n      </ul>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/orthodict/orthodict.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orthodict/orthodict.component.ts ***!
  \**************************************************/
/*! exports provided: OrthodictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrthodictComponent", function() { return OrthodictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orthodict_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orthodict.service */ "./src/app/orthodict/orthodict.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrthodictComponent = /** @class */ (function () {
    function OrthodictComponent(orthodictService) {
        this.orthodictService = orthodictService;
        this.SelectClass = '5';
        this.SelectAmountWords = '15';
        this.editable = false;
        this.wordsForParent = [];
        this.wordsForPupil = [];
        this.finishWords = [];
    }
    OrthodictComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orthodictService.getDict()
            .subscribe(function (data) { return _this.DictionaryWords = {
            class_1: data['class_1'],
            class_2: data['class_2'],
            class_3: data['class_3'],
            class_4: data['class_4']
        }; }, function (error) { return console.log(error); });
    };
    OrthodictComponent.prototype.edit = function () {
        this.editable = true;
        this.wordsForParent = [];
        if (this.SelectClass == '1') {
            this.wordsForParent = this.DictionaryWords.class_1;
        }
        else if (this.SelectClass == '2') {
            this.wordsForParent = this.DictionaryWords.class_2;
        }
        else if (this.SelectClass == '3') {
            this.wordsForParent = this.DictionaryWords.class_3;
        }
        else if (this.SelectClass == '4') {
            this.wordsForParent = this.DictionaryWords.class_4;
        }
        else if (this.SelectClass == '5') {
            this.wordsForParent.push.apply(this.wordsForParent, this.DictionaryWords.class_1);
            this.wordsForParent.push.apply(this.wordsForParent, this.DictionaryWords.class_2);
            this.wordsForParent.push.apply(this.wordsForParent, this.DictionaryWords.class_3);
            this.wordsForParent.push.apply(this.wordsForParent, this.DictionaryWords.class_4);
        }
        if (this.SelectAmountWords == '15') {
            this.wordsForParent = this._generateAmountWords(this.wordsForParent, 15);
            this.wordsForPupil = this._deleteAccentuation(this.wordsForParent);
        }
        if (this.SelectAmountWords == '30') {
            this.wordsForParent = this._generateAmountWords(this.wordsForParent, 30);
            this.wordsForPupil = this._deleteAccentuation(this.wordsForParent);
        }
        if (this.SelectAmountWords == '50') {
            this.wordsForParent = this._generateAmountWords(this.wordsForParent, 50);
            this.wordsForPupil = this._deleteAccentuation(this.wordsForParent);
        }
        if (this.SelectAmountWords == '100') {
            this.wordsForParent = this._generateAmountWords(this.wordsForParent, 100);
            this.wordsForPupil = this._deleteAccentuation(this.wordsForParent);
        }
    };
    OrthodictComponent.prototype.resetForm = function () {
        this.wordsForParent = [];
        this.wordsForPupil = [];
        this.editable = false;
    };
    OrthodictComponent.prototype._deleteAccentuation = function (words) {
        var ar = [];
        var st;
        var wordsPupil = [];
        for (var i = 0; i < words.length; i++) {
            for (var j = 0; j < words[i].length; j++) {
                ar.push(words[i].charCodeAt(j));
            }
            if (ar.indexOf(769) != -1) {
                ar.splice(ar.indexOf(769), 1);
            }
            for (var a = 0; a < ar.length; a++) {
                ar.splice(a, 1, String.fromCharCode(ar[a]));
            }
            st = ar.join('');
            wordsPupil.splice(i, 1, st);
            ar = [];
            st = '';
        }
        return wordsPupil;
    };
    OrthodictComponent.prototype._generateAmountWords = function (loadWords, amount) {
        var _loadWords = [];
        if (amount < loadWords.length) {
            for (var i = 0; i < amount; i++) {
                var ins = 99999;
                while (ins > loadWords.length - 1) {
                    ins = Math.floor(Math.random() * (loadWords.length + 1));
                }
                if (_loadWords.length > 0) {
                    var sovpadeniya = void 0;
                    for (var j = 0; j < _loadWords.length; j++) {
                        if (_loadWords[j] == loadWords[ins]) {
                            sovpadeniya = true;
                            i--;
                        }
                    }
                    if (!sovpadeniya) {
                        _loadWords.push(loadWords[ins]);
                    }
                }
                else {
                    _loadWords.push(loadWords[ins]);
                }
            }
        }
        else {
            _loadWords = loadWords;
        }
        return _loadWords;
    };
    OrthodictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orthodict',
            template: __webpack_require__(/*! ./orthodict.component.html */ "./src/app/orthodict/orthodict.component.html"),
            styles: [__webpack_require__(/*! ./orthodict.component.css */ "./src/app/orthodict/orthodict.component.css")],
            providers: [_orthodict_service__WEBPACK_IMPORTED_MODULE_1__["OrthodictService"]]
        }),
        __metadata("design:paramtypes", [_orthodict_service__WEBPACK_IMPORTED_MODULE_1__["OrthodictService"]])
    ], OrthodictComponent);
    return OrthodictComponent;
}());



/***/ }),

/***/ "./src/app/orthodict/orthodict.service.ts":
/*!************************************************!*\
  !*** ./src/app/orthodict/orthodict.service.ts ***!
  \************************************************/
/*! exports provided: OrthodictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrthodictService", function() { return OrthodictService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrthodictService = /** @class */ (function () {
    function OrthodictService(http) {
        this.http = http;
        this.Json_URL = './assets/words.json';
    }
    OrthodictService.prototype.getDict = function () {
        return this.http.get(this.Json_URL);
    };
    OrthodictService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrthodictService);
    return OrthodictService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\biggiboi\OrthoDict\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map