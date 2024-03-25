import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextiliaserviceService } from '../textiliaservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Cloth } from '../toj';


@Component({
  selector: 'app-addtoj',
  standalone: true,
  imports: [FormsModule, CommonModule,InputTextModule,ButtonModule],
  templateUrl: './addtoj.component.html',
  styleUrl: './addtoj.component.css'
})
export class AddtojComponent implements OnInit {

  pattern = '';

toj = new Cloth();
errorMessage!: string;

constructor(private _service:TextiliaserviceService,private _route:Router){ }
ngOnInit(): void {
 
}

addtojformsubmit()
{
  console.log("adding toj")
  this._service.addTojToDB(this.toj).subscribe({
    next: () => {
      console.log("data added successfully");
      this._route.navigate(['tojlist'])

    },
    error: (error) => {
      console.log("Exception occured")
      this.errorMessage = error;
    },
  });
}

gotoList(){
  console.log("go back");
  this._route.navigate(['tojlist'])
}
}
