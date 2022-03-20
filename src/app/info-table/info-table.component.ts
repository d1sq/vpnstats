import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../http-service.service';
import { User } from './models';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss'],
})
export class InfoTableComponent implements OnInit, OnDestroy {
  constructor(private httpService: HttpService) {}

  mySubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.mySubscription = this.httpService
      .getData()
      .subscribe((data: User[]) => (this.listOfData = data));
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  listOfData: User[] = [];

  update() {
    this.ngOnInit();
  }
}
