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
  public selectedLog: Log;
  public loaded = false;

  constructor(private log: LogService) { }

  ngOnInit() {
    this.log.stateClear.subscribe(
      clear => {
        if (clear) {
          this.selectedLog = { id: '', text: '', date: '', };
        }
      }
    );

    this.log.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }

  public onSelect(log: Log) {
    this.log.setFormLog(log);
    this.selectedLog = log;
  }

  public onDelete(log: Log) {
    if (confirm('Are you sure ?')) {
      this.log.deleteLog(log);
    }
  }

}
