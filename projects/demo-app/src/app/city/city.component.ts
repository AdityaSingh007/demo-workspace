import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from './city-service/city.service';
import { PopulationDetails } from './model/populationdetails';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { SnackbarService } from '@se/web-ui-angular';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  public citySearchForm!: FormGroup;
  public showError: boolean = false;
  private citySub$!: Subscription;
  private loading: Subject<boolean> = new Subject<boolean>();
  public loading$ = this.loading.asObservable();
  public populationDetails!: PopulationDetails | null;
  get formControl(): any {
    return this.citySearchForm['controls'];
  }
  constructor(
    private formBuilder: FormBuilder,
    private city: CityService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    this.citySearchForm = this.formBuilder.group({
      location: ['', Validators.required],
    });
  }

  getCityDetails() {
    this.citySub$?.unsubscribe();
    if (this.citySearchForm.valid) {
      this.populationDetails = null;
      this.loading.next(true);
      this.citySub$ = this.city
        .getDetailsByCity(this.citySearchForm.controls['location']?.value)
        .subscribe({
          next: (response: PopulationDetails) => {
            this.populationDetails = response;
            this.loading.next(false);
          },
          error: (err: HttpErrorResponse) => {
            console.error(err);
            this.loading.next(false);
            const snackbar = this.snackbarService.open({
              message: 'Error occured while fetching details',
              type: 'error',
            });
          },
          complete: () => {
            this.loading.next(false);
          },
        });
      this.showError = false;
    } else this.showError = true;
  }
}
