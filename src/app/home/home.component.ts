import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeService: any;



  ngOnInit(): void {
     this.loadHome();
  }

  loadHome() {
    this.homeService.getHome().subscribe(
      {
        
      }
    );

  }














}
