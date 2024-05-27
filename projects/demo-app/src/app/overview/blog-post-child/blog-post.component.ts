import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Output() newMessage = new EventEmitter<string>();

  passMessageToParent(): void {
    this.newMessage.emit('message from child');
  }
}
