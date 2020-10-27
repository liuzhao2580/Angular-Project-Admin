import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class BaseStoreService {
    public Aside_status: BehaviorSubject<any> = new BehaviorSubject({
        status: true
    })
    changeStatus(data) {
        const getData = this.Aside_status.getValue()
        getData.status = data
        this.Aside_status.next(getData)
    }
}
