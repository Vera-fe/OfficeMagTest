import {Component, inject, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {FlexLayoutModule} from '@ngbracket/ngx-layout'
import {Router} from '@angular/router'

interface MoodColor {
    value: string
    viewValue: string
    iconColor: string
}

@Component({
    selector: 'app-registration-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        FlexLayoutModule
    ],
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
    private router = inject(Router)
    form!: FormGroup

    moodColors: MoodColor[] = [
        {value: 'red', viewValue: 'Красное', iconColor: '#f44336'},
        {value: 'orange', viewValue: 'Оранжевое', iconColor: '#ff9800'},
        {value: 'yellow', viewValue: 'Жёлтое', iconColor: '#ffeb3b'},
        {value: 'green', viewValue: 'Зелёное', iconColor: '#4caf50'},
        {value: 'blue', viewValue: 'Голубое', iconColor: '#2196f3'},
        {value: 'purple', viewValue: 'Фиолетовое', iconColor: '#9c27b0'},
        {value: 'pink', viewValue: 'Розовое', iconColor: '#e91e63'},
        {value: 'gray', viewValue: 'Серое', iconColor: '#9e9e9e'}
    ]

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            name: ['', Validators.required],
            moodColor: ['blue', Validators.required],
            comment: [''],
            radioOption: [false],
            agreement: [false, Validators.requiredTrue]
        })
    }

    onSubmit(): void {
        if (this.form.valid) {
            console.log('Данные формы:', this.form.value)
            this.router.navigate(['/buttons'])
        } else {
            this.markFormGroupTouched(this.form)
            alert('Заполните все обязательные поля!')
        }
    }

    private markFormGroupTouched(formGroup: FormGroup): void {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched()
            if (control instanceof FormGroup) {
                this.markFormGroupTouched(control)
            }
        })
    }

    getSelectedColorName(): string {
        const selectedValue = this.form?.get('moodColor')?.value
        const selectedColor = this.moodColors.find(c => c.value === selectedValue)
        return selectedColor?.viewValue || ''
    }

    getSelectedColorIcon(): string {
        const selectedValue = this.form?.get('moodColor')?.value
        const selectedColor = this.moodColors.find(c => c.value === selectedValue)
        return selectedColor?.iconColor || ''
    }
}
