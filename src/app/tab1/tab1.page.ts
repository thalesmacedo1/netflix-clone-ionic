import { Component } from '@angular/core';
// importação para usar o modal
import { MoviePage } from '../movie/movie.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
// implementação da classe para usar o modal
  constructor(
    public modalController: ModalController
  ) {}

  async openMovie() {
    const modal = await this.modalController.create({
      component: MoviePage
    });
    return await modal.present();
  }
}
