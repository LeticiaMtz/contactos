import { Component } from '@angular/core';
import { ServiciosService } from '../servicios/servicios.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public myService:ServiciosService, public alertController: AlertController) {}
  mostrar(){
    console.log(this.myService.elemento);
  }
}
