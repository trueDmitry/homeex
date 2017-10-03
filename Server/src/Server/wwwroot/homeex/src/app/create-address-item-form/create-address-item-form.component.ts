import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-address-item-form',
  templateUrl: './create-address-item-form.component.html',
  styleUrls: ['./create-address-item-form.component.scss']
})
export class CreateAddressItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(createAddressItemForm: NgForm){
     
    console.log(createAddressItemForm);
  }

}
