import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { MobileService } from "./mobile.service";
import { MobileModel } from "./mobile.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class BackendService {

    specification!: any;

    constructor(private http: HttpClient, private mobileService: MobileService) { }

    headers = new HttpHeaders({
        "Authorization": "Bearer 9RXJZxgVsbdyOyuh4+oVIVDDkenrZ75R8ADWKz3cqHn5wnosmdcyKlSAEY0S1tijV9KR7P7NdjtQ+AMCAe1+hw==",
        "Content-Type": "application/json"
    });
    requestOptions = { headers: this.headers };

    postSpecification(data: any): Observable<any> {
        return this.http
            .post<any>('https://ussouthcentral.services.azureml.net/workspaces/80877ff97b434e3da6a95a6eac98e979/services/50e5a925b405444cbaa372d97fa664f7/execute?api-version=2.0&details=true', data, this.requestOptions)
    }

    getSpecification() {
        return this.http
            .get<MobileModel[]>('https://ussouthcentral.services.azureml.net/workspaces/80877ff97b434e3da6a95a6eac98e979/services/50e5a925b405444cbaa372d97fa664f7/execute?api-version=2.0&format=swagger')
            .pipe(
                map(specification => {
                    return specification.map(specification => {
                        return {
                            ...specification
                        };
                    });
                }),
                tap(specification => {
                    this.mobileService.setMobileSpec(specification);
                })
            );
    }
}
