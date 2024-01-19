import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { BtnLikeComponent } from '../btn-like/btn-like.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ToolsService } from 'src/app/services/tools.service';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DropdownCbComponent } from '../dropdown-cb/dropdown-cb.component';
import { MessageService } from 'src/app/services/message.service';
import { Dialog } from '@angular/cdk/dialog';
import { ModalViewCommentsComponent } from 'src/app/shared/modal-view-comments/modal-view-comments.component';

@Component({
  selector: 'post-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    BtnLikeComponent,
    RouterLink,
    DropdownCbComponent,
  ],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() dados: any = {};
  loading = false;
  userCurrent: any = {};

  @Output() delete = new EventEmitter<any>();

  constructor(
    public tools: ToolsService,
    private service: ApiService,
    private messageService: MessageService,
    private dialog: Dialog
  ) {}

  async ngOnInit() {
    this.userCurrent = await this.tools.getCurrentUser();
  }

  async sendComment(formComment: NgForm) {
    if (!formComment.valid) {
      return;
    }

    this.loading = true;
    await this.service
      .postCustom(`v1/posts/${this.dados.id}/comment`, formComment.value)
      .then((res) => {
        formComment.resetForm();
        this.getDados(this.dados.id);
      })
      .finally(() => (this.loading = false));
  }

  async getDados(id: any) {
    this.loading = true;
    await this.service
      .getCustom(`v1/posts/${id}`)
      .then((res) => {
        this.dados = res;
      })
      .finally(() => (this.loading = false));
  }

  getPersonsComments() {
    let text = '';
    if (this.dados?.comments?.length > 3) {
      const commentOne = this.dados?.comments[0];
      const commentTwo = this.dados?.comments[1];
      // const commentThree = this.dados?.comments[2];
      if (commentOne) {
        text += `${commentOne?.user?.name}`;
      }
      if (commentTwo) {
        text += `, ${commentOne?.user?.name}`;
      }

      text += ` e outras ${this.dados?.comments?.length - 2} pessoas`;
    } else {
      const commentOne = this.dados?.comments[0];
      const commentTwo = this.dados?.comments[1];
      // const commentThree = this.dados?.comments[2];
      if (commentOne) {
        text += `${commentOne?.user?.name}`;
      }
      if (commentTwo) {
        text += `, ${commentOne?.user?.name}`;
      }
    }

    return text;
  }

  async sendReact(event: any) {
    this.loading = true;
    await this.service
      .getCustom(`v1/posts/${this.dados.id}/interaction`, { name: event })
      .then(() => {
        this.getDados(this.dados.id);
      })
      .finally(() => (this.loading = false));
  }

  openEdit() {
    this.tools.route.navigate(['/feed/editar-post'], {
      state: { post_id: this.dados.id },
    });
  }
  openDelete() {
    const dialogRef = this.messageService.presentAlertConfirm(
      `Deseja excluir ?`,
      'Excluir Post'
    );

    dialogRef.closed.subscribe((result) => {
      if (result) {
        this.loading = true;
        this.service
          .deleteCustom(`v1/post/${this.dados.id}`)
          .then(async () => {
            this.delete.emit(true);
          })
          .finally(() => (this.loading = false));
      }
    });
  }

  openComments() {
    const dialogRef = this.dialog.open<any>(ModalViewCommentsComponent, {
      width: '95%',
      maxWidth: '850px',
      // height: '90%',
      data: this.dados,
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
