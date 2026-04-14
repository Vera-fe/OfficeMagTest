import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {FlexLayoutModule} from '@ngbracket/ngx-layout'
import {FormsModule} from '@angular/forms'

@Component({
    selector: 'app-beautiful-buttons',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule,
        FormsModule
    ],
    templateUrl: './beautiful-buttons.component.html',
    styleUrls: ['./beautiful-buttons.component.scss']
})
export class BeautifulButtonsComponent {
    isChecked = false
}
