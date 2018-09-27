import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Firebase';
  description = 'Angular-Firebase Demo';
 
  itemValue: String = '';
  items: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
    console.log(db.list('items').snapshotChanges())
  }
 
  onSubmit() {
    this.db.list('/items').push({ content: this.itemValue });
    this.itemValue = '';
  }
}
