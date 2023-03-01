import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MobileModel } from './mobile.model';

@Injectable({ providedIn: 'root' })

export class MobileService {

    specificationsChanged = new Subject<MobileModel[]>();
    resultChanged = new Subject<any>();
    startedEditing = new Subject<number>();

    constructor() { }

    private result: any[] = [];
    private specifications: MobileModel[] = [
        new MobileModel(NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN)
    ];
    //private specifications: MobileModel[] = [];

    setMobileSpec(mobileSpec: MobileModel[]) {
        this.specifications = mobileSpec;
        this.specificationsChanged.next(this.specifications.slice());
    }

    getMobileSpecs() {
        return this.specifications.slice();
    }

    getMobileSpec(index: number) {
        return this.specifications[index];
    }

    addMobileSpec(mobileSpec: MobileModel) {
        this.specifications.push(mobileSpec);
        this.specificationsChanged.next(this.specifications.slice());
    }

    addMobileSpecs(mobileSpec: MobileModel[]) {
        this.specifications.push(...mobileSpec);
        this.specificationsChanged.next(this.specifications.slice());
    }

    saveResult(value: any) {
        this.result = value;
    }

    getResult(index: number) {
        return this.result[index];
    }

    setResult(value: any) {
        this.result = value;
        this.resultChanged.next(this.result.slice());
    }

}