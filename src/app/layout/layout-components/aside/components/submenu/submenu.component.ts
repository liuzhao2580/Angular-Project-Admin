import { Component, OnInit , Input} from '@angular/core'

@Component({
    selector: 'app-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
    @Input() AsideRoutes: Array<any>
    constructor() {}

    ngOnInit(): void {
        console.log(this.AsideRoutes, 'this.AsideRoutes')
    }
}
