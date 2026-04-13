import {Routes} from '@angular/router'
import {RegistrationFormComponent} from './components/registration-form/registration-form.component'
import {ButtonsPageComponent} from './components/buttons-page/buttons-page.component'
import {SchemeComponent} from './components/scheme/scheme.component'

export const routes: Routes = [
    {path: '', component: RegistrationFormComponent},
    {path: 'buttons', component: ButtonsPageComponent},
    {path: 'scheme', component: SchemeComponent},
    {path: '**', redirectTo: ''}
]
