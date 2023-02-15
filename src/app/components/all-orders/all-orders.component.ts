import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { take } from 'rxjs/operators';
import { IOrder } from 'src/app/interfaces/order.interface';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  public editType = 'fullRow';
  public rowData: IOrder[] = [];
  private gridApi!: GridApi;
  constructor(private orderService: OrderDetailsService) {}

  ngOnInit(): void {}
  // column heading in ag gird
  columns = [
    { headerName: 'Order ID', field: 'id', width: 50, minWidth: 20 },
    { headerName: 'Order ', field: 'product', width: 50, minWidth: 20 },
    { headerName: 'Order Price', field: 'price', width: 50, minWidth: 20 },
    {
      headerName: 'Order Delivery Status',
      field: 'status',
      width: 50,
      minWidth: 20,
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };
  // get details of all the order thru api
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.orderService
      .onViewOrders()
      .pipe(take(1))
      .subscribe((allorder: IOrder[]) => {
        this.rowData = allorder;
      });
  }
}
