import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  static generateUrl(url: string): string {
    return `${environment.apiUrl}${url}`;
  }
}
