import { Component, OnInit } from '@angular/core';
import { LogService } from './../../services/log.service';
import { Log } from './../../models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  public logs: Log[];

  constructor(private log: LogService) { }

  ngOnInit() {
    this.log.getLogs().subscribe(logs => this.logs = logs)
  }

  public onSelect(log: Log) {
    this.log.setFormLog(log);
  }

}
