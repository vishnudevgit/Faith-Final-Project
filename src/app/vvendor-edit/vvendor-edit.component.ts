import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { VustVendordet } from '../vustvendordet';
import { VustvendordetService } from '../vustvendordet.service';
@Component({
  selector: 'app-vvendor-edit',
  templateUrl: './vvendor-edit.component.html',
  styleUrls: ['./vvendor-edit.component.css']
})
export class VvendorEditComponent implements OnInit {
  vdId:number;
  vvendordet:VustVendordet;
  vvendordets:Observable<VustVendordet[]>;
  editvendorForm: FormGroup;
  
  constructor(private toastr: ToastrService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private vvendordetService: VustvendordetService) { }

  ngOnInit() {
    this.createForm();

    this.vdId = this.route.snapshot.params['vdId'];
    this.vvendordetService.getvvendordet(this.vdId)
      .subscribe(data => {
        console.log(data)
        this.vvendordet = data;
      }, error => console.log(error));
    console.log
  }
  createForm() {
    this.editvendorForm = this.fb.group({
      vdName: ['', Validators.required],
      vdAddr: ['', Validators.required],
      vdLocation: ['', Validators.required],
      vdService: ['', Validators.required],
      vdPin: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]+')]],
      cpName: ['', Validators.required],
      cpDepartment: ['', Validators.required],
      cpEmail: ['', Validators.email],
      cpPhone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')]]
    });
  }
  onSubmit() {
    this.updateAsset();
  }
  updateAsset() {

    this.vvendordetService.updateVvendordet(this.vdId, this.vvendordet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vvendordet = new VustVendordet();
    this.vvendordets= this.vvendordetService.getVVendorList();
    this.vvendordetService.getVVendorList();
    this.toastr.success('Successfully Updated', 'UST');

    this.gotoList();
  }
  gotoList() {
    this.vvendordets= this.vvendordetService.getVVendorList();
    this.vvendordetService.getVVendorList();
    this.router.navigate(['home/vvendorlist']);
  }

}
