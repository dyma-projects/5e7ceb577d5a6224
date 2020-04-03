import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {  
  
  @Input() compteur;
  @Output("compteurChangementEnfant") changementCompteur = new EventEmitter();

  constructor() { }

  public incrementerCompteur() : void {
    this.compteur ++;    
    this.changementCompteur.emit({value : this.compteur});
  }

  public decrementerCompteur() : void {
    this.compteur --;    
    this.changementCompteur.emit({value : this.compteur});
  }

  ngOnInit() {
  }

}
