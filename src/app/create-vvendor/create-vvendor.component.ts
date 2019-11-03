import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { VustVendordet } from '../vustvendordet';
import { VustvendordetService } from '../vustvendordet.service';

@Component({
  selector: 'app-create-vvendor',
  templateUrl: './create-vvendor.component.html',
  styleUrls: ['./create-vvendor.component.css']
})
export class CreateVvendorComponent implements OnInit {

  vvendordet: VustVendordet = new VustVendordet();
  submitted: boolean;
  vvendordets: Observable<VustVendordet[]>
  angForm: FormGroup;
  constructor(private toastr: ToastrService, private vvendordetService: VustvendordetService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      vdName: ['', Validators.required,Validators.minLength(3)],
      vdAddr: ['', Validators.required,Validators.minLength(3)],
      vdLocation: ['', Validators.required,Validators.minLength(3)],
      vdService: ['', Validators.required,Validators.minLength(3)],
      vdPin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+')]],
      cpName: ['', Validators.required,Validators.minLength(3)],
      cpDepartment: ['', Validators.required,Validators.minLength(3)],
      cpEmail: ['', Validators.email],
      cpPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]]

    });
  }
  onSubmit() {
    this.submitted = true;
    this.vvendordet = new VustVendordet();
    this.vvendordet.vdName = this.angForm.controls.vdName.value;
    this.vvendordet.vdAddr = this.angForm.controls.vdAddr.value;
    this.vvendordet.vdLocation = this.angForm.controls.vdLocation.value;
    this.vvendordet.vdService = this.angForm.controls.vdService.value;
    this.vvendordet.vdPin = this.angForm.controls.vdPin.value;
    this.vvendordet.cpName = this.angForm.controls.cpName.value;
    this.vvendordet.cpDepartment = this.angForm.controls.cpDepartment.value;
    this.vvendordet.cpEmail = this.angForm.controls.cpEmail.value;
    this.vvendordet.cpPhone = this.angForm.controls.cpPhone.value;

    this.vvendordetService.duplicatecheck(this.vvendordet.cpPhone, this.vvendordet.cpEmail).subscribe(
      data => {
        console.log(data);
        if (data != null) {
          this.toastr.error('Duplicate Entry', 'UST');
          this.router.navigate(['home/addvvendor']);
        }
      }, error => this.save());
  }

  save() {
    this.vvendordetService.createvvendordet(this.vvendordet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.toastr.success('Vendor Created Refresh to View List', 'UST');
    this.vvendordets = this.vvendordetService.getVVendorList();
    this.vvendordetService.getVVendorList();
    this.gotoList();
  }
  gotoList() {
    this.vvendordets = this.vvendordetService.getVVendorList();
    this.vvendordetService.getVVendorList();
    this.router.navigate(['home/vvendorlist']);
  }

}
