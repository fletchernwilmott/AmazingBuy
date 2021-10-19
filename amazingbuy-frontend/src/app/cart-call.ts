import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class CartCall {
  public editDataDetails: any = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: number) {
    this.messageSource.next(message);
  }
}
