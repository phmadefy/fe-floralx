import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { InputFloatingComponent } from 'src/app/components/input-floating/input-floating.component';
import { DropdownCbComponent } from 'src/app/components/dropdown-cb/dropdown-cb.component';
import { ButtonCbComponent } from 'src/app/components/button-cb/button-cb.component';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AbstractForms } from 'src/app/shared/abstract-form';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-nft-classification-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    InputFloatingComponent,
    // SelectDefaultComponent,
    DropdownCbComponent,
    ButtonCbComponent,
    RouterLink,
  ],
  providers: [ApiService],
  templateUrl: './nft-classification-form.component.html',
  styleUrls: ['./nft-classification-form.component.scss'],
})
export class NftClassificationFormComponent extends AbstractForms {
  dados: any = { classifications: [] };

  constructor(service: ApiService, public tools: ToolsService) {
    service.path = 'v1/nft-classification';
    super(service);
  }

  ngOnInit(): void {
    if (history.state?.nft_classification_id) {
      this.getDados(history.state?.nft_classification_id);
    }
  }

  getDados(id: any) {
    this.loading = true;
    this.service
      .listing({ id })
      .then((res) => {
        console.log('res', res);
        this.dados = res;
      })
      .finally(() => (this.loading = false));
  }

  override submit(): void {
    if (this.dados.id) {
      this.update(this.dados, this.dados.id);
    } else {
      this.create(this.dados);
    }
  }
  override finish(result: any): void {
    // throw new Error('Method not implemented.');
    this.getDados(result.id);
  }

  async saveSubClassification(formSub: NgForm) {
    this.loading = true;
    await this.service
      .postCustom('v1/nft-classification', formSub.value)
      .then(async () => {
        formSub.resetForm();
        await this.getDados(this.dados.id);
      })
      .finally(() => (this.loading = false));
  }
}
