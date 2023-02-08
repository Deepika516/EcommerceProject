import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ICoupon } from 'src/app/interfaces/coupon.interface';
import { CouponsService } from 'src/app/services/coupons.service';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.css'],
})
export class AllCouponsComponent implements OnInit {
  allCoupons: ICoupon[] = [];
  constructor(private couponService: CouponsService, private router: Router) {}
  hideDetail = false;
  ngOnInit(): void {
    this.readAllCoupons();
  }

  readAllCoupons() {
    this.couponService
      .ViewAllCoupons()
      .pipe(take(1))
      .subscribe((coupons: ICoupon[]) => {
        console.log(coupons);
        this.allCoupons = coupons;
      });
  }

  readDetail() {
    this.hideDetail = true;
    const loadbtn = document.getElementById('viewDetail') as HTMLElement;
    loadbtn.innerHTML = 'Hide Detail';
  }
}
