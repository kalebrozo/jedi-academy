import { Component, OnInit, Input } from '@angular/core';
import {Student} from './studant.model'

@Component({
  selector: 'app-studant',
  templateUrl: './studant.component.html',
  styleUrls: ['./studant.component.css']
})
export class StudantComponent implements OnInit {

  @Input() studant: Student

  constructor() { }

  ngOnInit() {
  }
  clicked() {
    console.log('teste click', this.studant.name)
  }

}
