import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card'
import {FlexLayoutModule} from '@ngbracket/ngx-layout'
import {RouterModule} from '@angular/router'

@Component({
    selector: 'app-buttons-page',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        FlexLayoutModule,
        RouterModule
    ],
    templateUrl: './buttons-page.component.html',
    styleUrls: ['./buttons-page.component.scss']
})
export class ButtonsPageComponent {
    buttonVariants = [
        {label: 'Просмотреть', variant: 'primary', icon: 'visibility'},
        {label: 'Просмотреть', variant: 'secondary', icon: 'visibility'},
        {label: 'Просмотреть', variant: 'outline', icon: 'visibility'},
        {label: 'Просмотреть', variant: 'success', icon: 'check_circle'},
        {label: 'Просмотреть', variant: 'warning', icon: 'warning'},
        {label: 'Просмотреть', variant: 'danger', icon: 'error'},
        {label: 'Просмотреть', variant: 'primary', icon: 'visibility', disabled: true},
        {label: 'Просмотреть', variant: 'secondary', icon: 'visibility', disabled: true}
    ]

    actionButtons = [
        {label: 'Редактировать', variant: 'action', icon: 'edit'},
        {label: 'Выгрузить в Excel', variant: 'action', icon: 'file_download'},
        {label: 'Удалить список', variant: 'danger', icon: 'delete'},
        {label: 'Распечатать', variant: 'action', icon: 'print'},
        {label: 'Загрузить из файла', variant: 'action', icon: 'upload_file'}
    ]
}
