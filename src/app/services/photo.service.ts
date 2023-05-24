import { Injectable } from '@angular/core';

//Codigo agregado 
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor() { }

  //Arreglo para guardar fotos
  public photos: UserPhoto[] = [];


  //Funcion-constructor para tomar la foto

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    //Guardar la foto 
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
  }

  }


//Creación interfaz para almacenar la foto
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}


