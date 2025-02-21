import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss'],
})
export class ExperimentComponent implements OnInit {
  public title = 'ang16_demo_linting';

  ngOnInit() {
    console.log('ExperimentComponent ngOnInit');
  }
  constructor(){
    console.log("constructor");
    if(this.title === this.title){
      console.log("true is true");

    }
  };
}
