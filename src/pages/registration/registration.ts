import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  
  resposeData : any;
  userData = {"name":"","email":"","phone":""};
  constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider, public toastCtrl: ToastController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Please Input Proper Values',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  presentToast2() {
    let toast = this.toastCtrl.create({
      message: 'Successfully Registered',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  Register() {
    if(this.userData.name && this.userData.email && this.userData.phone) {
    this.AuthServiceProvider.postData(this.userData, "register").then((result) =>{
      this.resposeData = result;
      console.log("Successful");
      this.presentToast2();
      this.userData.name = "";
      this.userData.email = "";
      this.userData.phone = "";
      }, (err) =>{
      //failed
    });
  }
  else {
    console.log("Please input proper values");
    this.presentToast();
    
  }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
