import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
export class AppComponent {
  title = 'Test-Password';

    form = new FormGroup({
   
      password: new FormControl([
          '', Validators.required,
        Validators.minLength(8)          
      ])
   });

  // constructor(private fb: FormBuilder) {}

  get password() {
      return this.form.controls.password as FormControl;
  }

}

