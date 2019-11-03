import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { VvendorlistComponent } from './vvendorlist/vvendorlist.component';
import { CreateVvendorComponent } from './create-vvendor/create-vvendor.component';
import { VvendorEditComponent } from './vvendor-edit/vvendor-edit.component';
import{ NgxPaginationModule } from'ngx-pagination';
import { VvendorDetailsComponent } from './vvendor-details/vvendor-details.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VvendorlistComponent,
    CreateVvendorComponent,
    VvendorEditComponent,
    VvendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    BrowserAnimationsModule,
ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
