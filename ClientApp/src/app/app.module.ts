import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BookComponent } from './book/book.component';
import { LoginComponent } from '../api-authorization/login/login.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookReadingComponent } from './book-reading/bookReading.component';
import { BookEditComponent } from './book-edit/bookEdit.component';
import { CurrentReadComponent } from './current-read/current-read.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BookComponent,
    CreateBookComponent,
    BookReadingComponent,
    BookEditComponent,
    CurrentReadComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'books', component: BookComponent, canActivate: [AuthorizeGuard] },
      { path: 'creates', component: CreateBookComponent, canActivate: [AuthorizeGuard] },
      { path: 'readings', component: BookReadingComponent, canActivate: [AuthorizeGuard] },
      { path: 'reads', component: CurrentReadComponent, canActivate: [AuthorizeGuard] },
      { path: 'edit/:id', component: BookEditComponent, canActivate: [AuthorizeGuard] },
      { path: '**', component: LoginComponent },

    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
