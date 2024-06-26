import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { InputSearchComponent } from 'src/app/components/input-search/input-search.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToolsService } from 'src/app/services/tools.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-modal-nft-search',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    InputSearchComponent,
    FormsModule,
    SpinnerComponent,
  ],
  providers: [ApiService],
  templateUrl: './modal-nft-search.component.html',
  styleUrls: ['./modal-nft-search.component.scss'],
})
export class ModalNftSearchComponent {
  dataSource: any = { data: [] };
  loading = false;
  filters: any = {};

  constructor(
    private service: ApiService,
    public tools: ToolsService,
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    service.path = 'v1/nft';
  }

  ngOnInit(): void {
    if (this.data?.user_id) {
      this.filters.user_id = this.data?.user_id;
    }
    this.getList();
  }

  getList() {
    this.loading = true;
    this.service
      .listing(this.filters)
      .then((res) => {
        this.dataSource = res;
      })
      .finally(() => (this.loading = false));
  }
}
