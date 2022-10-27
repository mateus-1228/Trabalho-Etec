import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FilmesService } from '../service/filmes.service'; 
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class HomePage {
  filmes:any = []
  destaque: any;

  constructor(private FilmesService:FilmesService) {}
  
  async ngOnInit(){
    console.log('passou no home');
     this.FilmesService.getProductions();  
  }

  async carregaFilmes() {

    this.filmes = await this.FilmesService.getProductions();
    console.log("filmes carregados", this.filmes)
    const [firstKey] = Object.keys(this.filmes);
    this.destaque = this.filmes[firstKey];
   
    this.FilmesService.splice(firstKey, 1)
    console.log('firstKey', firstKey) 
    console.log('destaque',this.destaque)  
    console.log('filmes',this.filmes)
  }
}
