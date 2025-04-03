import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'subjects';
  Subj:Subject<any>  = new Subject();
  Obervable:Observable<any> |undefined;
  ngOnInit() {
    this.Obervable = new Observable(observer => {
      observer.next(Math.random());
      observer.next(Math.random());
    })
    this.Obervable.subscribe(res => {
      console.log("Obervable Subscriber 1", res);
    })
    this.Obervable.subscribe(res => {
      console.log("Obervable Subscriber 2", res);
    })

    this.Subj.subscribe(subjRes =>{
      console.log("Subject Subscriber 1", subjRes);

    })
    this.Subj.subscribe(subjRes =>{
      console.log("Subject Subscriber 2", subjRes);

    })

    this.Subj.next(Math.random());
    this.Subj.next(Math.random());
  }
}
