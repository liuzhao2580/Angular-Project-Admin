import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class BaseStoreService {
    // 侧边栏的展开闭合
    public AsideChange = new BehaviorSubject<boolean>(false)

    // 修改侧边栏的状态
    setAsideChange(state: boolean) {
        this.AsideChange.next(state)
    }
}
