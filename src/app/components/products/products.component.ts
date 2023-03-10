import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  IDatasource,
  IGetRowsParams,
} from 'ag-grid-community';
import { EditService } from '@syncfusion/ej2-angular-grids';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProducts: IProduct[] = [];
  public editType = 'fullRow';
  public rowData: IProduct[] = [];
  private gridApi!: GridApi;
  public rowSelection: 'single' | 'multiple' = 'single';
  selectedRows: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  columns = [
    { headerName: 'ID', field: 'id', width: 50, minWidth: 20 },

    { headerName: 'TITLE', field: 'title', width: 90, minWidth: 50 },

    {
      headerName: 'DESCRIPTION',
      field: 'description',
      width: 90,
      minWidth: 50,
    },
    { headerName: 'QUANTITY', field: 'quantity', width: 90, minWidth: 50 },

    { headerName: 'PRICE', field: 'price', width: 90, minWidth: 50 },

    { headerName: 'BRAND', field: 'brand', width: 90, minWidth: 50 },

    { headerName: 'CATEGORY', field: 'category', width: 90, minWidth: 50 },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.productService
      .readAllProducts()
      .pipe(take(1))
      .subscribe((products: IProduct[]) => {
        this.rowData = products;
      });
  }
  // for selecting specific row
  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
  }
  //  for deleting specipic selected product
  onDelete() {
    this.gridApi.applyTransaction({ remove: this.selectedRows });
  }
  // for adding new products
  onAddition() {
    this.gridApi.applyTransaction({ add: [{}] });
  }
}
