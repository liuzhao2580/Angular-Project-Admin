import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    selectValue = 'jack'
    constructor() {}

    ngOnInit(): void {
        console.log('dashboard', '"dashboard"')
    }
    resert() {
        this.selectValue = null
    }
}
