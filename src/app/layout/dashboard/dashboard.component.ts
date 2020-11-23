import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    expandSet = new Set<number>()
    onExpandChange(id: number, checked: boolean): void {
        if (checked) {
            this.expandSet.add(id)
        } else {
            this.expandSet.delete(id)
        }
    }
    listOfData = [
        {
            id: 1,
            name: 'John Brown',
            age: 32,
            expand: true,
            address: 'New York No. 1 Lake Park',
            children: [
                {
                    id: 10,
                    name: 'tewst ',
                    age: 11,
                    address: 'London No. 1 Lake Park'
                },
                {
                    name: 'tewst ',
                    age: 88,
                    address: 'London No. 1 Lake Park'
                }
            ]
        },
        {
            id: 2,
            name: 'Jim Green',
            age: 42,
            expand: false,
            address: 'London No. 1 Lake Park'
        },
    ]
    constructor() {}

    ngOnInit(): void {
        console.log('dashboard', '"dashboard"')
    }
}
