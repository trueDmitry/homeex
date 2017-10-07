import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AddressItem } from '../address-item/entities/addressItem';
import { AddressItemsListService } from '../address-items-list.service';

@Component({
  selector: 'app-create-address-item-form',
  templateUrl: './create-address-item-form.component.html',
  styleUrls: ['./create-address-item-form.component.scss']
})
export class CreateAddressItemFormComponent{
  
  constructor(private _addressItemsListService: AddressItemsListService) { }

  onSubmit(createAddressItemForm: NgForm){     
    createAddressItemForm.value.streetName
  }

}
