import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  article = {
    title: 'My first awesome article',
    content: 'This content is super interesting',
  };

  public messages: string[] = [];

  showMessageFromChild(msg: string): void {
    this.messages.push(msg);
  }
}
