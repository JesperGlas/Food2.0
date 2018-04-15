webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    width: 1200px;\n    padding: 20px;\n    font-size: 18px;\n}\n\ntd {\n    padding-right: 15px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar area -->\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>\n      <h1>{{ title }}</h1>\n    </span>\n    <span class=\"fill-remaining-space\"></span>\n    <span>\n    <button mat-icon-button (click)='filter_toggle=!filter_toggle'>\n        <i class=\"material-icons\">filter_list</i>\n      </button>\n      <button mat-icon-button (click)='randomRecipie()'>\n        <i class=\"fas fa-random\"></i>\n      </button>\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div fxLayout=\"row\" fxLayoutAlign.gt-sm=\"center\">\n  <div fxLayout=\"column\" class=\"wrapper\">\n    <!-- Filter Sections -->\n    <div *ngIf=\"filter_toggle\">\n      <h2>Filter</h2>\n      <div>\n        <mat-button-toggle *ngFor=\"let item of ingridients_list; let i = index\" (click)=toggleIngridient(i)>\n          {{ item.name }}\n        </mat-button-toggle>\n      </div>\n    </div>\n\n    <!-- Recipie section -->\n    <h2>{{ recipie_list[current_index].name }}</h2>\n    <div fxFlex>\n      <p>\n        Recipie #{{ current_index+1 }}\n        <br>\n        {{ recipie_list[current_index].port }} port\n        <br><br>\n        {{ recipie_list[current_index].desc }}\n      </p>\n    </div>\n\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex>\n        <h3 fxHide.md fxHide.lt-md>Ingridienser</h3>\n        <button mat-button fxHide.gt-md (click)='ingr_toggle=!ingr_toggle'>\n          <h3>Ingridienser</h3>\n        </button>\n        <table *ngIf=\"ingr_toggle\">\n          <tr *ngFor=\"let item of recipie_list[current_index].ingredients\">\n            <td style=\"text-align: left\">\n              {{ item[0] }} {{ item[1] }}\n            </td>\n          <td>\n            {{ item[2] }}\n          </td>\n        </tr>\n      </table>\n    </div>\n\n    <div fxFlex>\n      <h3 fxHide.md fxHide.lt-md>Metod</h3>\n      <button mat-button fxHide.gt-md (click)='method_toggle=!method_toggle'>\n        <h3>Metod</h3>\n      </button>\n      <table *ngIf=\"method_toggle\">\n        <tr *ngFor=\"let item of recipie_list[current_index].method; let i = index\">\n          <td>\n            {{ i+1 }}.\n          </td>\n          <td>\n            <p>\n              {{ item }}\n            </p>  \n          </td>\n        </tr>\n      </table>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_fetch_json_service__ = __webpack_require__("./src/app/shared/fetch-json.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    /*
    Functions
    ####################################################################################################
    */
    /* The consturctor fetches the recipies from the recipie.JSON using the fetchJSONService. It stores it in the recipe_list variable */
    function AppComponent(fetchJSONService) {
        var _this = this;
        this.fetchJSONService = fetchJSONService;
        /*
      Variables
      ####################################################################################################
      */
        /* Title of the site */
        this.title = 'MatInspo';
        /* URL Variables */
        this.recipies_url = "assets/files/recipies.json";
        this.ingridients_url = "assets/files/ingridients.json";
        /* Variable that determines which recipie is currently showing */
        this.current_index = 5;
        this.toggledIngridientsList = [];
        /* Toggle Variables */
        this.filter_toggle = true;
        this.ingr_toggle = true;
        this.method_toggle = true;
        // Fetches the recipies
        this.fetchJSONService.getPosts(this.recipies_url)
            .subscribe(function (data) {
            _this.recipie_list = data;
            console.log(data);
        }, function (error) { return console.log(error); });
        // Fetches the Ingridients
        this.fetchJSONService.getPosts(this.ingridients_url)
            .subscribe(function (data) {
            _this.ingridients_list = data;
            console.log(data);
        }, function (error) { return console.log(error); });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    /* Function which returns a random number between max and min variables */
    AppComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /* Function which sets the current_index to a random number within the allowed scope and different from previous current_index */
    AppComponent.prototype.randomRecipie = function () {
        var temp_number = this.current_index;
        // The function makes sure that it's not the same recipie as the current one
        while (temp_number == this.current_index) {
            temp_number = this.getRandomInt(0, this.recipie_list.length - 1);
        }
        this.current_index = temp_number;
    };
    AppComponent.prototype.toggleIngridient = function (index) {
        var duplicate = false;
        for (var i = 0; i < this.toggledIngridientsList.length; i++) {
            if (index = this.toggledIngridientsList[i]) {
                duplicate = true;
                console.log('Index ' + index + ' was already in list, nothing added');
            }
        }
        if (duplicate == false) {
            this.toggledIngridientsList.push(index);
            console.log('Index ' + index + ' was not in list and is now added');
        }
        return duplicate;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_fetch_json_service__["a" /* FetchJsonService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_fetch_json_service__ = __webpack_require__("./src/app/shared/fetch-json.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* Materials imports */



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonToggleModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__shared_fetch_json_service__["a" /* FetchJsonService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/fetch-json.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchJsonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchJsonService = /** @class */ (function () {
    function FetchJsonService(_http) {
        this._http = _http;
    }
    FetchJsonService.prototype.getPosts = function (url) {
        return this._http.get(url)
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    FetchJsonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FetchJsonService);
    return FetchJsonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map