import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableModel } from '../../model/table.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent {
  displayedColumns: string[] = ['title', 'rows', 'columns', 'notes'];
  @Input({ required: true }) dataSource: TableModel[] = [];
}
