<template>
  <div>
    <h1 class="text-center">Crypto Currency Deposit</h1>
    <section class="content">
      <div class="row">
      <img src="">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">We Accept Payments Using Crypto Coins </h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->
              <div>
                 <button type="button" class="btn btn-warning btn-block">  <a class="donate-with-crypto"
     href="https://commerce.coinbase.com/checkout/71bd04bf-daa3-44ae-a172-39691098ff9e">
    Deposit Crypto
  </a></button>
</div>
              <!-- select examples -->

              <!-- /input-group -->
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require('moment')
import datepicker from 'vue-date-picker'
import firebase from 'firebase'
export default {
  data() {
    return {
      // array of downlines
      downlines: [],
      balance: 0,
      username: '',
      email: '',
      phone: '',
      country: '',
      uid: '',
      form: {
        amount: 0,
        amount1: 0,
        amount2: 0,
        amount3: 0,
        deposit: 0
      }
    }
  },
  name: 'Settings',
  components: { datepicker },
  computed: {
    datetime () {
      return new Date()
    }
  },
  created() {
    const script = document.createElement('script')
    script.src = 'https://commerce.coinbase.com/v1/checkout.js?version=201807'
    document.getElementsByTagName('head')[0].appendChild(script)
  },
  methods: {
    kenya: function () {
      let amount = this.form.amount
      let balance = this.balance
      let db = firebase.firestore()
      if (amount > 500) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-58d009f25368bb2157760f27a748b444-X',
          tx_ref: 'registration fees' + new Date(),
          amount: amount,
          currency: 'KES',
          country: 'kenya',
          payment_option: 'mpesa,card,ussd,account',
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username
          },
          callback: function () {
            let nb = amount + balance
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
              balance: nb
            })
          }
        })
      } else {
        alert('the amount selected must be greater  than 500ksh')
      }
    },
    uganda: function () {
      let amount = this.form.amount1
      let balance = this.balance
      let db = firebase.firestore()
      if (amount > 17000) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-58d009f25368bb2157760f27a748b444-X',
          tx_ref: 'registration fees' + new Date(),
          amount: amount,
          currency: 'UGX',
          country: 'uganda',
          payment_option: 'mpesa,card,ussd,account',
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username
          },
          callback: function () {
            let nb = amount / 33 + balance
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
              balance: nb
            })
          }
        })
      } else {
        alert('the amount selected must be greater than 170000ugx')
      }
    },
    rwanda: function () {
      let amount = this.form.amount2
      let balance = this.balance
      let db = firebase.firestore()
      if (amount > 5000) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-58d009f25368bb2157760f27a748b444-X',
          tx_ref: 'registration fees' + new Date(),
          amount: amount,
          currency: 'RWF',
          country: 'rwanda',
          payment_option: 'mpesa,card,ussd,account',
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username
          },
          callback: function () {
            let nb = (amount + balance) / 10
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
              balance: nb
            })
          }
        })
      } else {
        alert('the amount selected must be greater than 5000rwf')
      }
    },
    zambia: function () {
      let amount = this.form.amount3
      let balance = this.balance
      let db = firebase.firestore()
      if (amount > 90) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-58d009f25368bb2157760f27a748b444-X',
          tx_ref: 'registration fees' + new Date(),
          amount: amount,
          currency: 'ZMW',
          country: 'zambia',
          payment_option: 'mpesa,card,ussd,account',
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username
          },
          callback: function () {
            let nb = amount * 6 + balance
            db.collection('users').doc(firebase.auth().currentUser.uid).update({
              balance: nb
            })
          }
        })
      } else {
        alert('the amount selected must be greater than 90ZWM')
      }
    },
    tanzania: function () {
      alert('Contact admin to send to mpesa')
    },
    clearInput (vueModel) {
      vueModel = ''
    },
    cashout: function () {
      let db = firebase.firestore()
      let newBalance = this.balance - this.form.amount
      if (this.form.amount <= this.balance && this.form.amount > 0) {
        db.collection('users').doc(firebase.auth().currentUser.uid).update({
          balance: newBalance
        })
        db.collection('cashouts').add({
          amount: this.form.amount,
          uid: this.uid,
          phone: this.phone
        })
        alert('you cashed out' + ' ' + this.form.amount + ' ' + 'kindly refresh!')
      } else {
        alert('insufficient balance')
      }
    },
    deposit: function () {
      if (this.form.deposit < 500) {
        alert('minimum amount is 500ksh')
      }
    },
    GetLink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://zidoagency.netlify.app/register'
      var uid = firebase.auth().currentUser.uid
      var parameters = {'id': uid}
      var finalUrl = createURLwithParameters(baseURL, parameters)
      document.getElementById('link').value = finalUrl
    }
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://code.iconify.design/1/1.0.7/iconify.min.js')
    document.head.appendChild(recaptchaScript)
    firebase.auth().onAuthStateChanged(user => {
      let db = firebase.firestore()
      this.GetLink()
      // fetch user data
      db.collection('users').doc(user.uid).get().then(snapshot => {
        let data = snapshot.data()
        this.balance = data.balance
        this.phone = data.phonenumber
        this.uid = data.uid
        this.country = data.country
        this.email = data.email
        this.username = data.username
      })
    })
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
