import { Component, OnInit } from '@angular/core';
import { VustvendordetService } from '../vustvendordet.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VustVendordet } from '../vustvendordet';

@Component({
  selector: 'app-vvendorlist',
  templateUrl: './vvendorlist.component.html',
  styleUrls: ['./vvendorlist.component.css']
})
export class VvendorlistComponent implements OnInit {
  vvendordets:Observable<VustVendordet[]>
  public popoverTitle:string ='Delete';
  public popoverMessage:string ='Do you want to delete ?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;
  constructor(private vvendordetService:VustvendordetService,private router: Router) { }

  ngOnInit() {

    this.reloadData();
  }  
  reloadData(){
    this.vvendordets=this.vvendordetService.getVVendorList();
  }
  deletevvendordet(vdId: number, vvendordet: VustVendordet) {
    this.vvendordetService.deletevvendordet(vdId, vvendordet)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updatevvendordet(vdId: number) {
    console.log(vdId);
    this.router.navigate(['home/updatevendor', vdId]);
  }
  editvvendordet(vdId: number) {
    console.log(vdId);
    this.router.navigate(['home/details', vdId]);
  }
  searchString:string;
  search(searchString){
    if(searchString!=null){
      this.vvendordets=this.vvendordetService.search(this.searchString);
    }
    else{
      this.reloadData();
    }
  }
 
}
