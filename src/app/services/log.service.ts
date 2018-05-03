import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LogService {

  public logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  public selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  public stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id: '1', text: 'Genereted Components', date: new Date('12/26/2017 12:54:23') },
    //   { id: '2', text: 'Added Components', date: new Date('1/26/2017 12:54:23') },
    //   { id: '3', text: 'Genereted Components', date: new Date('4/26/2017 12:54:23') },
    // ];

    this.logs = [];
  }

  public getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  public setFormLog(log: Log) {
    this.logSource.next(log);
  }

  public addLog(log: Log) {
    this.logs.unshift(log);
  }

  public updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  public deleteLog(log: Log) {
    for (let i = 0; i < this.logs.length; i++) {
      if (log.id === this.logs[i].id) {
        this.logs.splice(i, 1);
      }
    }
  }

  public clearState() {
    this.stateSource.next(true);
  }

}
