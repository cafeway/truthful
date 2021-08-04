<template>
  <div>
    <h1 class="text-center">Mobile Money Deposit</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">User wallet</h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->

              <!-- with characthers -->
               <span class="help-block"><b><h3>Kenya
               <span class="iconify" data-icon="twemoji:flag-for-flag-kenya" style="height:20px;" data-inline="false"></span>
               </h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="kenya()" class="btn btn-success btn-block">Deposit from Mpesa</button>
             
              <hr />
             <span class="help-block"><b><h3>Uganda
               <span class="iconify" data-icon="twemoji:flag-for-flag-uganda" data-inline="false" style="height:20px"></span>
               </h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount1" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="uganda()" class="btn btn-danger btn-block">Deposit from Mtn/Airtel</button>
             
              <br />
               <span class="help-block"><b><h3>Rwanda
                <span class="iconify" data-icon="twemoji:flag-for-flag-rwanda" data-inline="false" style="height:20px"></span>
               </h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount2" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="rwanda()" class="btn btn-primary btn-block">Deposit from Rwanda Money</button>
             
              <br />
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount3" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="zambia()" class="btn btn-primary btn-block">Deposit from Zambia</button>
             
              <br />
              <span class="help-block"><b><h3>Tanzania
                <span class="iconify" data-icon="twemoji:flag-for-flag-tanzania" data-inline="false" style="height:20px"></span>
               </h3></b></span>
               <button type="button" @click="tanzania()" class="btn btn-warning btn-block">Deposit from Vodacom</button>
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
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
  },
  methods: {
    kenya: function () {
      let amount = this.form.amount
      let balance = this.balance
      let db = firebase.firestore()
      if (amount > 500) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
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
          public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
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
            let nb = (amount + balance) / 33
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
          public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
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
          public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
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
            let nb = (amount + balance) * 6
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
      var baseURL = 'https://promaxcash.netlify.app/register'
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
