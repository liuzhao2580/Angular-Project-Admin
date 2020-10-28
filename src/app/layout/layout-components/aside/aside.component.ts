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
        this.baseStoreService.AsideChange.subscribe(state => this.isCollapsed = state)
    }

    ngOnInit(): void {
        
    }
}
