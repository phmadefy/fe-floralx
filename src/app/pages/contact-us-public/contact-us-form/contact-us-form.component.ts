import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { InputFloatingComponent } from 'src/app/components/input-floating/input-floating.component';
import { ButtonCbComponent } from 'src/app/components/button-cb/button-cb.component';
import { RouterLink } from '@angular/router';
import { DropzoneComponent } from 'src/app/components/dropzone/dropzone.component';
import { ApiService } from 'src/app/services/api.service';
import { AbstractForms } from 'src/app/shared/abstract-form';
import { ToolsService } from 'src/app/services/tools.service';
import { ComboboxComponent } from 'src/app/components/combobox/combobox.component';
import { OptionsCall } from 'src/app/shared/properties';
import { AlertDisplayComponent } from 'src/app/components/alert-display/alert-display.component';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    InputFloatingComponent,
    ComboboxComponent,
    ButtonCbComponent,
    RouterLink,
    DropzoneComponent,
    AlertDisplayComponent,
  ],
  providers: [ApiService],
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent extends AbstractForms {
  dados: any = { active: true, balance: 0 };

  optionsCall = OptionsCall;
  files: File[] = [];

  constructor(service: ApiService, public tools: ToolsService) {
    service.path = 'v1/tickets';
    super(service);
  }

  ngOnInit(): void {
    if (history.state?.contact_us_id) {
      this.getDados(history.state?.contact_us_id);
    }
  }

  onFileSelected(event: any): void {
    this.files.push(...event);
    console.log('onFileSelected', this.files);
  }

  getDados(id: any) {
    this.loading = true;
    this.service
      .show(id)
      .then((res) => {
        console.log('res', res);
        this.dados = res;
      })
      .finally(() => (this.loading = false));
  }

  override submit(): void {
    const formData = new FormData();
    Object.keys(this.dados).forEach((key) => {
      if (typeof this.dados[key] == 'object') {
        formData.append(key, JSON.stringify(this.dados[key]));
      } else {
        formData.append(key, this.dados[key]);
      }
    });

    for (let file of this.files) {
      formData.append('attachments[]', file);
    }

    if (this.dados.id) {
      this.update(formData, this.dados.id);
    } else {
      this.create(formData);
    }
  }
  override finish(result: any): void {
    // throw new Error('Method not implemented.');
    // this.getDados(result.id);
    this.tools.route.navigate(['/fale-conosco'], {
      queryParams: { tab: 'all' },
    });
  }
}
