import { Component } from '@angular/core';
import { PartyList, PartyListService } from './employees.service';
import notify from 'devextreme/ui/notify';
import DataSource from 'devextreme/data/odata/store';
import ODataStore from 'devextreme/data/odata/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devextreme-test';
  isVisible:boolean = false;

  expanded: boolean = true;

dataSource

keyExpr: string = 'ProductID';

constructor() {
  this.dataSource = new ODataStore({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Products',
    key: this.keyExpr,
    version: 4, // OData version
    jsonp: false, // Set to true if your service uses JSONP
  });
}

  onClick() {
    notify({
      message:"Button was click!!",
    });
  }
}
