import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';

import { take } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  allCategories: ICategory[] = [];
  public editType = 'fullRow';
  public rowData: ICategory[] = [];
  private gridApi!: GridApi;
  selectedRows: ICategory[] = [];
  public rowSelection: 'single' | 'multiple' = 'single';
  constructor(
    private http: HttpClient,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  category: ICategory[] = [];
  ngOnInit(): void {}

  columns = [
    { headerName: 'ID', field: 'id', width: 90, minWidth: 50 },
    {
      headerName: 'CATEGORY_TITLE',
      field: 'categoryTitle',
      width: 90,
      minWidth: 50,
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.categoryService
      .readAllCategory()
      .pipe(take(1))
      .subscribe((category: ICategory[]) => {
        this.rowData = category;
      });
  }

  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
  }

  onDelete() {
    this.gridApi.applyTransaction({ remove: this.selectedRows });
  }

  onAddition() {
    this.gridApi.applyTransaction({ add: [{}] });
  }
}
