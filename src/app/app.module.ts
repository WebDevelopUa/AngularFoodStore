import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// List
import {MatListModule} from '@angular/material/list';

//  Grid list Angular material components
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

// import SERVICE & add it to providers: [DishService],
import {DishService} from "./services/dish.service";
import {PromotionService} from "./services/promotion.service";


// import Routing Module
import {AppRoutingModule} from './app-routing/app-routing.module';

// import Other components
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {DishdetailComponent} from './dishdetail/dishdetail.component';
import {MatIconModule, MatSidenavModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    DishdetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [LoginComponent],
  providers: [DishService, PromotionService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
