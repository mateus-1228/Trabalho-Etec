import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../service/filmes.service';

@Component({
  selector: 'app-detalhefilmes',
  templateUrl: './detalhefilmes.page.html',
  styleUrls: ['./detalhefilmes.page.scss'],
})
export class DetalhefilmesPage implements OnInit {

  constructor(private filmeServices:FilmesService) { }

  ngOnInit() {
  }
    
}
