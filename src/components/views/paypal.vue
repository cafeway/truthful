<template>
  <div>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h4 class="box-title">The best investment ideas are here</h4>
            </div>

            <div class="box-body">
              <!-- calendar group -->

              <!-- with characthers -->
               <span class="help-block"><b><h3>
               <span class="iconify" data-icon="emojione:mobile-phone-with-arrow" style="height:30px;width:30px"></span>
               </h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="cashout()" class="btn btn-primary btn-block">Cashout To Mobile Money</button>
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
      currency: '',
      upline: '',
      lv1: '',
      lv2: '',
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
        this.currency = data.country
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
