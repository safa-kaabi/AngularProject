import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPaswordComponent } from './forget-pasword/forget-pasword.component';
import { environment } from 'src/environments/environment.development';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ConducterlistComponent } from './conducterlist/conducterlist.component';
import {ButtonModule} from 'primeng/button';
import { AddconduterComponent } from './addconduter/addconduter.component';
import { UpdateconducterComponent } from './updateconducter/updateconducter.component';
import { TableModule } from 'primeng/table';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ListvoiturComponent } from './listvoitur/listvoitur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddvoitureComponent } from './addvoiture/addvoiture.component';
import { UpdatevoitureComponent } from './updatevoiture/updatevoiture.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PageComponent } from './page/page.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPaswordComponent,
    HomeComponent,
    ConducterlistComponent,
    AddconduterComponent,
    UpdateconducterComponent,
    ConfirmationDialogComponentComponent,
    ListvoiturComponent,
    DashboardComponent,
    AddvoitureComponent,
    UpdatevoitureComponent,
    ConfirmationDialogComponent,
    PageComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MenubarModule,
    ToastModule,
    MatTooltipModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ButtonModule,
    TableModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    
    
    

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
