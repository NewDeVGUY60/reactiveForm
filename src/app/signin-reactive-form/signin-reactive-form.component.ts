import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../mail-validator';

@Component({
  selector: 'app-signin-reactive-form',
  templateUrl: './signin-reactive-form.component.html',
  styleUrls: ['./signin-reactive-form.component.scss']
})
export class SigninReactiveFormComponent {

  user!:any

  constructor(private fb : FormBuilder){}

  userForm = this.fb.group({
    userName: ['',[Validators.required]],
    userMail: ['',[Validators.required, emailValidator]],
    userPassword: ['', [Validators.required, passwordValidator]],
    userAdress: this.fb.group({
      userStreet: ['',[Validators.required]],
      userZipCode: ['',[Validators.required]],
      userCity: ['',[Validators.required]]
    })
  });

  onSubmit(){
    this.user = this.userForm.value
    console.log(this.userForm.value)
  }



}

// Le but de ce challenge est de créer un formulaire d'inscription avec les informations suivantes :

// Nom d'utilisateur
// Email
// Mot de passe
// Adresse composée d'une rue, d'un code postal et d'une ville
// Lors du clique sur le bouton d'inscription, tu dois créer un nouvel utilisateur et afficher 
// ses informations en dessous du formulaire.

// Critères de validation
// Les champs du formulaire doivent être reliés à des FormControl
// Lors du clique sur le bouton Inscription tu dois créer un nouvel objet du type User
// Le nouvel objet user créé lors de l'inscription doit contenir les informations tapées 
// par l'utilisateur dans le formulaire
// Les informations du nouvel utilisateur créé doivent s'afficher sous le formulaire.
// Attention, aucun ngModel ne sera toléré pour ce formulaire, ça voudrait dire que tu 
// utilises le template driven form !