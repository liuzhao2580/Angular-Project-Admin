import { Component, OnInit, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    @Output() childEvent = new EventEmitter()
    constructor() {
        console.log('constructor 构造函数执行')
    }
    
    ngOnChanges():void {
        console.log('ngOnChanges 当 Angular 设置或重新设置数据绑定的输入属性时响应')
    }

    ngOnInit(): void {
        console.log('ngOnInit 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件')
    }

    ngDoCheck(): void {
        console.log('ngDoCheck 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应')
    }

    ngAfterContentInit():void {
        console.log('ngAfterContentInit 当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用')
    }

    ngAfterContentChecked() :void {
        console.log('ngAfterContentChecked 每当 Angular 检查完被投影到组件或指令中的内容之后调用')
    }

    ngAfterViewInit():void {
        console.log('ngAfterViewInit 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用')
    }

    ngAfterViewChecked():void {
        console.log('ngAfterViewChecked 每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用')
    }

    ngOnDestory(): void {
        console.log('ngOnDestory 每当 Angular 每次销毁指令/组件之前调用并清扫')
    }

    // 给父组件传递参数
    transData_to_parent() {
        this.childEvent.emit('我是子组件传递的数据')
    }
}
