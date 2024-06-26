import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { RouterLink } from '@angular/router';
import { InputSearchComponent } from 'src/app/components/input-search/input-search.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { ApiService } from 'src/app/services/api.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-contact-us-public',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    SpinnerComponent,
    RouterLink,
    InputSearchComponent,
    PaginationComponent,
  ],
  providers: [ApiService],
  templateUrl: './contact-us-public.component.html',
  styleUrls: ['./contact-us-public.component.scss'],
})
export class ContactUsPublicComponent {
  dataSource: any = { data: [] };
  loading = false;

  filters: any = { per_page: 50, page: 1 };

  tab: string = 'actives';

  userCurrent: any = {};
  constructor(private service: ApiService, public tools: ToolsService) {
    service.path = 'v1/tickets';
  }

  async ngOnInit() {
    this.userCurrent = await this.tools.getCurrentUser();
    this.filters.user_id = this.userCurrent?.id;
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

  setTab(tab: string) {
    this.tab = tab;
    this.filters.status = tab;
    this.getList();
  }

  edit(item: any) {
    if (this.tools.checkRouteContainsAdmin()) {
      this.tools.route.navigate([`/admin/contact-us/detalhes`], {
        state: { contact_us_id: item.id },
      });
    } else {
      this.tools.route.navigate([`/fale-conosco/detalhes`], {
        state: { contact_us_id: item.id },
      });
    }
  }

  changePagination(page: number, per_page: number) {
    this.filters = { ...this.filters, page, per_page };
    this.getList();
  }
}
