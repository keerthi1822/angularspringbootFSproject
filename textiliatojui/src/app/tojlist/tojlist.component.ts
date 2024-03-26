import { Component, OnInit, computed, signal } from '@angular/core';
import { TextiliaserviceService } from '../textiliaservice.service';
import { Router } from '@angular/router';
import { Cloth } from '../toj';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';

/* interface Cloth {
  id: bigint;
  name: string;
  size: number;
  color:number;
  created_timestamp: Date | undefined;
  updated_timestamp: Date | undefined;
} */


@Component({
  selector: 'app-tojlist',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, TableModule, ProgressSpinnerModule, MessageModule],
  templateUrl: './tojlist.component.html',
  styleUrl: './tojlist.component.css'
})
export class TojlistComponent implements OnInit {

//state
  $clothes: Cloth[];
  $message: String;
  $loadingClothes: boolean=false;
  $errorMessage: {};

  constructor(private _service: TextiliaserviceService, private _route: Router) {

  }
//runs on load method
  ngOnInit() {
    //setting loading true while get data request is processing
    this.$loadingClothes = true;
    this._service.fetchTojListFromBE().subscribe({
      next: (posts) => {
        this.$clothes = posts;
        if (this.$clothes.length == 0) {
          this.$message="please enter the data in to Database";
        }
        console.log("data received",posts);
       
      },
      error: (error) => {
        console.log("Exception occured", error)
        this.$errorMessage = error;
      },
    });
    this.$loadingClothes = false;
  }

  goToAddToj() {
    this._route.navigate(['/addtoj'])
  }
}


