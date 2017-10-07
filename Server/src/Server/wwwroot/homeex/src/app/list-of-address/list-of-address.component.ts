import { Component, OnInit } from '@angular/core';
import { ListOfAddresses } from './entities/listOfAddresses';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-of-address',
  templateUrl: './list-of-address.component.html',
  styleUrls: ['./list-of-address.component.scss']
})
export class ListOfAddressComponent implements OnInit {
  public addressList: ListOfAddresses;
  
  constructor() { }

  ngOnInit() {
  }
  
  submitCreatingAddress(createAddressItemForm: NgForm){
        console.log(createAddressItemForm);
  }

}
