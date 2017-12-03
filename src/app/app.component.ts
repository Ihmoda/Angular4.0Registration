import { Component } from '@angular/core';
import { User } from './user';
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  user = new User();
  users = [];
  complete: boolean = false;
  userinfo = {
    first_name: '',
    email: '',
    street_address: '',
    city: '',
    state: '',
  }


  states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Virginia","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode","South","South","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West","Wisconsin","Wyoming"]
  onSubmit(form){
    this.userinfo.first_name = this.user.first_name;
    this.userinfo.email = this.user.email;
    this.userinfo.street_address = this.user.street_address;
    this.userinfo.city = this.user.city;
    this.userinfo.state = this.user.state;
    this.complete = true;
    this.users.push(this.user);
    this.user = new User();
    // Reset the form model.
    form.reset()
  }
}