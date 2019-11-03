import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VustVendordet } from '../vustvendordet';
import { VustvendordetService } from '../vustvendordet.service';
@Component({
  selector: 'app-vvendor-details',
  templateUrl: './vvendor-details.component.html',
  styleUrls: ['./vvendor-details.component.css']
})
export class VvendorDetailsComponent implements OnInit {

  vdId:number;
  vvendordet:VustVendordet;
  constructor(private route: ActivatedRoute, private router: Router,
    private vvendordetservice:VustvendordetService) { }

  ngOnInit() {
    this.vvendordet = new VustVendordet();
    this.vdId = this.route.snapshot.params['vdId'];
    this.vvendordetservice.getvvendordet(this.vdId)
    .subscribe(data => {
      console.log(data)
      this.vvendordet =data;
    },error => console.log(error));
  }
  list() {
    this.router.navigate(['home/vvendorlist']);
  }

}
