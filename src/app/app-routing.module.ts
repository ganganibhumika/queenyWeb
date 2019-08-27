import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { ProductCheckoutComponent } from './component/product-checkout/product-checkout.component';
import { ProductShopComponent } from './component/product-shop/product-shop.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'product-cart', component: ProductCartComponent },
      { path: 'product-shop', component: ProductShopComponent },
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'product-checkout', component: ProductCheckoutComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
