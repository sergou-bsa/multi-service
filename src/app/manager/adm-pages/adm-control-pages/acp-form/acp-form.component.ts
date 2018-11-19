import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Page } from '../../../shared/models/page.model';

@Component({
  selector: 'mul-acp-form',
  templateUrl: './acp-form.component.html',
  styleUrls: ['./acp-form.component.css']
})
export class AcpFormComponent implements OnChanges {

  @Input() page: Page;
  @Output() onPageAdd = new EventEmitter<any>();
  @Output() onPageEdit = new EventEmitter<any>();
  @Output() hideFormPage = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.page = changes.page.currentValue;
    this.form = this.formBuilder.group({
      id: [this.page ? this.page.id : null],
      title: [this.page ? this.page.title : null, [Validators.required]],
      description: [this.page ? this.page.description : null],
      text: [this.page ? this.page.text : null],
      isMenu: [this.page ? this.page.isMenu : null, [Validators.required]],
      isHome: [this.page ? this.page.isHomePage : null, [Validators.required]],
      section: [this.page ? this.page.section : null, [Validators.required]]
    });
  }

  closeFormPage() {
    this.hideFormPage.emit();
  }

  onSubmit() {
    if (!this.page) {
      this.onPageAdd.emit(this.form.value);
      this.form.reset();
    } else {
      this.onPageEdit.emit(this.form.value);
      this.form.reset();
    }
  }

}
