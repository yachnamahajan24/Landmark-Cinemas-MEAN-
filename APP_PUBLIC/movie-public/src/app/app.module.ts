import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './homee/home.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'movies',
        component: HomepageComponent
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'create',
        component: CreateComponent
      },
      {
        path:'movie/:movieid',
        component: DetailsPageComponent
      }
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap:[FrameworkComponent]

})
export class AppModule { }

