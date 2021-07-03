import { Component, OnInit } from '@angular/core';
import { Halacha } from 'src/app/classes/halacha';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HalachaService } from 'src/app/shared/services/halacha.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';


@Component({
  selector: 'app-add-halacha',
  templateUrl: './add-halacha.component.html',
  styleUrls: ['./add-halacha.component.scss']
})
export class AddHalachaComponent implements OnInit {

  halacha: Halacha = new Halacha();

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    width: 'auto',
    minHeight: '5rem',
    placeholder: '',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['undo', 'redo', 'strikeThrough', 'subscript', 'superscript'],
      [
        'fontSize',
        'heading',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ],
  };

  constructor(public halachaService: HalachaService,
    public router: Router,
    public tokenService: TokenStorageService) { }

  ngOnInit(): void {
  }

  send() {
    var user = this.tokenService.getUser();
    if (user)
      this.halacha.entryByUser = user._id;
    this.halacha.status = 1;
    this.halachaService.create(this.halacha).subscribe(res => {
      this.router.navigate(["admin/halachots"]);
    })
  }

}
