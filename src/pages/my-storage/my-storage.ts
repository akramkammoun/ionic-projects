import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-my-storage',
  templateUrl: 'my-storage.html',
})
export class MyStoragePage implements OnInit {

  person: Person;

  constructor(private storage: Storage) {
    // console.log('constructeur');
    // this.person = new Person('ali');
    // this.person = new Person('ali', 'saleh');
  }

  ngOnInit(): void {
    // console.log('ngOnInit');

    this.person = new Person();

    // Or to get a key/value pair
    this.storage.get('personne').then((person: Person) => {
      // console.log('Personne: ', val);
      this.person = person;
      console.log('1');
    });
    console.log('2');

  }

  save() {
    this.storage.set('personne', this.person);
  }
}
