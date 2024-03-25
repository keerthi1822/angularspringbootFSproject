import { Routes } from '@angular/router';
import { TojlistComponent } from './tojlist/tojlist.component';
import { AddtojComponent } from './addtoj/addtoj.component';

export const routes: Routes = [
    {path:'',component:TojlistComponent},
    {path:'addtoj',component:AddtojComponent},
    {path:'tojlist',component:TojlistComponent},
];
