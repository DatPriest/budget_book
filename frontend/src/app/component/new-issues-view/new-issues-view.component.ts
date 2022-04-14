import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-issues-view',
  templateUrl: './new-issues-view.component.html',
  styleUrls: ['./new-issues-view.component.css']
})
export class NewIssuesViewComponent implements OnInit {

  newIssuesForm!: FormGroup;
  index: number = 1;
  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.index;
  }

  back(): void {
    this.router.navigate(['/issues']);
  }

  add(): void {
   this.index++;
  }

  save(signUpForm: NgForm): void {
    console.log(signUpForm.value);
    this.router.navigate(['/issues']);
  }

  ngOnInit(): void {
    this.newIssuesForm = this.formBuilder.group({
      subject: '',
      amount: '',
      date: ''
    });
  }

}
