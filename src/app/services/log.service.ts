import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable()
export class LogService {

  public logs: Log[];

  constructor() {
    this.logs = [
      { id: '1', text: 'Genereted Components', date: new Date('12/26/2017 12:54:23') },
      { id: '2', text: 'Added Components', date: new Date('1/26/2017 12:54:23') },
      { id: '3', text: 'Genereted Components', date: new Date('4/26/2017 12:54:23') },
    ];
  }

  public getLogs(): Log[] {
    return this.logs;
  }

}
