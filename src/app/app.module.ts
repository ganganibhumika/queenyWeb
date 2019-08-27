import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { BreadcrumbNavComponent } from './component/breadcrumb-nav/breadcrumb-nav.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ProductCartComponent } from './component/product-cart/product-cart.component';
import { ProductCheckoutComponent } from './component/product-checkout/product-checkout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductShopComponent } from './component/product-shop/product-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    PageHeaderComponent,
    BreadcrumbNavComponent,
    ProductCartComponent,
    ProductCheckoutComponent,
    ProductDetailsComponent,
    ProductShopComponent
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,  
  ],
  
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
