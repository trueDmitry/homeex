import { Injectable } from '@angular/core';
import { AddressItem } from './address-item/entities/addressItem';

@Injectable()
export class AddressItemsListService {
  private _addressItemList: AddressItem[] = [];  

  constructor() {
      this._addressItemList.push({id:"testId",city:"Kiev",streetName:"Poryka St.",buildingNumber:"5",appartmentNumber:"10"});
   }

  public addAddressItem(item:AddressItem): void {
    this._addressItemList.push(item);    
  }

  public getAddressList(): AddressItem[]{
    return this._addressItemList;
  }

}
