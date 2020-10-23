import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    receiceData:string
    // 接收子组件传递的数据
    receive_child_data(data) {
        this.receiceData = data
    }
}
