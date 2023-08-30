import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSelectBoxModule ,DxDataGridModule,DxCalendarModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxDataGridModule,
    DxCalendarModule 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
