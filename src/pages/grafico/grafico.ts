import { DateUtil } from './../../services/dateUtil';
import { Toast } from './../../componentesIonic/toast';
import { Server } from './../../entity/server';
import { Loading } from './../../componentesIonic/loading';
import { Alertas } from './../../componentesIonic/alertas';
import { HttpUtil } from './../../services/httpUtil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html',
})
export class GraficoPage {
  public dias: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpUtil: HttpUtil, public alertar: Alertas,
    public loading: Loading, public toast: Toast, public dateUtil: DateUtil) {
  }

  restringirInput() {
    if (this.dias > 30) {
      this.toast.showToast("Quantidade máxima 30 dias", Toast.BOTTOM, 4000);
      this.dias = 30;
    } else if (this.dias <= 0 && this.dias.toString() != "") {
      this.toast.showToast("Dia mínimo 1, dia máximo 30", Toast.BOTTOM, 4000);
      this.dias = 1;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraficoPage');
  }

  fecharLoading() {
    Loading.dismissLoading();
  }

  buscarDados() {
    let dataAtual = new Date();
    let dataInicio = new Date();
    dataInicio.setDate(dataInicio.getDate() - this.dias);

    console.log(dataAtual.getTime());
    console.log(dataInicio.getTime());

    Loading.showLoading("Buscando dados", Loading.CRESCENT, undefined);

    let url = Server.URI_PREFIX + `?dataInicio=${this.dateUtil.dateToStringSimple(dataInicio)}&dataFim=${this.dateUtil.dateToStringSimple(dataAtual)}`;
    this.httpUtil.requestGet(url, {}, [], response => {
      this.fecharLoading();
    }, error => {
      this.fecharLoading();
    });
  }

}
