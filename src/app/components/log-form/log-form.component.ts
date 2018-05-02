import { Component, OnInit } from '@angular/core';
import { LogService } from './../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  public id: string;
  public text: string;
  public date: any;

  constructor(private log: LogService) { }

  ngOnInit() {
    // subscribe  to the selected log observable
    this.log.selectedLog.subscribe((log: Log) => {
      if (log !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

}
