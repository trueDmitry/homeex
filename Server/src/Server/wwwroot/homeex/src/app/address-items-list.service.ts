import { Injectable } from '@angular/core';
import { AddressItem } from './address-item/entities/addressItem';

@Injectable()
export class AddressItemsListService {
  private _addressItemList: AddressItem[] = [];  

  constructor() {
      let firstItem = new AddressItem();
      firstItem.id = "testId";
      firstItem.appartmentNumber = "10";
      firstItem.buildingNumber = "2";
      firstItem.city = "Kiev";
      firstItem.streetName = "Poryka St.";
      this._addressItemList.push(firstItem);
   }

  public addAddressItem(item:AddressItem): void {
    this._addressItemList.push(item);  
    console.log(this._addressItemList);  
  }

  public getAddressList(): AddressItem[]{
    return this._addressItemList;
  }

}
