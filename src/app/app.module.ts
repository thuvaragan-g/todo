import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PopupComponent } from './popup/popup.component';
import { TodayComponent } from './today/today.component';
import { MesComponent } from './mes/mes.component';
import { ImportantComponent } from './important/important.component';
import { ArchivedComponent } from './archived/archived.component';
import {FormsModule} from '@angular/forms';
import { WellcomeComponent } from './wellcome/wellcome.component';



@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    TodayComponent,
    MesComponent,
    ImportantComponent,
    ArchivedComponent,
    WellcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  entryComponents: [PopupComponent, TodayComponent, MesComponent, ImportantComponent, ArchivedComponent],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
