import { Component, OnInit } from '@angular/core';

//Models
import { User} from '../models/user';

@Component({
  selector: 'my-register',
  templateUrl: './app/templates/register.component.html',
})
export class RegisterComponent implements OnInit {
  private submitted = false;
  private userModel = new User('', '');

  constructor() {  }

  ngOnInit() {}

  onSubmit(): void {
        
    this.submitted= true;
  }
}
