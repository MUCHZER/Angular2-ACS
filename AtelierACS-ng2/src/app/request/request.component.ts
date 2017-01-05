import { Component } from '@angular/core';

// Import du module de requete http d'Angular2
import { Http } from '@angular/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})

export class RequestComponent {

  // Declaration du tableau de résultat
  result: Array<any>;
  error: Array<any>;
  apiURL = 'http://localhost:8080/';

  // Ajoute de la var http depuis l'import Http
  constructor(private http: Http) { }

  /**
  * function reqButton
  * @param id - id de la requete
  * @return true
  */
  reqButton( id ) {

    // A chaque lancement de la requete on remet les variables a 0
    this.result = [];
    this.error = [];

    // Requete en GET ( url )
    this.http.get( this.apiURL + 'button/' + id )
      .map(response => response.json()) // map récupere la réponse de facon async
      .subscribe( // un fois que le résultat de la requete est entier s'execute
        (result) => { // si il y'a un résultat
          this.result = result.res;
        },
        (err) => { // si il y'a une erreur
          this.error = err;
          console.log( 'Erreur !' );
        },
        () => { // une fois que la req et les functions sont terminés
          console.log( 'Requete terminé' );
          return true; // fin de la function
        }
      );

  }

  /**
  * Hésite pas à documenter aussi :)
  */
  reqTest() {
    // Creer votre req POST sur test/ et afficher le resultat
    // Cadeau :
    // https://angular.io/docs/ts/latest/api/http/index/Http-class.html
  }

}
