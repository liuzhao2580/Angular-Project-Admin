import { Component, OnInit } from '@angular/core'

import { BaseStoreService } from '@/app/store-service/base-store/base-store.service'

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
    isCollapsed: boolean 
    constructor(private baseStoreService : BaseStoreService) {
        this.isCollapsed = this.baseStoreService.Aside_status.value.status
        console.log(789, '789')
    }

    ngOnInit(): void {
        
    }
}
