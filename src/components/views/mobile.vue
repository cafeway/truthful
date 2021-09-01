<template>
  <div>
    <h1 class="text-center">Mobile Money</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->

            <div class="box-body">
              <!-- calendar group -->

              <!-- with characthers -->
               <span class="help-block"><b><h3>Pay with Mobile Money
              <span class="iconify" data-icon="emojione:phone" style="height:30px; width:30px"></span>
               </h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="charge()" class="btn btn-success btn-block">Deposit from Phone</button>
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
      currency: '',
      uid: '',
      minimum: 0,
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
    charge: function () {
      switch (this.currency) {
        case 'KES':
          this.minimum = 500
          this.deposit()
          break
        case 'RWF':
          this.minimum = 4600
          this.deposit()
          break
        case 'UGX':
          this.minimum = 16000
          this.deposit()
          break
        case 'Tanzania':
          this.minimum = 10500
          this.deposit()
          break
        case 'ZWM':
          this.minimum = 85
          this.deposit()
          break
        case 'NGN':
          this.minimum = 1900
          this.deposit()
          break
        case 'GHC':
          this.minimum = 30
          this.deposit()
          break
        case 'ZAR':
          this.minimum = 72
          this.deposit()
          break
        case 'MWF':
          this.minimum = 3800
          this.deposit()
          break
        default:
          break
      }
    },
    deposit: function () {
      let amount = this.form.amount
      let balance = this.balance
      let db = firebase.firestore()
      if (this.form.amount > this.minimum) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-b4dde582334fbbab4bbe3ca5f0742893-X',
          tx_ref: 'registration fees' + new Date(),
          amount: this.form.amount,
          currency: this.currency,
          country: this.country,
          payment_option: 'card',
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username
          },
          callback: function (data) {
            if (data.status === 'successful') {
              let newBalance = balance + parseFloat(amount)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: newBalance
              })
            } else {

            }
          },
          customizations: {
            title: 'Zido Agency',
            description: 'Payment for Goods',
            logo: 'data:image/png;base64,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'
          }
        })
      } else {
        alert('The minimum deposit is' + ' ' + this.minimum + ' ' + this.currency)
      }
    },
    clearInput (vueModel) {
      vueModel = ''
    },
    GetLink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://zido.netlify.app/register'
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
        this.country = data.country
        this.currency = data.currency
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
