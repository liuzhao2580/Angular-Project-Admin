import { Component, OnInit } from '@angular/core'
import { BaseStoreService } from '@/app/store-service/base-store/base-store.service'
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    isCollapsed = false
    constructor(private baseStoreService: BaseStoreService) {
        this.baseStoreService.AsideChange.subscribe((state) => (this.isCollapsed = state))
    }

    ngOnInit(): void {}

    _AsideStyle() {
        if (this.isCollapsed) {
            return {
                flex: '0 0 80px',
                'max-width': '80px',
                'min-width': '80px',
                width: '80px',
                transition: 'all 0.2s'
            }
        }
    }
}
