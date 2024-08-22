import { Injectable } from '@angular/core';
import { ApiEnum } from '@app/core/enums/api';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  static generateUrl(url: ApiEnum): string {
    return `${environment.apiUrl}${url}`;
  }
}
