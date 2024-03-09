import { Component, OnInit } from '@angular/core';
import { FileModel } from '../../model/file.model';
import { DataService } from '../../service/data.service';
import { Subscription, take } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from '../table-view/table-view.component';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, MatListModule, MatExpansionModule, TableViewComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

  private dataSubscription: Subscription | undefined;
  items: FileModel[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.getDataFromServer().pipe(take(1)).subscribe( data => this.items = data);
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
