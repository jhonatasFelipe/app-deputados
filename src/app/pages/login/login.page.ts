import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import User from 'src/app/Classes/User';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  load : HTMLIonLoadingElement;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService:LoginService, 
              private router:Router, 
              private loading:LoadingController ) { }

  ngOnInit() {
  }

  async onSubmit(){
      await this.initLoading();
      await this.load.present();
    this.loginService.new(this.form.value).subscribe((resp:any)=>{
      
      let dados = Object.keys(resp.data);
      console.log(resp);
      dados.forEach((key:string)=>{
        localStorage.setItem(key,resp.data[key]);
      });
      this.load.dismiss();
      this.router.navigate(['/home']);
    });
  }

  async initLoading(){
    this.load =  await this.loading.create({
      spinner:"circular",
      showBackdrop: true,
      message: "Carregando Deputados...",
      translucent: true
    });
  }

  cadastrar(){
    this.router.navigate(['/cadastro']);
  }

}
