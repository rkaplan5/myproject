import { 
  Component, 
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserReportPage } from '../user-report/user-report';
import { NgForm } from '@angular/forms';
declare var Stripe;
// import { stripe } from 'stripe' new style if doesnt work, try old style below. 
var stripe = Stripe('pk_test_smZO8xj5qmkiNgKVPcl6iAyA');
var elements = stripe.elements();
// will need to link this to the index page


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };

    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
  /* payment code from stripe git hub for backend

  var stripe = require('stripe')('sk_test_...');

var customer = await stripe.customers.create(
  { email: 'customer@example.com' }
);
*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  
  NavigateToUserReport() {
    // other stuff...
    this.navCtrl.push(UserReportPage);
  }
}
