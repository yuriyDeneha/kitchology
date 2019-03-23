import { NgModule } from '@angular/core';
import { SendInputComponent } from './components/send-input/send-input.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        SendInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule

    ],
    providers: [],
    exports: [
        SendInputComponent,
    ]
})
export class SharedModule {

}
