<template>
  <div>
    <h6 class="text-center">Investing your money for a better tomorrow</h6>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">Kyc</h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->
           
              <hr>
               <button v-if="!activated" class="btn-primary btn btn-lg btn-block" @click="activate()">Activate</button>
              <hr />
              <!-- with characthers -->
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-user" aria-hidden="true"></i>
                </span>
                <input class="form-control" placeholder="Username" type="text" id="username">
              </div>
              <br />
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-phone" aria-hidden="true"></i>
                </span>
                <input class="form-control" type="text" placeholder="phone number" id="phonenumber">
              </div>
              <br />

              <!-- with icons from font awesome -->
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
                <input class="form-control" placeholder="Email" type="email" id="email">
              </div>
              <br />
              <span class="help-block">Account Activation Status</span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-power-off"></i></span>
                <input class="form-control" placeholder="Activation status" type="text" id="activated">
              </div>
              <span class="help-block">Invite Friends</span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"></span>
                <input class="form-control" placeholder="Invite Link" type="text" id="link">
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
      username: '',
      // array of downlines
      downlines: [],
      balance: 0,
      phone: '',
      country: '',
      email: '',
      uid: '',
      activated: '',
      currency: '',
      lv1: '',
      lv2: '',
      upline: '',
      form: {
        amount: 0,
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
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    },
    GetLink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://zidoagency.com/register'
      var uid = firebase.auth().currentUser.uid
      var parameters = {'id': uid}
      var finalUrl = createURLwithParameters(baseURL, parameters)
      document.getElementById('link').value = finalUrl
    },
    activate: function () {
      let lv1 = this.lv1
      let Upline = this.upline
      let lv2 = this.lv2
      let email = this.email
      let phone = this.phone
      let username = this.username
      let registrationfee = 500
      switch (this.country) {
        case 'Kenya':
          registrationfee = 1
          break
        case 'Rwanda':
          registrationfee = 4600
          break
        case 'Uganda':
          registrationfee = 16000
          break
        case 'Tanzania':
          registrationfee = 10500
          break
        case 'Zambia':
          registrationfee = 85
          break
        case 'Nigeria':
          registrationfee = 1900
          break
        case 'Ghana':
          registrationfee = 30
          break
        case 'South Africa':
          registrationfee = 72
          break
        case 'Malawi':
          registrationfee = 3800
          break
        default:
          break
      }
      let db = firebase.firestore()
      if (registrationfee > 0) {
        let Lv1 = lv1
        let Lv2 = lv2
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK_TEST-8e95c49754822b682301b1585f82b425-X',
          tx_ref: 'registration fees' + new Date(),
          amount: registrationfee,
          currency: this.currency,
          country: this.country,
          payment_option: 'mpesa,card,ussd,account',
          customer: {
            email: email,
            phone_number: phone,
            name: username
          },
          callback: function (data) {
            if (data.status === 'successful') {
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                activated: true
              })
              db.collection('users').doc(Upline).collection('downlines').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let data = snapshot.data()
                let amount = data.amount
                let newAmount = amount + 2
                db.collection('users').doc(Upline).collection('downlines').doc(firebase.auth().currentUser.uid).update({
                  amount: newAmount
                })
              })
              db.collection('users').doc(Lv1).collection('downlines').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let data = snapshot.data()
                let amount = data.amount
                let newAmount = amount + 1
                db.collection('users').doc(Lv1).collection('downlines').doc(firebase.auth().currentUser.uid).update({
                  amount: newAmount
                })
              })
              db.collection('users').doc(Lv2).collection('downlines').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let data = snapshot.data()
                let amount = data.amount
                let newAmount = amount + 0.5
                db.collection('users').doc(Lv2).collection('downlines').doc(firebase.auth().currentUser.uid).update({
                  amount: newAmount
                })
              })
            } else {
              alert('cancelled')
            }
          }
        })
      } else {
        alert('the amount selected must be greater  than 500ksh')
      }
    }
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '.../assets/js/lz.js')
    document.head.appendChild(recaptchaScript)
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
    firebase.auth().onAuthStateChanged(user => {
      let db = firebase.firestore()
      this.GetLink()
      // fetch user data
      db.collection('users').doc(user.uid).get().then(snapshot => {
        let data = snapshot.data()
        this.username = data.username
        document.getElementById('username').value = data.username
        document.getElementById('email').value = data.email
        document.getElementById('phonenumber').value = data.phonenumber
        document.getElementById('activated').value = data.activated
        this.balance = data.balance
        this.phone = data.phonenumber
        this.uid = data.uid
        this.country = data.country
        this.activated = data.activated
        this.currency = data.currency
        this.email = data.email
        this.upline = data.upline
        this.lv1 = data.lv1
        this.lv2 = data.lv2
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
