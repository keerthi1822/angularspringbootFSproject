import { Component, OnInit, computed, signal } from '@angular/core';
import { TextiliaserviceService } from '../textiliaservice.service';
import { Router } from '@angular/router';
/* import { Cloth } from '../toj'; */
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { exhaustMap, finalize, tap, timer } from 'rxjs';

interface Cloth {
  id: bigint;
  name: string;
  size: number;
  color:number;
  created_timestamp: Date | undefined;
  updated_timestamp: Date | undefined;
}


@Component({
  selector: 'app-tojlist',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, TableModule],
  templateUrl: './tojlist.component.html',
  styleUrl: './tojlist.component.css'
})
export class TojlistComponent implements OnInit {

/*   cloths: Array<Cloth> = [];
  errorMessage!: string;
  state: any; */

  public state:any = {
    $clothes: signal<Cloth[]>([]),
    $loadingClothes: signal<boolean>(false),
    $errorMessage: signal<String>
  } as const;

  public  $clothes = this.state.$clothes;
  
  public  $loadingClothes = this.state.$loadingClothes;
 
  public  $loading = computed(() => this.$loadingClothes());

  
  constructor(private _service: TextiliaserviceService, private _route: Router) { 

    /* this.getClothes(); */
  }

  ngOnInit() {

   this._service.fetchTojListFromBE().subscribe({
    next: (posts) => {
      this.state.$clothes = posts;
      console.log(this.state);
      console.log("data received");
    },
    error: (error) => {
      console.log("Exception occured")
      this.state.$errorMessage = error;
    },
  });
  }


 /*  getCloths() : void{
    this._service.fetchTojListFromBE().subscribe({
      next: (posts) => {
        this.state = posts;
        console.log(this.state);
        console.log("data received");
      },
      error: (error) => {
        console.log("Exception occured")
        this.state.errorMessage = error;
      },
    });
  } */
  isEmpty() {
    if (this.state.clothes == null) {
      return true;
    }
    else { return false; }
  }

  goToAddToj() {
    console.log("add toj")
    this._route.navigate(['/addtoj'])
  }
}


