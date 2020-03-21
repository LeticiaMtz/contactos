import { Injectable } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
 contacto: any;
  constructor(public alertController: AlertController) {
    this.contacto={
      nombre: 'Lety',
      genero: 'Femenino'


    }
  }
  nombre: string
  genero: string
  telefono: number
  email: string
  notas: string
  nota: boolean
  contactos: boolean
  elemento: Array<any>  = [] as Array<any>
  async agregar(nombre) {
   this.nota = true;
   const datos ={
     nombre: this.nombre, 
     genero: this.genero, 
     telefono: this.telefono,
     email: this.email,
     notas: this.notas
   };
    this.elemento.push(datos);
    console.log(this.elemento);
    console.warn(datos);
    const alert = await this.alertController.create({
      header: 'Se agrego exitosamente',
      message:  `${nombre}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
          {
            text: 'Aceptar',
          handler: () => {
            console.log('Agregado');
            
          }

      }
    ]
    });
    await alert.present();
}
async eliminar(nota,nombre) {
  const alert = await this.alertController.create({
    header: '¿Estas seguro que deseas eliminar?',
    message: `${nombre}`,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, 
      {
        text: 'Aceptar',
        handler: () => {
          console.log('Confirm Okay');
          this.elemento.splice(nota,1)
          if(this.elemento.length === 0){
            this.nota = false
          }
        }
      }
    ]
  });
  //Hola buenas tardes
  await alert.present();

}
}
