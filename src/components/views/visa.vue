<template>
  <div>
    <h1 class="text-center">Tiil no: 9186687</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->

            <div class="box-body">
              <!-- calendar group -->

              <!-- with characthers -->
               <span class="help-block"><b><h3>Confirm Payment Here
              <span class="iconify" data-icon="emojione:credit-card" style="height:30px; width:30px"></span>
               </h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount" class="form-control" placeholder="Enter The mpesa code">
              </div>
              <hr>
                <button type="button" @click="kenya()" class="btn btn-success btn-block">Verify</button>
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
      form: {
        amount: '',
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
       firebase.firestore().collection('transactions').where('code', '==', this.form.amount).get().then(snapshot => {
         snapshot.forEach(doc => {
           if (doc.data().redeemed){
             let voucher = doc.id
             alert('this code has aready been redeemed')
           }else {
             let amount = doc.data().amount
             firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
               let data = snapshot.data()
               let balance = data.balance
               let new_balance = amount + balance
               firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).update({
                 'balance': new_balance
               })
             })
             firebase.firestore().collection('users').doc(voucher).update({
               redeemed: true
             })
             alert('Your Deposit Has Been Verified ')
           }
         })
       })
    },
    deposit: function () {
      if (this.form.deposit < 500) {
        alert('minimum amount is 500ksh')
      }
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
