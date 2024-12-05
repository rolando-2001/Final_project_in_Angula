
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";
import { AuthGuard } from "../auth.guard";


const routes: Routes = [
    {
        path: 'list',
        component: CartPageComponent,canActivate: [AuthGuard]
    }
]



@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})





export class CartRoutingModule { }