import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  RowNodeTransaction,
} from 'ag-grid-community';
import { take } from 'rxjs/operators';
import { ICoupon } from 'src/app/interfaces/coupon.interface';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
})
export class CouponsComponent implements OnInit {
  private gridApi!: GridApi;
  allCoupons: ICoupon[] = [];
  public editType = 'fullRow';
  public rowData: ICoupon[] = [];
  public rowSelection: 'single' | 'multiple' = 'single';
  constructor(private couponService: CouponsService) {}
  selectedRows: ICoupon[] = [];

  ngOnInit(): void {}
  columns = [
    { headerName: 'ID', field: 'id', width: 50, minWidth: 20 },
    { headerName: 'Coupon', field: 'coupon', width: 50, minWidth: 20 },
    { headerName: 'OFFER', field: 'offer', width: 50, minWidth: 20 },
    { headerName: 'COUPON CODE', field: 'code', width: 50, minWidth: 20 },
    { headerName: 'VALID TILL', field: 'validation', width: 50, minWidth: 20 },
    { headerName: 'COUPON DETAILS', field: 'details', width: 50, minWidth: 20 },
    { headerName: 'STATUS', field: 'status', width: 50, minWidth: 20 },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    editable: true,
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.couponService
      .ViewAllCoupons()
      .pipe(take(1))
      .subscribe((coupons: ICoupon[]) => {
        console.log(coupons);
        this.rowData = coupons;
      });
  }

  onSelectionChanged() {
    this.selectedRows = this.gridApi.getSelectedRows();
  }

  //on the of click of delete button delete the specific row
  onDelete() {
    this.gridApi.applyTransaction({ remove: this.selectedRows });
  }

  onAddition() {
    this.gridApi.applyTransaction({ add: [{}] });
  }
}
