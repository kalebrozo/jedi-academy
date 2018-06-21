import { Component } from '@angular/core';
import {Student} from './studant/studant.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    {name: 'Luke', isJedi:true, temple:'Coruscant'},
    {name: 'Leia', isJedi:false },
    {name: 'Han Solo', isJedi:false}
  ]
}
