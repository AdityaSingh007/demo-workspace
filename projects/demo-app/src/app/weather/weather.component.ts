import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weatherw',
  templateUrl: './weather.component.html',
  styleUrls: ['./weatherw.component.scss'],
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  get formControl(): any {
    return this.weatherSearchForm['controls'];
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['', Validators.required],
    });
  }

  getCurrentWeather() {}
}
