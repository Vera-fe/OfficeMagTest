import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {FlexLayoutModule} from '@ngbracket/ngx-layout'

interface Product {
    id: number
    name: string
    image: string
    price: number
}

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        FlexLayoutModule
    ],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'Набор подставок под карандаши',
            image: 'https://image.galacentre.ru/size/1000/d0d60b97-1618-11ec-a2e7-00505688a0fb/1.jpg',
            price: 1450
        },
        {
            id: 2,
            name: 'Набор цветных трёхгранных карандашей, дерево',
            image: 'https://krasniykarandash.ru/upload/resize_cache/iblock/242/758_758_1/2424022ccbec7fa40e2797814d8084cd.jpg',
            price: 390
        },
        {
            id: 3,
            name: 'Набор синих ручек, пластик',
            image: 'https://ir.ozone.ru/s3/multimedia-f/c1000/6246454683.jpg',
            price: 290
        },
        {
            id: 4,
            name: 'Набор профессиональных фломастеров в чехле',
            image: 'https://ir.ozone.ru/s3/multimedia-c/c1000/6399018504.jpg',
            price: 2350
        },
        {
            id: 5,
            name: 'Папка-скоросшиватель А4, с перфорацией',
            image: 'https://www.belykrolik.ru/media/catalog/product_images/7248021_1_papka-skorosshivatel-plastik-perf-stamm-a4-180mkm-assorti-s-prozr-verhom.jpg',
            price: 450
        },
        {
            id: 6,
            name: 'Блокнот, А5, 150×210 мм, 60 листов, клетка',
            image: 'https://bumaga-s.ru/productImage/231578x550y550.jpg',
            price: 320
        }
    ]
}
