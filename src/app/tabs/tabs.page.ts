import { Component } from '@angular/core';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private myService:ServiciosService) {}

  mostrar()
{
  console.warn(this.myService.elemento);
  
}}
