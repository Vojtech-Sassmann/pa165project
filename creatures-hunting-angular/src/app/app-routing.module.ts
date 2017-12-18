import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {ManagerComponent} from "./manager/manager.component";
import {HomeComponent} from "./manager/home/home.component";
import {MonstersComponent} from "./manager/monsters/monsters.component";
import {WeaponsComponent} from "./manager/weapons/weapons.component";
import {MonsterDetailComponent} from "./manager/monster-detail/monster-detail.component";
import {MonsterCreateComponent} from "./manager/monster-create/monster-create.component";
import {WeaponCreateComponent} from "./manager/weapon-create/weapon-create.component";
import {WeaponDetailComponent} from "./manager/weapon-detail/weapon-detail.component";
import {UsersComponent} from "./manager/users/users.component";
import {Error404Component} from "./error404/error404.component";
import {UserCreateComponent} from "./manager/user-create/user-create.component";
import {AreasComponent} from "./manager/areas/areas.component";
import {AreaDetailComponent} from "./manager/area-detail/area-detail.component";
import {AreaCreateComponent} from "./manager/area-create/area-create.component";

const routes: Routes = [
  {
    path: 'pa165/login',
    component: LoginComponent
  },
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'pa165',
        component: HomeComponent
      },
      {
        path: 'pa165/monsters',
        component: MonstersComponent
      },
      {
        path: 'pa165/monsters/:id',
        component: MonsterDetailComponent
      },
      {
        path: 'pa165/create/monster',
        component: MonsterCreateComponent
      },
      {
        path: 'pa165/weapons',
        component: WeaponsComponent
      },
      {
        path: 'pa165/weapons/:id',
        component: WeaponDetailComponent
      },
      {
        path: 'pa165/create/weapon',
        component: WeaponCreateComponent
      },
      {
        path: 'pa165/users',
        component: UsersComponent
      },
      {
        path: 'pa165/create/user',
        component: UserCreateComponent
      },
      {
        path: 'pa165/areas',
        component: AreasComponent
      },
      {
        path: 'pa165/areas/:id',
        component: AreaDetailComponent
      },
      {
        path: 'pa165/create/area',
        component: AreaCreateComponent
      }
      ,
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  },
  {
    path:'404',
    component: Error404Component
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
