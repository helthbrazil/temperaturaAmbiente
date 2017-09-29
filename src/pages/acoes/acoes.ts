import { HttpUtil } from './../../services/httpUtil';
import { NetworkUtil } from './../../services/networkUtil';
import { Toast } from './../../componentesIonic/toast';
import { Loading } from './../../componentesIonic/loading';
import { Alertas } from './../../componentesIonic/alertas';
import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-acoes',
  templateUrl: 'acoes.html',
})
export class AcoesPage {
  public cep: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public statusBar: StatusBar, public alertas: Alertas,
    public loading: Loading, public toast: Toast, public networkUtil: NetworkUtil,
    public httpUtil: HttpUtil) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcoesPage');
  }

  ionViewDidEnter() {
    this.statusBar.backgroundColorByHexString("#006666");
  }

  deslizar(evento) {
    console.log(evento);
  }

  regarAPlanta() {
    this.networkUtil.checkNetwork(responsee => {
      let url: string = "https://viacep.com.br/ws/" + this.cep + "/json/"; 
      Loading.showLoading("Buscando CEP", Loading.CRESCENT, undefined);
      this.httpUtil.requestGet(url, {}, {},
        response => {
          let data = JSON.parse(response.data);
          this.alertas.simpleAlert("Endereço", "Rua:" + data.logradouro + " Bairro:" + data.bairro + " Cidade:" + data.localidade);
          Loading.dismissLoading();
        }, error => {
          console.error(error);
          this.toast.showToast("Cep inválido", Toast.BOTTOM, 4000);
          Loading.dismissLoading();
        });

      /*       setTimeout(() => {
              Loading.dismissLoading();
              this.toast.showToast("A planta foi regada com sucesso", Toast.BOTTOM, 3000);
            }, 3000); */
    }, error => {
      this.toast.showToast("Você não possui conectvidade com a internet", Toast.BOTTOM, 4000);
    });
  }

}
