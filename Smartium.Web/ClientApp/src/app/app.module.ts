import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { SmartHouseMenuComponent } from './smart-house/smart-house-menu/smart-house-menu.component';
import { SmartHomeComponent } from './smart-house/smart-home/smart-home.component';
import { ClimateComponent } from './smart-house/climate/climate.component';
import { SecurityComponent } from './smart-house/security/security.component';
import { ImitationComponent } from './smart-house/security/imitation/imitation.component';
import { NgChartsModule } from 'ng2-charts';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SmartHouseMenuComponent,
    SmartHomeComponent,
    ClimateComponent,
    SecurityComponent,
    ImitationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule, 
    ApiAuthorizationModule,
    NgChartsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'smart-house-menu', component: SmartHouseMenuComponent, canActivate: [AuthorizeGuard] },
      { path: 'smart-house/:houseId', component: SmartHomeComponent, canActivate: [AuthorizeGuard] },
      { path: 'climate/:houseId', component: ClimateComponent, canActivate: [AuthorizeGuard] },
      { path: 'security/:houseId', component: SecurityComponent, canActivate: [AuthorizeGuard] },
      { path: 'imitation/:houseId', component: ImitationComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
