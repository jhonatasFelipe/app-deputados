import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import Conta from 'src/app/Classes/Conta';
import { ContaService } from 'src/app/services/conta/conta.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastrado: boolean = false;
  load : HTMLIonLoadingElement;
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  constructor(private service:ContaService, private loading:LoadingController, private router:Router) { }

  ngOnInit() {
    this.service.teste().subscribe((res)=>{console.log(res)});
    
  }

  async onSubmit(){
    let conta = new Conta();
    conta = this.form.value;
    await this.initLoading();
    await this.load.present();
    this.service.new(conta,undefined,'create').subscribe(
    (resp:Conta)=>{
      this.cadastrado = true;
      this.load.dismiss();
    },
    (error)=>{
      console.log(JSON.stringify(error))
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

  gotoLogin(){
    this.router.navigate(['/login']);
  }

}
