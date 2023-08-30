import { Component } from '@angular/core';
import { PartyList, PartyListService } from './employees.service';
import notify from 'devextreme/ui/notify';
import DataSource from 'devextreme/data/odata/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devextreme-test';
  isVisible:boolean = false;

  expanded: boolean = true;
  partylist: PartyList[] = [];
  selectedList: PartyList = new PartyList();

  dataSourceArray: DataSource[] = [ 
  new DataSource({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Products'
  })
];
  constructor(private service: PartyListService) {
    this.partylist = service.getPartyList();
    this.selectList = this.selectList.bind(this);
  }

  selectList(e: any) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done((partylist: PartyList) => {
      if (partylist) {
        this.selectedList = partylist;
      }
    });
    if(this.isVisible==false)this.isVisible = !this.isVisible
  }
  myCommand(e: any) {
    console.log("Success")
  }

  onClick() {
    notify({
      message:"Button was click!!",
    });
  }
  editRow(x:any){

  }
  deleteRow(x:any){

  }
}
