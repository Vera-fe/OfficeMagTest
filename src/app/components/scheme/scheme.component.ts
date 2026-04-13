import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {FlexLayoutModule} from '@ngbracket/ngx-layout'

interface PersonNode {
    id: string
    name: string
    x: number
    y: number
}

interface Connection {
    from: string
    to: string
}

@Component({
    selector: 'app-scheme',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule
    ],
    templateUrl: './scheme.component.html',
    styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent {
    nodes: PersonNode[] = [
        {id: 'aliksaar', name: 'Алликсаар', x: 30, y: 20},
        {id: 'stanislav', name: 'Станислав Клитотехнис', x: 100, y: 140},
        {id: 'ludmila', name: 'Людмила Водолазская', x: 300, y: 200},
        {id: 'olga', name: 'Ольга Боргдорф', x: 300, y: 260},
        {id: 'sergey', name: 'Сергей Брус', x: 300, y: 440},
        {id: 'igor', name: 'Игорь Зверёк', x: 100, y: 500},
        {id: 'anton', name: 'Антон Строй', x: 100, y: 560},

        {id: 'duhast', name: 'Ду Хаст Вячеславович', x: 670, y: 20},
        {id: 'anastasia', name: 'Анастасия Ширинкина', x: 670, y: 80},
        {id: 'alex', name: 'Александр Троян', x: 670, y: 140},

        {id: 'dmitry', name: 'Дмитрий Возигнуй', x: 670, y: 260},
        {id: 'kristina', name: 'Кристина Болтушкина', x: 670, y: 320},
        {id: 'maxim', name: 'Максим Висюлькин', x: 670, y: 380}
    ]

    connections: Connection[] = [
        {from: 'duhast', to: 'aliksaar'},
        {from: 'anastasia', to: 'aliksaar'},
        {from: 'alex', to: 'stanislav'},
        {from: 'dmitry', to: 'olga'},
        {from: 'kristina', to: 'olga'},
        {from: 'maxim', to: 'olga'}
    ]

    getNode(id: string): PersonNode | undefined {
        return this.nodes.find(n => n.id === id)
    }
}
