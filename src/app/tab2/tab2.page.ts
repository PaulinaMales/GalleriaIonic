import { Component } from '@angular/core';

//Importamos metodo para tomar foto 
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 // constructor() {}

  
constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}


}
