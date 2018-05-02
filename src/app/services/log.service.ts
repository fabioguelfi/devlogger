import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LogService {

  public logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  public selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Genereted Components', date: new Date('12/26/2017 12:54:23') },
      { id: '2', text: 'Added Components', date: new Date('1/26/2017 12:54:23') },
      { id: '3', text: 'Genereted Components', date: new Date('4/26/2017 12:54:23') },
    ];
  }

  public getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  public setFormLog(log: Log) {
    this.logSource.next(log);
  }

}
