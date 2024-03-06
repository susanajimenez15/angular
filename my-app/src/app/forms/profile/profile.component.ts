import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required ]),
    lastName: new FormControl(''),
  });

  handlerSubmit(){
    if( this.profileForm.valid){
      console.log('valid')
    }else {
      console.log('NO valid')
    }

    console.log(this.profileForm.value)
  }
}
