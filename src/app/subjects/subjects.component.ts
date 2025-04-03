import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  imports: [FormsModule,CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  array: any = [];
  // subj: Subject<any> = new Subject(); // emits even not subscribed and emitted values are not pushed because not subscribed and changes to another value.
  // subj: Subject<any> = new ReplaySubject(2); // stores all previous value if depth not given if gave stores last indexes.
  // subj: Subject<any> = new BehaviorSubject(100); // we can set initial value and if emit any values it overrides the previous value. 
  subj: Subject<any> = new AsyncSubject();
  getData() {
    setTimeout(() => {
      this.subj.next(1);
    }, 1000)
    setTimeout(() => {
      this.subj.next(2);
    }, 2000)
    setTimeout(() => {
      this.subj.next(3);
    }, 3000)
    setTimeout(() => {
      this.subj.next(4);
    }, 4000)
  }

  Subscribe() {
    this.subj.complete();
    this.subj.subscribe(res =>{
      this.array.push(res);
    })
    
  }


}
