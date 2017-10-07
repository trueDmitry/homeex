import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AddressItem } from '../address-item/entities/addressItem';
import { AddressItemsListService } from '../address-items-list.service';
import { GuidGeneratorService } from '../guid-generator.service';

@Component({
  selector: 'app-create-address-item-form',
  templateUrl: './create-address-item-form.component.html',
  styleUrls: ['./create-address-item-form.component.scss']
})
export class CreateAddressItemFormComponent{
  public draftAddressItem: AddressItem = new AddressItem();

  constructor(private _addressItemsListService: AddressItemsListService, private _guidGeneratorService:GuidGeneratorService) { }

  onSubmit(createAddressItemForm: NgForm){
    if(createAddressItemForm.valid){
      this.draftAddressItem.id = this._guidGeneratorService.uuidv4();
      this._addressItemsListService.addAddressItem(this.draftAddressItem);  
    }       
  }

}
