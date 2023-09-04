import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLikeComponent } from 'src/app/components/btn-like/btn-like.component';
import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'modal-nft-detail',
  standalone: true,
  imports: [CommonModule, BtnLikeComponent, DialogModule],
  templateUrl: './modal-nft-detail.component.html',
  styleUrls: ['./modal-nft-detail.component.scss'],
})
export class ModalNftDetailComponent {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {}
}
