import { Component, OnInit } from '@angular/core';
import { YService } from '../y.service';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  cambio: any = [];
  valor: any = 0;
  seleccion = 'EUR';

  constructor(private request: YService) {}

  ngOnInit(): void {
    this.request.getCambios().subscribe((res: any) => {
      for (const key in res.rates) {
        this.cambio.push({ name: key, value: res.rates[key] });
      }
    });
  }
  cambioMoney(event: any) {
   
   const base = (event.target as HTMLSelectElement).value
    this.request.getOtherCa(base).subscribe((res: any) => {
      this.cambio= [];
      for (const key in res.rates) {
        this.cambio.push({ name: key, value: res.rates[key] });
      }
});}
  }
