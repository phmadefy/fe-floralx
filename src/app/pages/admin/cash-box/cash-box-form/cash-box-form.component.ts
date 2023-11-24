import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { SelectDefaultComponent } from 'src/app/components/select-default/select-default.component';
import { ToolsService } from 'src/app/services/tools.service';
import { DropdownCbComponent } from 'src/app/components/dropdown-cb/dropdown-cb.component';
import { ButtonCbComponent } from 'src/app/components/button-cb/button-cb.component';
import { InputFloatingComponent } from 'src/app/components/input-floating/input-floating.component';
import { AbstractForms } from 'src/app/shared/abstract-form';
import { ApiService } from 'src/app/services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cash-box-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    InputFloatingComponent,
    SelectDefaultComponent,
    DropdownCbComponent,
    ButtonCbComponent,
    RouterLink,
  ],
  providers: [ApiService],
  templateUrl: './cash-box-form.component.html',
  styleUrls: ['./cash-box-form.component.scss'],
})
export class CashBoxFormComponent extends AbstractForms {
  admins: any[] = [];
  users: any[] = [];
  dados: any = { active: true, balance: 0 };

  constructor(service: ApiService, public tools: ToolsService) {
    service.path = 'v1/admin/cashiers';
    super(service);
  }

  ngOnInit(): void {
    if (history.state?.cashiers_id) {
      this.getDados(history.state?.cashiers_id);
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

  setAdmin(admin: any) {
    console.log('setAdmin', admin);
    if (admin) {
      this.admins.push(admin);
    }
  }
  openDeleteAdmin(item: any) {}

  setUser(user: any) {
    console.log('setUser', user);
    if (user) {
      this.users.push(user);
    }
  }
  openDeleteUser(item: any) {}
}