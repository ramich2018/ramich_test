import { Component, OnInit } from '@angular/core';
import { PasswordForgetService } from './../../service/password-forget.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.css']
})
export class PasswordForgotComponent implements OnInit {
  email: string;

  constructor(private passwordForgetService: PasswordForgetService,
    private modalService: NzModalService, ) { }

  ngOnInit() {
  }
  forget() {
    this.passwordForgetService.saveForget(this.email).subscribe(
      data => {
        this.modalService.success({
          nzTitle: 'Information',
          nzContent: '<p>Un lien de récupération de votre mot de passe vous a été envoyé !</p>',
          nzOnOk: () => console.log('Info OK')
        });

      }, (eror: HttpErrorResponse) => {
        console.log('Echec !')
      }
    );
  }
}
