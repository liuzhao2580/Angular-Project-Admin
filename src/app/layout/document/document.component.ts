import { Component, OnInit } from '@angular/core'

interface documentList {
    url: string
    title: string
    img: string
}
@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
    documentCardList: documentList [] = [
        {
            url: 'https://angular.cn/docs',
            title: 'Angular',
            img: 'https://angular.cn/assets/images/logos/angular/angular.svg'
        },
        {
            url: 'https://ng-zorro.gitee.io/docs/introduce/zh',
            title: 'Ant Design of Angular',
            img: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg'
        }
    ]

    constructor() {}

    ngOnInit(): void {}

    cardClick(url) {
        window.open(url)
    }
}
