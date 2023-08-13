import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { Logout } from '../core/actions/auth.action';

@Injectable()
export class InterceptService implements HttpInterceptor {
  private returnUrl: string = '';

  constructor(
    private store: Store<AppState>,
    private router: Router // private message: MessageService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-debugger
    // modify request
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(environment.token)}`,
      },
    });
    // console.log('----request----');
    // console.log(request);
    // console.log('--- end of request---');

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            // console.log('event intercept', event);
            if (event.status == 201) {
              // this.message.toastSuccess(event.body.message, '');
            }
          }
        },
        (error) => {
          if (error.status == 0) {
            // this.message.alertNet();
          } else if (error.status == 401) {
            // this.message.toastError(error.error.message);

            // this.modalCtrl.dismissAll();

            this.store.dispatch(new Logout());
            // localStorage.removeItem(environment.token);
            // this.redirect.navigate(['/auth']);
          } else {
            let message = '';
            if (Array.isArray(error.error.erros)) {
              for (let err of error.error.erros) {
                message += `${err} \n`;
              }
            } else {
              message = error.error.message;
            }

            // this.message.toastError(message, 'Falha na requisição');
          }
        }
      )
    );
  }
}
