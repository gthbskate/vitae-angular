import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public textDevEs: string;
  public textDevEn: string;
  public textHtml : string;
  public textGit : string;
  public textSass : string;
  public textJquery : string;
  public textCss : string;
  public textGithub : string;
  public textAngular : string;
  public textUxui : string;
  public textJs : string;
  public textMat : string;
  public textReact : string;
  public textScrum : string;
  public textBooots : string;
  public textWordpress : string;
  public textVue : string;
   
  constructor() { 

   }

  ngOnInit() {
    this.textDevEs = 'Desarrollador Web Front End /';
    this.textDevEn = 'Developer Web Front End';
    this.textHtml = 'HTML5';
    this.textGit = 'GIT';
    this.textSass = 'SASS';
    this.textJquery = 'JQUERY';
    this.textCss = 'CSS3';
    this.textGithub = 'GITHUB';
    this.textAngular = 'ANGULAR';
    this.textUxui = 'UX / UI';
    this.textJs = 'JAVASCRIPT';
    this.textMat = 'MATERIALIZE';
    this.textReact = 'REACT';
    this.textScrum = 'SCRUM';
    this.textBooots = 'BOOTSTRAP';
    this.textWordpress = 'WORPRESS';
    this.textVue = 'VUE';
  }

}
