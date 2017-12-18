webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: 'Titillium Web',sans-serif;\">\r\n  <h3>Monsters that can be added:</h3>\r\n  <div class=\"scrollable\">\r\n    <mat-spinner [style.display]=\"!showMonsters ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n    <mat-table [dataSource]=\"dataSourceMonsters\" *ngIf=\"showMonsters\">\r\n\r\n        <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"agility\">\r\n        <mat-header-cell *matHeaderCellDef> Agility </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.agility}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.weight}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"height\">\r\n        <mat-header-cell *matHeaderCellDef> Height </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.height}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"add\">\r\n        <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\">\r\n          <button mat-button color=\"warn\" (click)=\"addAppropriateMonster(monster.id)\">Add</button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns:displayedColumns ;\"></mat-row>\r\n\r\n    </mat-table>\r\n    <h4 *ngIf=\"monsterCandidates.length == 0\" >No monster can be added.</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMonstersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddMonstersComponent = (function () {
    function AddMonstersComponent(dialogRef, cookieService, router, givenWeapon, config, http) {
        this.dialogRef = dialogRef;
        this.cookieService = cookieService;
        this.router = router;
        this.givenWeapon = givenWeapon;
        this.config = config;
        this.http = http;
        this.displayedColumns = ['name', 'agility', 'weight', 'height', 'add'];
        this.monsterCandidates = [];
        this.cookie = false;
        this.empty = true;
        this.showMonsters = false;
        this.weapon = givenWeapon;
    }
    AddMonstersComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMonstersComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        this.loadData();
    };
    AddMonstersComponent.prototype.loadData = function () {
        var _this = this;
        this.showMonsters = false;
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/monsters/', { withCredentials: true }).subscribe(function (data) {
            _this.monsterCandidates = data;
            var alreadyAdded = _this.weapon.appropriateMonsters;
            _this.monsterCandidates = _this.monsterCandidates.filter(function (monster) {
                for (var _i = 0, alreadyAdded_1 = alreadyAdded; _i < alreadyAdded_1.length; _i++) {
                    var weaponMonster = alreadyAdded_1[_i];
                    if (monster.id == weaponMonster.id) {
                        return false;
                    }
                }
                return true;
            });
            console.log("Monsters size: " + _this.monsterCandidates.length);
            _this.dataSourceMonsters = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableDataSource */](_this.monsterCandidates);
            _this.empty = _this.monsterCandidates.length == 0;
            _this.showMonsters = true;
        });
    };
    AddMonstersComponent.prototype.addAppropriateMonster = function (monsterId) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/weapons/' + this.weapon.id + '/addAppropriateMonster?monsterId=' + monsterId, null, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            _this.filterAddedMonster(monsterId);
            _this.loadData();
        }, function (error) {
            console.log(error);
        });
    };
    AddMonstersComponent.prototype.filterAddedMonster = function (id) {
        for (var _i = 0, _a = this.monsterCandidates; _i < _a.length; _i++) {
            var monster = _a[_i];
            if (monster.id == id) {
                this.weapon.appropriateMonsters.push(monster);
            }
        }
        this.monsterCandidates = this.monsterCandidates
            .filter(function (monster) { return monster.id != id; });
    };
    AddMonstersComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    AddMonstersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-dialog',
            template: __webpack_require__("../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AddMonstersComponent);
    return AddMonstersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: 'Titillium Web',sans-serif;\">\r\n  <h3>Monsters that can be added:</h3>\r\n  <div class=\"scrollable\">\r\n    <mat-spinner [style.display]=\"!showMonsters ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n    <mat-table [dataSource]=\"dataSourceMonsters\" *ngIf=\"showMonsters\">\r\n\r\n        <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"agility\">\r\n        <mat-header-cell *matHeaderCellDef> Agility </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.agility}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.weight}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"height\">\r\n        <mat-header-cell *matHeaderCellDef> Height </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.height}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"add\">\r\n        <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\">\r\n          <button mat-button color=\"warn\" (click)=\"addMonsterToArea(monster.id)\">Add</button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns:displayedColumns ;\"></mat-row>\r\n\r\n    </mat-table>\r\n    <h4 *ngIf=\"monsterCandidates.length == 0\" >No monster can be added.</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMonstersToAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AddMonstersToAreaComponent = (function () {
    function AddMonstersToAreaComponent(dialogRef, cookieService, router, givenArea, config, http) {
        this.dialogRef = dialogRef;
        this.cookieService = cookieService;
        this.router = router;
        this.givenArea = givenArea;
        this.config = config;
        this.http = http;
        this.displayedColumns = ['name', 'agility', 'weight', 'height', 'add'];
        this.monsterCandidates = [];
        this.cookie = false;
        this.empty = true;
        this.showMonsters = false;
        this.area = givenArea;
    }
    AddMonstersToAreaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMonstersToAreaComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        this.loadData();
    };
    AddMonstersToAreaComponent.prototype.loadData = function () {
        var _this = this;
        this.showMonsters = false;
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/monsters/', { withCredentials: true }).subscribe(function (data) {
            _this.monsterCandidates = data;
            var alreadyAdded = _this.area.monsters;
            _this.monsterCandidates = _this.monsterCandidates.filter(function (monster) {
                for (var _i = 0, alreadyAdded_1 = alreadyAdded; _i < alreadyAdded_1.length; _i++) {
                    var areaMonster = alreadyAdded_1[_i];
                    if (monster.id == areaMonster.id) {
                        return false;
                    }
                }
                return true;
            });
            console.log("Monsters size: " + _this.monsterCandidates.length);
            _this.dataSourceMonsters = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableDataSource */](_this.monsterCandidates);
            _this.empty = _this.monsterCandidates.length == 0;
            _this.showMonsters = true;
        });
    };
    AddMonstersToAreaComponent.prototype.addMonsterToArea = function (monsterId) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/areas/' + this.area.id + '/addMonsterToArea?id=' + monsterId, null, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            _this.filterAddedMonster(monsterId);
            _this.loadData();
        }, function (error) {
            console.log(error);
        });
    };
    AddMonstersToAreaComponent.prototype.filterAddedMonster = function (id) {
        for (var _i = 0, _a = this.monsterCandidates; _i < _a.length; _i++) {
            var monster = _a[_i];
            if (monster.id == id) {
                this.area.monsters.push(monster);
            }
        }
        this.monsterCandidates = this.monsterCandidates
            .filter(function (monster) { return monster.id != id; });
    };
    AddMonstersToAreaComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    AddMonstersToAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-dialog',
            template: __webpack_require__("../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AddMonstersToAreaComponent);
    return AddMonstersToAreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONFIG_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

// Configuration values for our app
var CONFIG = {
    appName: 'Creatures hunting',
    apiEndpoint: 'http://localhost:8080'
};
var CONFIG_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('config');


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manager_home_home_component__ = __webpack_require__("../../../../../src/app/manager/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manager_monsters_monsters_component__ = __webpack_require__("../../../../../src/app/manager/monsters/monsters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manager_weapons_weapons_component__ = __webpack_require__("../../../../../src/app/manager/weapons/weapons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manager_monster_detail_monster_detail_component__ = __webpack_require__("../../../../../src/app/manager/monster-detail/monster-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manager_monster_create_monster_create_component__ = __webpack_require__("../../../../../src/app/manager/monster-create/monster-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manager_weapon_create_weapon_create_component__ = __webpack_require__("../../../../../src/app/manager/weapon-create/weapon-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manager_weapon_detail_weapon_detail_component__ = __webpack_require__("../../../../../src/app/manager/weapon-detail/weapon-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manager_users_users_component__ = __webpack_require__("../../../../../src/app/manager/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__error404_error404_component__ = __webpack_require__("../../../../../src/app/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manager_user_create_user_create_component__ = __webpack_require__("../../../../../src/app/manager/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manager_areas_areas_component__ = __webpack_require__("../../../../../src/app/manager/areas/areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manager_area_detail_area_detail_component__ = __webpack_require__("../../../../../src/app/manager/area-detail/area-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manager_area_create_area_create_component__ = __webpack_require__("../../../../../src/app/manager/area-create/area-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: 'pa165/login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__manager_manager_component__["a" /* ManagerComponent */],
        children: [
            {
                path: 'pa165',
                component: __WEBPACK_IMPORTED_MODULE_4__manager_home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'pa165/monsters',
                component: __WEBPACK_IMPORTED_MODULE_5__manager_monsters_monsters_component__["a" /* MonstersComponent */]
            },
            {
                path: 'pa165/monsters/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__manager_monster_detail_monster_detail_component__["a" /* MonsterDetailComponent */]
            },
            {
                path: 'pa165/create/monster',
                component: __WEBPACK_IMPORTED_MODULE_8__manager_monster_create_monster_create_component__["a" /* MonsterCreateComponent */]
            },
            {
                path: 'pa165/weapons',
                component: __WEBPACK_IMPORTED_MODULE_6__manager_weapons_weapons_component__["a" /* WeaponsComponent */]
            },
            {
                path: 'pa165/weapons/:id',
                component: __WEBPACK_IMPORTED_MODULE_10__manager_weapon_detail_weapon_detail_component__["a" /* WeaponDetailComponent */]
            },
            {
                path: 'pa165/create/weapon',
                component: __WEBPACK_IMPORTED_MODULE_9__manager_weapon_create_weapon_create_component__["a" /* WeaponCreateComponent */]
            },
            {
                path: 'pa165/users',
                component: __WEBPACK_IMPORTED_MODULE_11__manager_users_users_component__["a" /* UsersComponent */]
            },
            {
                path: 'pa165/create/user',
                component: __WEBPACK_IMPORTED_MODULE_13__manager_user_create_user_create_component__["a" /* UserCreateComponent */]
            },
            {
                path: 'pa165/areas',
                component: __WEBPACK_IMPORTED_MODULE_14__manager_areas_areas_component__["a" /* AreasComponent */]
            },
            {
                path: 'pa165/areas/:id',
                component: __WEBPACK_IMPORTED_MODULE_15__manager_area_detail_area_detail_component__["a" /* AreaDetailComponent */]
            },
            {
                path: 'pa165/create/area',
                component: __WEBPACK_IMPORTED_MODULE_16__manager_area_create_area_create_component__["a" /* AreaCreateComponent */]
            },
            {
                path: '**',
                redirectTo: '/404'
            }
        ]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_12__error404_error404_component__["a" /* Error404Component */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.main-card {\n  margin-top: 20px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin-left: 20%;\n  margin-right: 20%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Creatures hunting';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manager_home_home_component__ = __webpack_require__("../../../../../src/app/manager/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manager_monsters_monsters_component__ = __webpack_require__("../../../../../src/app/manager/monsters/monsters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manager_monster_detail_monster_detail_component__ = __webpack_require__("../../../../../src/app/manager/monster-detail/monster-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manager_weapons_weapons_component__ = __webpack_require__("../../../../../src/app/manager/weapons/weapons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manager_manager_component__ = __webpack_require__("../../../../../src/app/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manager_weapon_detail_weapon_detail_component__ = __webpack_require__("../../../../../src/app/manager/weapon-detail/weapon-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manager_users_users_component__ = __webpack_require__("../../../../../src/app/manager/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manager_weapon_create_weapon_create_component__ = __webpack_require__("../../../../../src/app/manager/weapon-create/weapon-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manager_monster_create_monster_create_component__ = __webpack_require__("../../../../../src/app/manager/monster-create/monster-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__error404_error404_component__ = __webpack_require__("../../../../../src/app/error404/error404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__manager_user_create_user_create_component__ = __webpack_require__("../../../../../src/app/manager/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__manager_area_create_area_create_component__ = __webpack_require__("../../../../../src/app/manager/area-create/area-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__manager_area_detail_area_detail_component__ = __webpack_require__("../../../../../src/app/manager/area-detail/area-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__manager_areas_areas_component__ = __webpack_require__("../../../../../src/app/manager/areas/areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_cookie_law__ = __webpack_require__("../../../../angular2-cookie-law/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_monsters_dialog_add_monsters_dialog_component__ = __webpack_require__("../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__error_interceptor__ = __webpack_require__("../../../../../src/app/error-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__add_monsters_to_area_dialog_add_monsters_to_area_dialog_component__ = __webpack_require__("../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__manager_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__manager_monsters_monsters_component__["a" /* MonstersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__manager_weapons_weapons_component__["a" /* WeaponsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__manager_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__manager_areas_areas_component__["a" /* AreasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__manager_monster_detail_monster_detail_component__["a" /* MonsterDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__manager_weapon_detail_weapon_detail_component__["a" /* WeaponDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_20__manager_area_detail_area_detail_component__["a" /* AreaDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__manager_weapon_create_weapon_create_component__["a" /* WeaponCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_16__manager_monster_create_monster_create_component__["a" /* MonsterCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_19__manager_area_create_area_create_component__["a" /* AreaCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_18__manager_user_create_user_create_component__["a" /* UserCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__manager_manager_component__["a" /* ManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__error404_error404_component__["a" /* Error404Component */],
                __WEBPACK_IMPORTED_MODULE_24__add_monsters_dialog_add_monsters_dialog_component__["a" /* AddMonstersComponent */],
                __WEBPACK_IMPORTED_MODULE_30__add_monsters_to_area_dialog_add_monsters_to_area_dialog_component__["a" /* AddMonstersToAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_23_angular2_cookie_law__["a" /* CookieLawModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material__["n" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["j" /* ReactiveFormsModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_24__add_monsters_dialog_add_monsters_dialog_component__["a" /* AddMonstersComponent */],
                __WEBPACK_IMPORTED_MODULE_28__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_30__add_monsters_to_area_dialog_add_monsters_to_area_dialog_component__["a" /* AddMonstersToAreaComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22_ngx_cookie_service__["a" /* CookieService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_27__app_config__["b" /* CONFIG_TOKEN */],
                    useValue: __WEBPACK_IMPORTED_MODULE_27__app_config__["a" /* CONFIG */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_29__error_interceptor__["a" /* ErrorInterceptor */],
                    multi: true,
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/error-dialog/error-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"font-family: 'Titillium Web',sans-serif;\">\r\n  <h3>Something went wrong:</h3>\r\n  <p style=\"color: red\" *ngFor=\"let message of messagesToShow\">\r\n    {{message}}\r\n  </p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/error-dialog/error-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-dialog/error-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorDialogComponent = (function () {
    function ErrorDialogComponent(messagesToShow) {
        this.messagesToShow = messagesToShow;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-dialog',
            template: __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Array])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ErrorInterceptor = (function () {
    function ErrorInterceptor(dialog) {
        this.dialog = dialog;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .catch(function (err) {
            var errors = [];
            if (typeof err.error === "string") {
                errors.push(JSON.parse(err.error).errors);
            }
            else {
                errors.push(err.error.errors);
            }
            if (errors == undefined || errors.length == 0) {
                errors.push(err.statusText);
            }
            if (err.status == 0) {
                errors.push("Server is not accessible.");
            }
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: errors,
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog closed");
            });
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/error404/error404.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row  role=\"heading\" class=\"\">\r\n    <span>Creatures hunting</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div class=\"centerWrapper\">\r\n  <div class=\"center\">\r\n    <a href=\"/\"><img src=\"../assets/res/404error.png\" alt=\"404_ERROR\" ></a>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"centerWrapper\">\r\n  <div class=\"center\">\r\n    <button mat-fab color=\"primary\" routerLink=\"/pa165\"><mat-icon>home</mat-icon> </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/error404/error404.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error404/error404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error404',
            template: __webpack_require__("../../../../../src/app/error404/error404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row  role=\"heading\" class=\"\">\r\n    <span>Creatures hunting</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\">\r\n\r\n  <div>\r\n    <div>\r\n      <mat-form-field class=\"login_form\">\r\n        <input matInput #email  placeholder=\"Email\" required>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field class=\"login_form\">\r\n        <input matInput #password  placeholder=\"Password\" [type]=\"'password'\" required>\r\n\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <button mat-raised-button color=\"primary\" (click)=\"login(email.value, password.value)\">Login</button>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  margin-top: 20px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin-left: 37%;\n  margin-right: 37%;\n  min-width: 150px; }\n\n.login_form {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LoginComponent = (function () {
    function LoginComponent(http, router, config) {
        this.http = http;
        this.router = router;
        this.config = config;
        this.logged = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth?email=' + email + '&password=' + password, null, { withCredentials: true }).subscribe(function (data) {
            console.log('Data: ' + data);
            _this.router.navigate(['/pa165']);
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], Object])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/area-create/area-create.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-card mat-elevation-z4\" >\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput #name  placeholder=\"Name\" required pattern=\"^[a-zA-Z]+$\" [formControl]=\"nameFormControl\">\r\n      <mat-error *ngIf=\"nameFormControl.hasError('pattern') && !nameFormControl.hasError('required')\">\r\n        This is not valid name!\r\n      </mat-error>\r\n      <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n        Name is required!\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Type\" [(value)]=\"areaType\">\r\n        <mat-option value=\"DISTRICT\">District</mat-option>\r\n        <mat-option value=\"MOUNTAINS\">Mountains</mat-option>\r\n        <mat-option value=\"DESERT\">Desert</mat-option>\r\n        <mat-option value=\"OTHER\">Other</mat-option>\r\n        <mat-option >Not selected</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/areas\">Back</button>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!nameFormControl.valid\"\r\n          (click)=\"createArea(name.value, areaType)\">Create</button>\r\n\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/area-create/area-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/area-create/area-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AreaCreateComponent = (function () {
    function AreaCreateComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.cookie = false;
    }
    AreaCreateComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.checkIfCookieExist();
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required,
        ]);
    };
    AreaCreateComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    AreaCreateComponent.prototype.createArea = function (name, areaType) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "name": name, "type": areaType };
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/areas/create', json, { withCredentials: true }).subscribe(function (data) {
            console.log("Updating area with name: " + name + ", type: " + areaType + "was successful.");
            _this.router.navigate(['/pa165/areas']);
        }, function (error) {
            console.log("Error during updating area with name: " + name + ", type: " + areaType + "was successful.");
        });
    };
    AreaCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-area-create',
            template: __webpack_require__("../../../../../src/app/manager/area-create/area-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/area-create/area-create.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialog */], Object])
    ], AreaCreateComponent);
    return AreaCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/area-detail/area-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!(showArea)  ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\" *ngIf=\"showArea\" >\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/areas\" class=\"backButton\">Back</button>\r\n\r\n  <div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #name  placeholder=\"Name\" value=\"{{area.name}}\" disabled=\"{{!isAdmin}}\" class=\"attribute\" pattern=\"^[a-zA-Z]+$\" [formControl]=\"nameFormControl\">\r\n        <mat-error *ngIf=\"nameFormControl.hasError('pattern') && !nameFormControl.hasError('required')\">\r\n          This is not valid name!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"nameFormControl.hasError('required') && nameFormControl.dirty\">\r\n          Name is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Type\" [(value)]=\"areaType\" disabled=\"{{!isAdmin}}\">\r\n          <mat-option value=\"DISTRICT\">District</mat-option>\r\n          <mat-option value=\"MOUNTAINS\">Mountains</mat-option>\r\n          <mat-option value=\"DESERT\">Desert</mat-option>\r\n          <mat-option value=\"OTHER\">Other</mat-option>\r\n          <mat-option >Not selected</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <button *ngIf=\"isAdmin\" mat-raised-button color=\"primary\" [disabled]=\"!nameFormControl.valid && nameFormControl.dirty\"\r\n            (click)=\"updateArea(name.value, areaType)\">Update</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"showMonsters()\">Add spotted monster</button>\r\n\r\n\r\n    <h4>Monsters spotted in this area:</h4>\r\n    <mat-table [dataSource]=\"dataSource\" >\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.id}} </mat-cell>\r\n      </ng-container>\r\n      <!--\r\n        <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"agility\">\r\n        <mat-header-cell *matHeaderCellDef> Agility </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.agility}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.weight}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"height\">\r\n        <mat-header-cell *matHeaderCellDef> Height </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.height}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"remove\">\r\n        <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\">\r\n          <button mat-button color=\"warn\" (click)=\"removeMonsterFromArea(monster.id)\">Remove</button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n  </div>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/area-detail/area-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 250px; }\n\n.backButton {\n  margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/area-detail/area-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_monsters_to_area_dialog_add_monsters_to_area_dialog_component__ = __webpack_require__("../../../../../src/app/add-monsters-to-area-dialog/add-monsters-to-area-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AreaDetailComponent = (function () {
    function AreaDetailComponent(http, route, cookieService, router, dialog, config) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.displayedColumns = ['id', 'name', 'agility', 'weight', 'height', 'remove'];
        this.showArea = false;
        this.monsters = [];
        this.isAdmin = false;
        this.cookie = false;
        this.route.params.subscribe(function (res) { return _this.areaId = res.id; });
    }
    AreaDetailComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.checkIsAdminCookie();
        this.loadData();
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["k" /* Validators */].required,
        ]);
    };
    AreaDetailComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    AreaDetailComponent.prototype.checkIsAdminCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.isAdmin = true;
            return;
        }
        this.isAdmin = false;
    };
    AreaDetailComponent.prototype.loadData = function () {
        var _this = this;
        this.showArea = false;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/areas/' + this.areaId, { withCredentials: true }).subscribe(function (data) {
            console.log('Area detail loaded:\n' + data);
            _this.area = data;
            _this.showArea = true;
            _this.areaType = data.type == null ? 'null' : data.type;
            _this.monsters = data.monsters;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatTableDataSource */](_this.monsters);
            _this.showArea = true;
        });
    };
    AreaDetailComponent.prototype.showMonsters = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_monsters_to_area_dialog_add_monsters_to_area_dialog_component__["a" /* AddMonstersToAreaComponent */], {
            width: '600px',
            data: this.area,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed");
            _this.loadData();
        });
    };
    AreaDetailComponent.prototype.removeMonsterFromArea = function (monsterId) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/areas/' + this.areaId + '/removeMonsterFromArea?id=' + monsterId, null, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Removing monster with id: " + monsterId + " from area with id: " + _this.areaId + "was successful.");
            _this.loadData();
        }, function (error) {
            console.log("Error during removing monster with id: " + monsterId + " from area with id: " + _this.areaId + "was successful.");
        });
    };
    AreaDetailComponent.prototype.updateArea = function (name, areaType) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "id": this.areaId, "name": name, "type": areaType };
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/areas/update', json, { withCredentials: true }).subscribe(function (data) {
            console.log("Updating area with name: " + name + ", type: " + areaType + "was successful.");
            _this.loadData();
        }, function (error) {
            console.log("Error during updating area with name: " + name + ", type: " + areaType + "was successful.");
        });
    };
    AreaDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-area-detail',
            template: __webpack_require__("../../../../../src/app/manager/area-detail/area-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/area-detail/area-detail.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */], Object])
    ], AreaDetailComponent);
    return AreaDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/areas/areas.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!showAreas ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\">\r\n  <h4>All areas</h4>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165\">Back</button>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/create/area\" *ngIf=\"isAdmin\">Create new area</button>\r\n  <mat-table #table [dataSource]=\"dataSource\" *ngIf=\"showAreas\">\r\n\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\"> {{area.id}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\"> {{area.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\"> {{area.type}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"detail\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\">\r\n        <button mat-button color=\"primary\" routerLink=\"{{area.id}}\">Detail</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"remove\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\">\r\n        <button mat-button color=\"warn\" (click)=\"removeArea(area.id)\">Remove</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/areas/areas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/areas/areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AreasComponent = (function () {
    function AreasComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.displayedColumns = ['id', 'name', 'type', 'detail', 'remove'];
        this.showAreas = false;
        this.areas = [];
        this.cookie = false;
        this.isAdmin = false;
    }
    AreasComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.checkIsAdminCookie();
        this.loadAreas();
    };
    AreasComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    AreasComponent.prototype.checkIsAdminCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.isAdmin = true;
            return;
        }
        this.displayedColumns = ['id', 'name', 'type', 'detail'];
        this.isAdmin = false;
    };
    AreasComponent.prototype.loadAreas = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/areas/', { withCredentials: true }).subscribe(function (data) {
            _this.areas = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableDataSource */](_this.areas);
            console.log('Areas loaded:\n' + data);
            _this.showAreas = true;
        }, function (error) {
            console.log("Error during loading areas.\n" + error);
        });
    };
    AreasComponent.prototype.removeArea = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.delete(this.config.apiEndpoint + '/pa165/rest/auth/areas/' + id, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            _this.loadAreas();
            console.log("Removing area with id: " + id + " was successful.");
        }, function (error) {
            console.log("Error during removing area with id: " + id + ".");
        });
    };
    AreasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-areas',
            template: __webpack_require__("../../../../../src/app/manager/areas/areas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/areas/areas.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], Object])
    ], AreasComponent);
    return AreasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!(showMonsters || showWeapons || showAreas) ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\">\r\n\r\n  <h3>The most widespread monsters:</h3>\r\n  <h5 class=\"note\">(Monsters that are located in most areas)</h5>\r\n\r\n  <mat-table #table [dataSource]=\"dataMonsters\" *ngIf=\"showMonsters\">\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.id}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"agility\">\r\n      <mat-header-cell *matHeaderCellDef> Agility </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.agility}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"height\">\r\n      <mat-header-cell *matHeaderCellDef> Height </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.height}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.weight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"columnsMonsters\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: columnsMonsters;\"></mat-row>\r\n  </mat-table>\r\n\r\n\r\n  <h3>The most effective weapons:</h3>\r\n  <h5 class=\"note\">(Weapons that are effective against most monsters)</h5>\r\n\r\n  <mat-table #table [dataSource]=\"dataWeapons\" *ngIf=\"showWeapons\">\r\n\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.id}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.type}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"range\">\r\n      <mat-header-cell *matHeaderCellDef> Range </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.range}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"magazineCapacity\">\r\n      <mat-header-cell *matHeaderCellDef> Magazine Capacity </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.magazineCapacity}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"columnsWeapons\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: columnsWeapons;\"></mat-row>\r\n  </mat-table>\r\n\r\n  <h3>The most dangerous areas:</h3>\r\n  <h5 class=\"note\">(Areas with the biggest number of seen monsters)</h5>\r\n\r\n  <mat-table #table [dataSource]=\"dataAreas\" *ngIf=\"showAreas\">\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\"> {{area.id}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\"> {{area.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let area\"> {{area.type}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"columnsAreas\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: columnsAreas;\"></mat-row>\r\n  </mat-table>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-button {\n  width: 80%;\n  height: 40%; }\n\n.mat-elevation-z4 {\n  min-width: 500px; }\n\n.note {\n  color: gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HomeComponent = (function () {
    function HomeComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.mostEffectiveWeapons = [];
        this.mostDangerousAreas = [];
        this.mostWidespreadMonsters = [];
        this.columnsWeapons = ['id', 'name', 'type', 'range', 'magazineCapacity'];
        this.columnsAreas = ['id', 'name', 'type'];
        this.columnsMonsters = ['id', 'name', 'agility', 'height', 'weight'];
        this.showWeapons = false;
        this.showMonsters = false;
        this.showAreas = false;
        this.cookie = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            return;
        }
        this.loadMostDangerousAreas();
        this.loadMostEffectiveWeapon();
        this.loadMostWidespreadMonsters();
    };
    HomeComponent.prototype.loadMostWidespreadMonsters = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/monsters/filter/mostWidespread', { withCredentials: true }).subscribe(function (data) {
            _this.mostWidespreadMonsters = data;
            _this.dataMonsters = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatTableDataSource */](_this.mostWidespreadMonsters);
            console.log('Most widespread monsters loaded.\n' + data);
            _this.showMonsters = true;
        }, function (error) {
            console.log("Error during loading most widespread monsters.\n" + error);
        });
        return null;
    };
    HomeComponent.prototype.loadMostDangerousAreas = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/areas/filter/mostDangerous', { withCredentials: true }).subscribe(function (data) {
            _this.mostDangerousAreas = data;
            _this.dataAreas = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatTableDataSource */](_this.mostDangerousAreas);
            console.log('Most dangerous areas loaded.\n' + data);
            _this.showAreas = true;
        }, function (error) {
            console.log("Error during loading most dangerous areas.\n" + error);
        });
        return null;
    };
    HomeComponent.prototype.loadMostEffectiveWeapon = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/weapons/filter/mostEffectiveWeapon', { withCredentials: true }).subscribe(function (data) {
            _this.mostEffectiveWeapons = data;
            _this.dataWeapons = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatTableDataSource */](_this.mostEffectiveWeapons);
            console.log('Most effective weapons loaded.\n' + data);
            _this.showWeapons = true;
        }, function (error) {
            console.log("Error during loading most effective weapons.\n" + error);
        });
        return null;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/manager/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/home/home.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/manager.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row  role=\"heading\" class=\"\">\r\n    <span>Creatures hunting</span>\r\n\r\n    <span class=\"spacer\"></span>\r\n\r\n    <div>\r\n      <button mat-button routerLink=\"/pa165\">Home</button>\r\n      <button mat-button routerLink=\"/pa165/users\" *ngIf=\"cookieIsAdmin\">Users</button>\r\n      <button mat-button routerLink=\"/pa165/monsters\">Monsters</button>\r\n      <button mat-button routerLink=\"/pa165/weapons\">Weapons</button>\r\n      <button mat-button routerLink=\"/pa165/areas\">Areas</button>\r\n    </div>\r\n    <button class=\"logout\" mat-button (click)=\"logout()\">Logout</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>\r\n<cookie-law></cookie-law>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ManagerComponent = (function () {
    function ManagerComponent(http, cookieService, router, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.config = config;
        this.cookieIsAdmin = false;
    }
    ManagerComponent.prototype.ngOnInit = function () {
        this.getCookie();
        console.log(this.cookieIsAdmin);
    };
    ManagerComponent.prototype.getCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.cookieIsAdmin = true;
            return;
        }
        this.cookieIsAdmin = false;
    };
    ManagerComponent.prototype.logout = function () {
        this.http.delete(this.config.apiEndpoint + '/pa165/rest/auth', { withCredentials: true }).subscribe(function (data) { return console.log('Data: ' + data); }, function (error) { return console.log('Error: ' + error); });
        this.router.navigate(['/pa165/login']);
    };
    ManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manager',
            template: __webpack_require__("../../../../../src/app/manager/manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/manager.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], Object])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/monster-create/monster-create.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-card mat-elevation-z4\" >\r\n  <div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #name placeholder=\"Name\" required pattern=\"^[a-zA-Z]+$\" [formControl]=\"nameFormControl\">\r\n        <mat-error *ngIf=\"nameFormControl.hasError('pattern') && !nameFormControl.hasError('required')\">\r\n          This is not valid name!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n          Name is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #height placeholder=\"Height\" pattern=\"^(([0-9]+\\.[0-9]*)|([0-9]*\\.[0-9]+)|([0-9]*))$\" [formControl]=\"heightFormControl\">\r\n        <mat-error *ngIf=\"heightFormControl.hasError('pattern')\">\r\n          This is not valid number!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #weight placeholder=\"Weight\" pattern=\"^(([0-9]+\\.[0-9]*)|([0-9]*\\.[0-9]+)|([0-9]*))$\" [formControl]=\"weightFormControl\">\r\n        <mat-error *ngIf=\"weightFormControl.hasError('pattern')\">\r\n          This is not valid number!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Agility\" [(value)]=\"agility\">\r\n          <mat-option value=\"SLOW\">Slow</mat-option>\r\n          <mat-option value=\"FAST\">Fast</mat-option>\r\n          <mat-option >Not selected</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/monsters\">Back</button>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!nameFormControl.valid || !heightFormControl.valid || !weightFormControl.valid\"\r\n          (click)=\"createMonster(name.value, height.value, weight.value, agility)\">Create monster</button>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/monster-create/monster-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/monster-create/monster-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var MonsterCreateComponent = (function () {
    function MonsterCreateComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.cookie = false;
    }
    MonsterCreateComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.checkIfCookieExist();
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["k" /* Validators */].required,
        ]);
        this.heightFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', []);
        this.weightFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', []);
    };
    MonsterCreateComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    MonsterCreateComponent.prototype.createMonster = function (name, height, weight, agility) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "name": name, "height": height, "weight": weight, "agility": agility };
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/monsters/create', json, { withCredentials: true }).subscribe(function (data) {
            console.log("Creating monster with name: " + name + ", height: " + height + ", weight: " + weight + "and agility: " + agility + "was successful.");
            _this.router.navigate(['/pa165/monsters']);
        }, function (error) {
            console.log("Error during creating monster with name: " + name + ", height: " + height + ", weight: " + weight + "and agility: " + agility + ".");
        });
    };
    MonsterCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monster-create',
            template: __webpack_require__("../../../../../src/app/manager/monster-create/monster-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/monster-create/monster-create.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */], Object])
    ], MonsterCreateComponent);
    return MonsterCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/monster-detail/monster-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!showMonster ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\" *ngIf=\"showMonster\">\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/monsters\" class=\"backButton\">Back</button>\r\n  <div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #name placeholder=\"Name\" value=\"{{monster.name}}\" disabled=\"{{!isAdmin}}\"\r\n               pattern=\"^[a-zA-Z]+$\" [formControl]=\"nameFormControl\">\r\n        <mat-error *ngIf=\"nameFormControl.hasError('pattern') && !nameFormControl.hasError('required') && nameFormControl.dirty\">\r\n          This is not valid name!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"nameFormControl.hasError('required') && nameFormControl.dirty\">\r\n          Name is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #height placeholder=\"Height\" value=\"{{monster.height}}\" disabled=\"{{!isAdmin}}\"\r\n               pattern=\"^(([0-9]+\\.[0-9]*)|([0-9]*\\.[0-9]+)|([0-9]*))$\" [formControl]=\"heightFormControl\">\r\n        <mat-error *ngIf=\"heightFormControl.hasError('pattern')\">\r\n          This is not valid number!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #weight placeholder=\"Weight\" value=\"{{monster.weight}}\" disabled=\"{{!isAdmin}}\"\r\n               pattern=\"^(([0-9]+\\.[0-9]*)|([0-9]*\\.[0-9]+)|([0-9]*))$\" [formControl]=\"weightFormControl\">\r\n        <mat-error *ngIf=\"weightFormControl.hasError('pattern')\">\r\n          This is not valid number!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Agility\" [(value)]=\"selectedAgility\" disabled=\"{{!isAdmin}}\">\r\n          <mat-option value=\"SLOW\">Slow</mat-option>\r\n          <mat-option value=\"FAST\">Fast</mat-option>\r\n          <mat-option >Not selected</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!heightFormControl.valid || !weightFormControl.valid || (!nameFormControl.valid && nameFormControl.dirty)\"\r\n          (click)=\"updateMonster(name.value, height.value, weight.value, selectedAgility)\" *ngIf=\"isAdmin\">Update</button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/monster-detail/monster-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".attribute {\n  padding-bottom: 15px; }\n\n.backButton {\n  margin-bottom: 15px; }\n\n.mat-elevation-z4 {\n  min-width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/monster-detail/monster-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsterDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var MonsterDetailComponent = (function () {
    function MonsterDetailComponent(http, route, cookieService, router, dialog, config) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.showMonster = false;
        this.cookie = false;
        this.isAdmin = false;
        this.route.params.subscribe(function (res) { return _this.monsterId = res.id; });
    }
    MonsterDetailComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.checkIsAdminCookie();
        this.loadData();
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["k" /* Validators */].required
        ]);
        this.heightFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]();
        this.weightFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]();
    };
    MonsterDetailComponent.prototype.checkIsAdminCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.isAdmin = true;
            return;
        }
        this.isAdmin = false;
    };
    MonsterDetailComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    MonsterDetailComponent.prototype.loadData = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/monsters/' + this.monsterId, { withCredentials: true }).subscribe(function (data) {
            console.log('Monster detail loaded:\n' + data);
            _this.monster = data;
            _this.showMonster = true;
            _this.selectedAgility = data.agility == null ? 'null' : data.agility;
        });
    };
    MonsterDetailComponent.prototype.updateMonster = function (name, height, weight, agility) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "name": name, "height": height, "weight": weight, "agility": agility };
        console.log(json);
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/monsters/' + this.monsterId, json, { withCredentials: true }).subscribe(function (data) {
            console.log("Updating monster with name: " + name + ", height: " + height + ", weight: " + weight + "and agility: " + agility + "was successful.");
            _this.loadData();
        }, function (error) {
            console.log("Error: " + error);
            console.log("Error during updating monster with name: " + name + ", height: " + height + ", weight: " + weight + "and agility: " + agility + "was successful.");
        });
    };
    MonsterDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monster-detail',
            template: __webpack_require__("../../../../../src/app/manager/monster-detail/monster-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/monster-detail/monster-detail.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */], Object])
    ], MonsterDetailComponent);
    return MonsterDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/monsters/monsters.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!showMonsters ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\">\r\n  <h4>All monsters</h4>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165\">Back</button>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/create/monster\" *ngIf=\"isAdmin\">Create new monster</button>\r\n  <mat-table #table [dataSource]=\"dataSource\" *ngIf=\"showMonsters\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.id}} </mat-cell>\r\n    </ng-container>\r\n  <!--\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"agility\">\r\n      <mat-header-cell *matHeaderCellDef> Agility </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.agility}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"height\">\r\n      <mat-header-cell *matHeaderCellDef> Height </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.height}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"weight\">\r\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\"> {{monster.weight}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"detail\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\">\r\n        <button mat-button color=\"primary\" routerLink=\"{{monster.id}}\">Detail</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"remove\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let monster\">\r\n        <button mat-button color=\"warn\" (click)=\"removeMonster(monster.id)\">Remove</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/monsters/monsters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/monsters/monsters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonstersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MonstersComponent = (function () {
    function MonstersComponent(http, cookieService, router, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.config = config;
        this.displayedColumns = ['id', 'name', 'agility', 'height', 'weight', 'detail', 'remove'];
        this.showMonsters = false;
        this.monsters = [];
        this.cookie = false;
        this.isAdmin = false;
    }
    MonstersComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIsAdminCookie();
        this.loadMonsters();
    };
    MonstersComponent.prototype.checkIsAdminCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.isAdmin = true;
            return;
        }
        this.displayedColumns = ['id', 'name', 'agility', 'height', 'weight', 'detail'];
        this.isAdmin = false;
    };
    MonstersComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    MonstersComponent.prototype.loadMonsters = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/monsters/', { withCredentials: true }).subscribe(function (data) {
            _this.monsters = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableDataSource */](_this.monsters);
            console.log('Monsters loaded:\n' + data);
            _this.showMonsters = true;
        }, function (error) {
        });
    };
    MonstersComponent.prototype.removeMonster = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.delete(this.config.apiEndpoint + '/pa165/rest/auth/monsters/' + id, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Removing monster with id: " + id + "was successful.");
            _this.loadMonsters();
        }, function (error) {
            console.log("Error during removing monster with id: " + id + ".");
        });
    };
    MonstersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monsters',
            template: __webpack_require__("../../../../../src/app/manager/monsters/monsters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/monsters/monsters.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], Object])
    ], MonstersComponent);
    return MonstersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper class=\"stepper\" [linear]=\"true\">\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form [formGroup]=\"firstFormGroup\" class=\"formGroup\">\r\n      <ng-template matStepLabel>Fill in the first name</ng-template>\r\n      <mat-form-field class=\"formField\">\r\n        <input matInput #firstName placeholder=\"First name\" formControlName=\"firstCtrl\" required\r\n               pattern=\"^[a-zA-Z]+$\">\r\n        <mat-error *ngIf=\"firstFormGroup.controls.firstCtrl.hasError('pattern') && !firstFormGroup.controls.firstCtrl.hasError('required')\">\r\n          This is not valid name!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"firstFormGroup.controls.firstCtrl.hasError('required')\">\r\n          First name is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" routerLink=\"/pa165/users\" class=\"previousButtons\">Cancel</button>\r\n      <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <form [formGroup]=\"secondFormGroup\" class=\"formGroup\">\r\n      <ng-template matStepLabel>Fill in the last name</ng-template>\r\n      <mat-form-field class=\"formField\">\r\n        <input matInput #lastName placeholder=\"Last name\" formControlName=\"secondCtrl\" required\r\n               pattern=\"^[a-zA-Z]+$\">\r\n        <mat-error *ngIf=\"secondFormGroup.controls.secondCtrl.hasError('pattern') && !secondFormGroup.controls.secondCtrl.hasError('required')\">\r\n          This is not valid name!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"secondFormGroup.controls.secondCtrl.hasError('required')\">\r\n          Last name is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" matStepperPrevious class=\"previousButtons\">Back</button>\r\n      <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"thirdFormGroup\">\r\n    <form [formGroup]=\"thirdFormGroup\" class=\"formGroup\">\r\n      <ng-template matStepLabel>Fill in the email</ng-template>\r\n      <mat-form-field class=\"formField\">\r\n        <input matInput #email placeholder=\"Email\" [type]=\"'email'\" formControlName=\"thirdCtrl\" required\r\n               pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n        <mat-error *ngIf=\"thirdFormGroup.controls.thirdCtrl.hasError('pattern') && !thirdFormGroup.controls.thirdCtrl.hasError('required')\">\r\n          This is not valid email adress!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"thirdFormGroup.controls.thirdCtrl.hasError('required')\">\r\n          Email is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" matStepperPrevious class=\"previousButtons\">Back</button>\r\n      <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"fourthFormGroup\">\r\n    <form [formGroup]=\"fourthFormGroup\" class=\"formGroup\">\r\n      <ng-template matStepLabel>Fill in the password</ng-template>\r\n      <mat-form-field class=\"formField\">\r\n        <input matInput #password placeholder=\"Password\" [type]=\"'password'\" formControlName=\"fourthCtrl\" required>\r\n        <mat-error *ngIf=\"fourthFormGroup.controls.fourthCtrl.hasError('required')\">\r\n          Password is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <div>\r\n        <mat-form-field  class=\"formField\">\r\n          <input matInput #confirmPassword placeholder=\"Confirm password\" [type]=\"'password'\" formControlName=\"fifthCtrl\" required>\r\n        </mat-form-field>\r\n        <mat-error *ngIf=\"areEqual(fourthFormGroup)\">\r\n          Passwords aren't the same!\r\n        </mat-error>\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" matStepperPrevious class=\"previousButtons\">Back</button>\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!fourthFormGroup.valid\"\r\n              (click)=\"createUser(firstName.value, lastName.value, email.value, password.value)\">Create</button>\r\n    </form>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/user-create/user-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stepper {\n  margin: auto;\n  margin-top: 2%;\n  width: 80%; }\n\n.error_message {\n  color: red; }\n\n.formGroup {\n  margin: auto;\n  margin-top: 2%;\n  width: 21%;\n  min-width: 280px;\n  max-width: 280px; }\n\n.formField {\n  width: 100%; }\n\n.previousButtons {\n  margin-right: 30.5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/user-create/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var UserCreateComponent = (function () {
    function UserCreateComponent(http, cookieService, router, _formBuilder, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.config = config;
        this.cookie = false;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]
        });
        this.fourthFormGroup = this._formBuilder.group({
            fourthCtrl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            fifthCtrl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]
        }, { validator: this.areEqual });
    };
    UserCreateComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    UserCreateComponent.prototype.createUser = function (firstName, lastName, email, password) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "firstName": firstName, "lastName": lastName, "email": email };
        console.log(json);
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/users/register?unencryptedPassword=' + password, json, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Creating user with first name: " + firstName + ", last name: " + lastName + ", email: " + email + "was successful.");
            _this.router.navigate(['/pa165/users']);
        }, function (error) {
            console.log("Error during creating user with first name: " + firstName + ", last name: " + lastName + ", email: " + email + ".");
            console.log(error);
        });
    };
    UserCreateComponent.prototype.areEqual = function (group) {
        var val;
        var valid = true;
        for (var control in group.controls) {
            if (val === undefined) {
                val = group.controls[control].value;
            }
            else {
                if (val !== group.controls[control].value) {
                    valid = false;
                    break;
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    UserCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-create',
            template: __webpack_require__("../../../../../src/app/manager/user-create/user-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/user-create/user-create.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatDialog */], Object])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!showUsers ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\">\r\n  <h4>All users</h4>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165\">Back</button>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/create/user\">Create new user</button>\r\n  <mat-table #table [dataSource]=\"dataSource\" *ngIf=\"showUsers\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.id}} </mat-cell>\r\n    </ng-container>\r\n    <!--\r\n      <!-- Name Column -->\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <mat-header-cell *matHeaderCellDef> First Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.firstName}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lastName\">\r\n      <mat-header-cell *matHeaderCellDef> Last Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.lastName}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"email\">\r\n      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.email}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"role\">\r\n      <mat-header-cell *matHeaderCellDef> Role </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.role}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"delete\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\">\r\n        <button mat-button color=\"warn\" (click)=\"deleteUser(user.id)\">Delete</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"switchRole\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\">\r\n        <button mat-button color=\"warn\" (click)=\"switchRole(user.id, user.role)\">Switch</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UsersComponent = (function () {
    function UsersComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.displayedColumns = ['id', 'firstName', 'lastName', 'email', 'role', 'delete', 'switchRole'];
        this.showUsers = false;
        this.users = [];
        this.cookie = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.loadUsers();
    };
    UsersComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/users/', { withCredentials: true }).subscribe(function (data) {
            _this.users = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableDataSource */](_this.users);
            console.log('Users loaded:\n' + data);
            _this.showUsers = true;
        }, function (error) {
            console.log("Error during loading monsters.\n" + error);
        });
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.delete(this.config.apiEndpoint + '/pa165/rest/auth/users/' + id, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Deleting user with id: " + id + "was successful.");
            _this.loadUsers();
        }, function (error) {
            console.log("Error during deleting user with id: " + id + ".");
        });
    };
    UsersComponent.prototype.setAdmin = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/users/setAdmin?id=' + id, null, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Setting user with id: " + id + " as admin was successful.");
            _this.loadUsers();
        }, function (error) {
            console.log("Error during setting user with id: " + id + "as admin.");
        });
    };
    UsersComponent.prototype.removeAdmin = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/users/removeAdmin?id=' + id, null, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Setting user with id: " + id + " as regular user was successful.");
            _this.loadUsers();
        }, function (error) {
            console.log("Error during setting user with id: " + id + "as regular user.");
        });
    };
    UsersComponent.prototype.isAdmin = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/users/isAdmin?id=' + id, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            _this.loadUsers();
        });
    };
    UsersComponent.prototype.switchRole = function (id, role) {
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        if (role == "ADMIN") {
            this.removeAdmin(id);
        }
        else {
            this.setAdmin(id);
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/manager/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/users/users.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], Object])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/weapon-create/weapon-create.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"main-card mat-elevation-z4\" >\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput #name  placeholder=\"Name\" required pattern=\"^[a-zA-Z]+$\" [formControl]=\"nameFormControl\">\r\n      <mat-error *ngIf=\"nameFormControl.hasError('pattern') && !nameFormControl.hasError('required')\">\r\n        This is not valid name!\r\n      </mat-error>\r\n      <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n        Name is required!\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Type\" [(value)]=\"type\">\r\n        <mat-option value=\"PISTOL\">Pistol</mat-option>\r\n        <mat-option value=\"RIFLE\">Rifle</mat-option>\r\n        <mat-option value=\"SHOTGUN\">Shotgun</mat-option>\r\n        <mat-option value=\"OTHER\">Other</mat-option>\r\n        <mat-option >Not selected</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput #range placeholder=\"Range\" pattern=\"^[0-9]*$\" [formControl]=\"rangeFormControl\">\r\n      <mat-error *ngIf=\"rangeFormControl.hasError('pattern')\">\r\n        This is not valid number!\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput #magazineCapacity placeholder=\"Magazine Capacity\" pattern=\"^[0-9]*$\" [formControl]=\"magazineFormControl\">\r\n      <mat-error *ngIf=\"magazineFormControl.hasError('pattern')\">\r\n        This is not valid number!\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/weapons\">Back</button>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!nameFormControl.valid || !rangeFormControl.valid || !magazineFormControl.valid\"\r\n          (click)=\"createWeapon(name.value, type, range.value,magazineCapacity.value)\">Create</button>\r\n\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/weapon-create/weapon-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/weapon-create/weapon-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var WeaponCreateComponent = (function () {
    function WeaponCreateComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.cookie = false;
    }
    WeaponCreateComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["k" /* Validators */].required,
        ]);
        this.rangeFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', []);
        this.magazineFormControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', []);
    };
    WeaponCreateComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    WeaponCreateComponent.prototype.createWeapon = function (name, weaponType, range, magazineCapacity) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "name": name, "type": weaponType, "range": range, "magazineCapacity": magazineCapacity };
        console.log(json);
        this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/weapons/create', json, { withCredentials: true }).subscribe(function (data) {
            console.log("Creating weapon with name: " + name + ", type: " + weaponType + ", range: " + range + "and magazine capacity: " + magazineCapacity + "was successful.");
            _this.router.navigate(['/pa165/weapons']);
        }, function (error) {
            console.log("Error during creating weapon with name: " + name + ", type: " + weaponType + ", range: " + range + "and magazine capacity: " + magazineCapacity + "was successful.");
        });
    };
    WeaponCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weapon-create',
            template: __webpack_require__("../../../../../src/app/manager/weapon-create/weapon-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/weapon-create/weapon-create.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */], Object])
    ], WeaponCreateComponent);
    return WeaponCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/weapon-detail/weapon-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!(showWeapon)  ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\" *ngIf=\"showWeapon\" >\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/weapons\" class=\"backButton\">Back</button>\r\n\r\n  <div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #name  placeholder=\"Name\" value=\"{{weapon.name}}\" disabled=\"{{!isAdmin}}\" class=\"attribute\" pattern=\"^[a-zA-Z]+$\" [formControl]=\"nameFormControl\">\r\n        <mat-error *ngIf=\"nameFormControl.hasError('pattern') && !nameFormControl.hasError('required')\">\r\n          This is not valid name!\r\n        </mat-error>\r\n        <mat-error *ngIf=\"nameFormControl.hasError('required') && nameFormControl.dirty\">\r\n          Name is required!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Type\" [(value)]=\"weaponType\" disabled=\"{{!isAdmin}}\">\r\n          <mat-option value=\"PISTOL\">Pistol</mat-option>\r\n          <mat-option value=\"RIFLE\">Rifle</mat-option>\r\n          <mat-option value=\"SHOTGUN\">Shotgun</mat-option>\r\n          <mat-option value=\"OTHER\">Other</mat-option>\r\n          <mat-option >Not selected</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #range placeholder=\"Range\" value=\"{{weapon.range}}\" disabled=\"{{!isAdmin}}\"\r\n               pattern=\"^[0-9]*$\" [formControl]=\"rangeFormControl\">\r\n        <mat-error *ngIf=\"rangeFormControl.hasError('pattern')\">\r\n          This is not valid number!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field>\r\n        <input matInput #magazineCapacity placeholder=\"Magazine Capacity\" value=\"{{weapon.magazineCapacity}}\" disabled=\"{{!isAdmin}}\"\r\n               pattern=\"^[0-9]*$\" [formControl]=\"magazineFormControl\">\r\n        <mat-error *ngIf=\"magazineFormControl.hasError('pattern')\">\r\n          This is not valid number!\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <button *ngIf=\"isAdmin\" mat-raised-button color=\"primary\" [disabled]=\"!magazineFormControl.valid || !rangeFormControl.valid || (!nameFormControl.valid && nameFormControl.dirty)\"\r\n            (click)=\"updateWeapon(name.value, weaponType, range.value, magazineCapacity.value)\">Update</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"showMonsters()\">Add appropriate monster</button>\r\n\r\n\r\n    <h4>This weapon is good against:</h4>\r\n    <mat-table [dataSource]=\"dataSource\" >\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.id}} </mat-cell>\r\n      </ng-container>\r\n      <!--\r\n        <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"agility\">\r\n        <mat-header-cell *matHeaderCellDef> Agility </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.agility}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"weight\">\r\n        <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.weight}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"height\">\r\n        <mat-header-cell *matHeaderCellDef> Height </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\"> {{monster.height}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"remove\">\r\n        <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let monster\">\r\n          <button mat-button color=\"warn\" (click)=\"removeAppropriateMonster(monster.id)\">Remove</button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n  </div>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/weapon-detail/weapon-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backButton {\n  margin-bottom: 15px; }\n\n.mat-elevation-z4 {\n  min-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/weapon-detail/weapon-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_monsters_dialog_add_monsters_dialog_component__ = __webpack_require__("../../../../../src/app/add-monsters-dialog/add-monsters-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var WeaponDetailComponent = (function () {
    function WeaponDetailComponent(http, route, cookieService, router, dialog, config) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.displayedColumns = ['id', 'name', 'agility', 'weight', 'height', 'remove'];
        this.showWeapon = false;
        this.appropriateMonsters = [];
        this.isAdmin = false;
        this.cookie = false;
        this.route.params.subscribe(function (res) { return _this.weaponId = res.id; });
    }
    WeaponDetailComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.checkIsAdminCookie();
        this.loadData();
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required,
        ]);
        this.rangeFormControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]('', []);
        this.magazineFormControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]('', []);
    };
    WeaponDetailComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    WeaponDetailComponent.prototype.checkIsAdminCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.isAdmin = true;
            return;
        }
        this.isAdmin = false;
    };
    WeaponDetailComponent.prototype.loadData = function () {
        var _this = this;
        this.showWeapon = false;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/weapons/' + this.weaponId, { withCredentials: true }).subscribe(function (data) {
            console.log('Weapon detail loaded:\n' + data);
            _this.weapon = data;
            _this.showWeapon = true;
            _this.weaponType = data.type == null ? 'null' : data.type;
            _this.appropriateMonsters = data.appropriateMonsters;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatTableDataSource */](_this.appropriateMonsters);
            _this.showWeapon = true;
        });
    };
    WeaponDetailComponent.prototype.showMonsters = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_monsters_dialog_add_monsters_dialog_component__["a" /* AddMonstersComponent */], {
            width: '600px',
            data: this.weapon,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed");
            _this.loadData();
        });
    };
    WeaponDetailComponent.prototype.removeAppropriateMonster = function (monsterId) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/weapons/' + this.weaponId + '/removeAppropriateMonster?monsterId=' + monsterId, null, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            console.log("Removing appropriate monster with id: " + monsterId + " to weapon with id: " + _this.weaponId + "was successful.");
            _this.loadData();
        }, function (error) {
            console.log("Error during removing appropriate monster with id: " + monsterId + " to weapon with id: " + _this.weaponId + "was successful.");
        });
    };
    WeaponDetailComponent.prototype.updateWeapon = function (name, weaponType, range, magazineCapacity) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        var json = { "id": this.weaponId, "name": name, "type": weaponType, "range": range, "magazineCapacity": magazineCapacity };
        this.http.put(this.config.apiEndpoint + '/pa165/rest/auth/weapons/update/' + this.weaponId, json, { withCredentials: true }).subscribe(function (data) {
            console.log("Updating weapon with name: " + name + ", type: " + weaponType + ", range: " + range + "and magazine capacity: " + magazineCapacity + "was successful.");
            _this.loadData();
        }, function (error) {
            console.log("Error during updating weapon with name: " + name + ", type: " + weaponType + ", range: " + range + "and magazine capacity: " + magazineCapacity + "was successful.");
        });
    };
    WeaponDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weapon-detail',
            template: __webpack_require__("../../../../../src/app/manager/weapon-detail/weapon-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/weapon-detail/weapon-detail.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */], Object])
    ], WeaponDetailComponent);
    return WeaponDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manager/weapons/weapons.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner [style.display]=\"!showWeapons ? 'block' : 'none'\" class=\"center\"></mat-spinner>\r\n\r\n<mat-card class=\"main-card mat-elevation-z4\">\r\n  <h4>All weapons</h4>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165\">Back</button>\r\n  <button mat-raised-button color=\"primary\" routerLink=\"/pa165/create/weapon\" *ngIf=\"isAdmin\">Create new weapon</button>\r\n  <mat-table #table [dataSource]=\"dataSource\" *ngIf=\"showWeapons\">\r\n\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.id}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.type}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"range\">\r\n      <mat-header-cell *matHeaderCellDef> Range </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.range}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"magazineCapacity\">\r\n      <mat-header-cell *matHeaderCellDef> Magazine Capacity </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\"> {{weapon.magazineCapacity}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"detail\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\">\r\n        <button mat-button color=\"primary\" routerLink=\"{{weapon.id}}\">Detail</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"remove\">\r\n      <mat-header-cell *matHeaderCellDef>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let weapon\">\r\n        <button mat-button color=\"warn\" (click)=\"removeWeapon(weapon.id)\">Remove</button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/manager/weapons/weapons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-elevation-z4 {\n  min-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/weapons/weapons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__("../../../../../src/app/error-dialog/error-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var WeaponsComponent = (function () {
    function WeaponsComponent(http, cookieService, router, dialog, config) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.dialog = dialog;
        this.config = config;
        this.displayedColumns = ['id', 'name', 'type', 'range', 'magazineCapacity', 'detail', 'remove'];
        this.showWeapons = false;
        this.weapons = [];
        this.cookie = false;
        this.isAdmin = false;
    }
    WeaponsComponent.prototype.ngOnInit = function () {
        this.cookie = this.cookieService.check('creatures-token');
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
                width: '600px',
                data: ["User is not logged in."],
            });
            return;
        }
        this.loadWeapons();
        this.checkIsAdminCookie();
    };
    WeaponsComponent.prototype.checkIfCookieExist = function () {
        if (!this.cookie) {
            this.router.navigate(['/pa165/login']);
        }
    };
    WeaponsComponent.prototype.checkIsAdminCookie = function () {
        if (this.cookieService.get('creatures-is_admin') == "true") {
            this.isAdmin = true;
            return;
        }
        this.displayedColumns = ['id', 'name', 'type', 'range', 'magazineCapacity', 'detail'];
        this.isAdmin = false;
    };
    WeaponsComponent.prototype.loadWeapons = function () {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.get(this.config.apiEndpoint + '/pa165/rest/auth/weapons/', { withCredentials: true }).subscribe(function (data) {
            _this.weapons = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatTableDataSource */](_this.weapons);
            console.log('Weapons loaded:\n' + data);
            _this.showWeapons = true;
        }, function (error) {
            console.log("Error during loading weapons.\n" + error);
        });
    };
    WeaponsComponent.prototype.removeWeapon = function (id) {
        var _this = this;
        this.cookie = this.cookieService.check('creatures-token');
        this.checkIfCookieExist();
        this.http.delete(this.config.apiEndpoint + '/pa165/rest/auth/weapons/delete/' + id, { responseType: 'text', withCredentials: true }).subscribe(function (data) {
            _this.loadWeapons();
            console.log("Removing weapon with id: " + id + "was successful.");
        }, function (error) {
            console.log("Error during removing weapon with id: " + id + ".");
        });
    };
    WeaponsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weapons',
            template: __webpack_require__("../../../../../src/app/manager/weapons/weapons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manager/weapons/weapons.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config__["b" /* CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], Object])
    ], WeaponsComponent);
    return WeaponsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatStepperModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map