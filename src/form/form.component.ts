import { Component } from "@angular/core"

@Component({
    selector: "app-form",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.scss"]

})
export class Formcomponent{
    firstname: any;
    data: any;
  lastname: any;
  username: any;
  email: any;
  address1: any;
  address2:any;
  cardname: any;
  cardnumber: any;
  country: any;
  check1: any;
  state: any;
  zip: any;
  example1: any;
  check: any;
  cards: any;
      goto(){
        var data={
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          email: this.email,
          address1: this.address1,
          address2: this.address2,
          cardname: this.cardname,
          cardnumber: this.cardnumber,
          country: this.country,
          state:this.state,
          zip: this.zip,
          check1: this.check1,
          check:this.check,
          cards: this.cards
        }
        console.log(data)
      }
}