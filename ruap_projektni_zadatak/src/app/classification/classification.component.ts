import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BackendService } from '../backend.service';

import { MobileModel } from '../mobile.model';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})

export class ClassificationComponent implements OnInit, OnDestroy {

  @ViewChild('form')
  specificationForm!: NgForm;
  subscription!: Subscription;
  editedSpecsIndex!: number;
  editedSpec!: MobileModel;

  specOptions = [0, 1];
  coresOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  priceRangeOptions = [0, 1, 2, 3];
  submitted = false;
  result: any[] = [];

  constructor(private mobileService: MobileService, private backendSerivce: BackendService) { }

  ngOnInit(): void {
    this.subscription = this.mobileService.startedEditing.subscribe(
      (index: number) => {
        this.editedSpec = this.mobileService.getMobileSpec(index);
        this.specificationForm.setValue({
          battery_power: this.editedSpec.battery_power,
          blue: this.editedSpec.blue,
          clock_speed: this.editedSpec.clock_speed,
          dual_sim: this.editedSpec.dual_sim,
          fc: this.editedSpec.fc,
          four_g: this.editedSpec.four_g,
          int_memory: this.editedSpec.int_memory,
          m_dep: this.editedSpec.m_dep,
          mobile_wt: this.editedSpec.mobile_wt,
          n_cores: this.editedSpec.n_cores,
          pc: this.editedSpec.pc,
          px_height: this.editedSpec.px_height,
          px_width: this.editedSpec.px_width,
          ram: this.editedSpec.ram,
          sc_h: this.editedSpec.sc_h,
          sc_w: this.editedSpec.sc_w,
          talk_time: this.editedSpec.talk_time,
          three_g: this.editedSpec.three_g,
          touch_screen: this.editedSpec.touch_screen,
          wifi: this.editedSpec.wifi,
          price_range: this.editedSpec.price_range
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const value = form.value;
    const newSpecification = new MobileModel(value.battery_power, value.blue, value.clock_speed, value.dual_sim,
      value.fc, value.four_g, value.int_memory, value.m_dep, value.mobile_wt, value.n_cores, value.pc,
      value.px_height, value.px_width, value.ram, value.sc_h, value.sc_w, value.talk_time, value.three_g, value.touch_screen,
      value.wifi, value.price_range);

    console.log(newSpecification);
    const modelJSON = JSON.stringify(newSpecification);
    console.log(modelJSON);

    this.data.Inputs.input1.Values[0][0] = newSpecification.battery_power;
    this.data.Inputs.input1.Values[0][1] = newSpecification.blue;
    this.data.Inputs.input1.Values[0][2] = newSpecification.clock_speed;
    this.data.Inputs.input1.Values[0][3] = newSpecification.dual_sim;
    this.data.Inputs.input1.Values[0][4] = newSpecification.fc;
    this.data.Inputs.input1.Values[0][5] = newSpecification.four_g;
    this.data.Inputs.input1.Values[0][6] = newSpecification.int_memory;
    this.data.Inputs.input1.Values[0][7] = newSpecification.m_dep;
    this.data.Inputs.input1.Values[0][8] = newSpecification.mobile_wt;
    this.data.Inputs.input1.Values[0][9] = newSpecification.n_cores;
    this.data.Inputs.input1.Values[0][10] = newSpecification.pc;
    this.data.Inputs.input1.Values[0][11] = newSpecification.px_height;
    this.data.Inputs.input1.Values[0][12] = newSpecification.px_width;
    this.data.Inputs.input1.Values[0][13] = newSpecification.ram;
    this.data.Inputs.input1.Values[0][14] = newSpecification.sc_h;
    this.data.Inputs.input1.Values[0][15] = newSpecification.sc_w;
    this.data.Inputs.input1.Values[0][16] = newSpecification.talk_time;
    this.data.Inputs.input1.Values[0][17] = newSpecification.three_g;
    this.data.Inputs.input1.Values[0][18] = newSpecification.touch_screen;
    this.data.Inputs.input1.Values[0][19] = newSpecification.wifi;
    this.data.Inputs.input1.Values[0][20] = newSpecification.price_range;

    console.log(this.result);
    this.backendSerivce.postSpecification(this.data).subscribe(response => {
      console.log(response);
      const responseJSON = JSON.stringify(response);
      const responseParsed = JSON.parse(responseJSON);
      const result = responseParsed.Results.output1.value.Values[0][25];
      this.result = result;

    });
  }

  onClear() {
    this.specificationForm.reset();
  }

  tryAgain() {
    this.submitted = false;
    this.specificationForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  data = {
    "Inputs": {
      "input1": {
        "ColumnNames": [
          "battery_power",
          "blue",
          "clock_speed",
          "dual_sim",
          "fc",
          "four_g",
          "int_memory",
          "m_dep",
          "mobile_wt",
          "n_cores",
          "pc",
          "px_height",
          "px_width",
          "ram",
          "sc_h",
          "sc_w",
          "talk_time",
          "three_g",
          "touch_screen",
          "wifi",
          "price_range"
        ],
        "Values": [
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      }
    },
    "GlobalParameters": {}
  };
}
