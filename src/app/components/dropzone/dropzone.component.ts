import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'dropzone',
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule],
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent {
  fileToUpload!: File;
  @Input() files: File[] = [];
  @Input() extends = 'image/*';
  @Input() multiple = true;

  @Output()
  changeFile: EventEmitter<File | File[]> = new EventEmitter<File | File[]>();

  ngOnInit() {
    console.log('extends', this.extends);
  }

  onFileSelected(event: any) {
    console.log('onFileSelected', event);
    this.files = event.addedFiles;
    this.changeFile.emit(event.addedFiles);
  }

  onRemove(event: any) {
    console.log('onRemove', event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
