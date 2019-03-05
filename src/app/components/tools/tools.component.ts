import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, flip, swing } from 'ng-animate';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  animations: [
    trigger('flip', [transition('* => *', useAnimation(flip))]),
    trigger('swing', [transition('* => true', useAnimation(swing))])
  ],
})
export class ToolsComponent implements OnInit {
  bounce: any;

  angularHover = false;
  nodejsHover = false;
  graphqlHover = false;
  mongodbHover = false;

  angularFlipped = false;
  nodejsFlipped = false;
  graphqlFlipped = false;
  mongodbFlipped = false;

  constructor() { }

  ngOnInit() {
  }

  hoverTool(hoverTrigger) {
    this[hoverTrigger] = true;
  }

  flipTool(toolTrigger) {
    this[toolTrigger] = true;
  }

  unhoverTool(hoverTrigger, flipTrigger) {
    this[hoverTrigger] = false;
    this[flipTrigger] = false;
  }

}
