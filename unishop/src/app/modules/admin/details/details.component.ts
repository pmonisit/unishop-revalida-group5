import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  comData = {
    title: "Product Details",
    buttons: [
      {
      type: "add-product",
      name: "Add Product",
      color: "us-btn-primary",
    }
  ]
  }
  paramID: any;
  value: any[] = []
  constructor(private route: ActivatedRoute, private adminServices: AdminService, private router: Router) { 
    this.route.queryParams.subscribe(data => {
      this.paramID = data['id']
      
    })
    this.adminServices.getProductById(parseInt(this.paramID)).subscribe(data => {
      this.modifyData(data[0])
    })

  }

  modifyData (data: any) {
    let prop = Object.keys(data)
    prop.forEach(x => {
      console.log(x)
      if(x !== 'id'){
        if(data[x] instanceof Object && data[x].length !== 0){
          this.value.push({name: x,key: data[x], hasChild: true})
        }
        else {
          this.value.push({name: x,key: data[x], hasChild: false})
        }
      }
      
    })
  }

  comActionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add'])
    }
  }


}