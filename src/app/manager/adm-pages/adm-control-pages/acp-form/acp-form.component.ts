import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  sections = [
    {id: 1, name: 'IT-инфраструктура'},
    {id: 2, name: 'Сервисная поддержка'}
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    this.page = changes.page.currentValue;
    this.form = this.formBuilder.group({
      id: [this.page ? this.page.id : null],
      title: [this.page ? this.page.title : null, [Validators.required, Validators.maxLength(50)]],
      groupIsHomePage: this.formBuilder.group({
        description: [this.page ? this.page.description : null, [Validators.maxLength(180)]],
        isHome: [this.page ? this.page.isHomePage : false]
      }, {validator: this.validatorForGroupIsHomePage}),
      groupIsMenu: this.formBuilder.group({
        text: [this.page ? this.page.text : null],
        isMenu: [this.page ? this.page.isMenu : false]
      }, {validator: this.validatorForGroupIsMenu}),
      section: [this.page ? this.page.section : null, [Validators.required]]
    });
  }

  validatorForGroupIsHomePage(group: FormGroup) {
    const descriptionControl = group.controls['description'].value;
    const isHomeControl = group.controls['isHome'].value;
    if (!descriptionControl && isHomeControl === true) {
      return {'fieldRequiredError': true};
    }
    return null;
  }

  validatorForGroupIsMenu(group: FormGroup) {
    const textControl = group.controls['text'].value;
    const isMenuControl = group.controls['isMenu'].value;
    if (!textControl && isMenuControl === true) {
      return {'fieldRequiredError': true};
    }
    return null;
  }

  closeFormPage() {
    this.hideFormPage.emit();
  }

  onSubmit() {
    let {title, groupIsHomePage, groupIsMenu, section} = this.form.value;
    const newPage = new Page(title, groupIsHomePage.description, groupIsMenu.text, groupIsMenu.isMenu, groupIsHomePage.isHome, section);
    if (!this.page) {
      this.onPageAdd.emit(newPage);
      this.form.reset();
    } else {
      newPage.id = this.page.id;
      this.onPageEdit.emit(newPage);
      this.form.reset();
    }
  }

}
