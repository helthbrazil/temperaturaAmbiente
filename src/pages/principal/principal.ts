import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public statusBar: StatusBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  ionViewDidEnter(){
    this.statusBar.backgroundColorByHexString("#006666");
  }

  abrirConfiguracoes(){
    this.navCtrl.push("ConfiguracoesPage");
  }

}
