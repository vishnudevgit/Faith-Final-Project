import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VustVendordet } from './vustvendordet';

@Injectable({
  providedIn: 'root'
})
export class VustvendordetService {

  private baseUrl1 ="http://localhost:8282/machine_test/api";

  constructor(private http:HttpClient) { }

  getVVendorList(): Observable<any>{
    return this.http.get(this.baseUrl1+'/vvendordetails');
  }
  createvvendordet(vustvendordet:Object):Observable<Object>{
    return this.http.post(this.baseUrl1+'/insertvvendor',vustvendordet);
  }

  updateVvendordet(vdId:number,vustvendordet:VustVendordet):Observable<any>{
    return this.http.put(this.baseUrl1+'/updatvvendor/'+vdId,vustvendordet);
  }
 
  deletevvendordet(vdId:number,vustvendordet:VustVendordet):Observable<any>{
    return this.http.put(this.baseUrl1+'/disablevendor/'+vdId,vustvendordet);
  }
  getvvendordet(vdId: number):Observable<any>{
    return this.http.get(this.baseUrl1+'/getvvendorid/'+vdId);
  }
  duplicatecheck(cpPhone:String, cpEmail:String): any {
    console.log("inside duplication check: ");
    return this.http.get<VustVendordet>(this.baseUrl1+'/duplication/'+cpPhone+'/'+cpEmail);
  }
  search(searchString:String):Observable<VustVendordet[]>{
    return this.http.get<VustVendordet[]>(this.baseUrl1+'/searchdet/'+searchString);
  }
}
