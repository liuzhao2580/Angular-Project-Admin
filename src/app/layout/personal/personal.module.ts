import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component'

@NgModule({
    declarations: [PersonalComponent, BasicInfoComponent],
    imports: [CommonModule, PersonalRoutingModule]
})
export class PersonalModule {}
