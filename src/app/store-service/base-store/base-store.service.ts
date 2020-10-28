import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class BaseStoreService {
    public AsideChange = new BehaviorSubject<boolean>(false)

    setAsideChange(state: boolean) {
        this.AsideChange.next(state)
    }
}
