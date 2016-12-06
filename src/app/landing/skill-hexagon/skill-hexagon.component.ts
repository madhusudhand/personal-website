import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-hexagon',
  templateUrl: './skill-hexagon.component.html',
  styleUrls: ['./skill-hexagon.component.scss']
})
export class SkillHexagonComponent implements OnInit {

  @Input() label;

  constructor() { }

  ngOnInit() {
  }

}
