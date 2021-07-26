<template>
  <div>
    <h1 class="text-center">Edit Profile</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">User profile</h3>
            </div>

            <div class="box-body">
              <!-- calendar group -->
              <br />

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
              <span class="help-block">Activation Status</span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-power-off"></i></span>
                <input class="form-control" placeholder="Activation status" type="text" id="activated">
              </div>
              <span class="help-block">Your Upline Id</span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"></span>
                <input class="form-control" placeholder="Invite Link" type="text" id="link">
              </div>
              <hr>
               <span class="help-block"><b><h3>Cashout Here</h3></b></span>
              <br>

              <!-- Success/Error heads up input -->
               <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input v-model="form.amount" class="form-control" placeholder="Enter Amount" type="number" id="link" min="0">
              </div>
              <hr>
                <button type="button" @click="cashout()" class="btn btn-success btn-block">Withdraw</button>
             
              <br />
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
      uid: '',
      form: {
        amount: 0
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
    cashout: function () {
      let db = firebase.firestore()
      let newBalance = this.balance - this.form.amount
      db.collection('users').doc(firebase.auth().currentUser.uid).update({
        balance: newBalance
      })
      db.collection('cashouts').add({
        amount: this.form.amount,
        uid: this.uid,
        phone: this.phone
      })
      alert('you cashed out' + ' ' + this.form.amount + ' ' + 'kindly refresh!')
    },
    GetLink: function () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://promaxcash.com/register'
      var uid = firebase.auth().currentUser.uid
      var parameters = {'id': uid}
      var finalUrl = createURLwithParameters(baseURL, parameters)
      document.getElementById('link').value = finalUrl
    }
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '.../assets/js/lz.js')
    document.head.appendChild(recaptchaScript)
    firebase.auth().onAuthStateChanged(user => {
      let db = firebase.firestore()
      this.GetLink()
      // fetch user data
      db.collection('users').doc(user.uid).get().then(snapshot => {
        let data = snapshot.data()
        document.getElementById('username').value = data.username
        document.getElementById('email').value = data.email
        document.getElementById('phonenumber').value = data.phonenumber
        document.getElementById('activated').value = data.activated
        this.balance = data.balance
        this.phone = data.phonenumber
        this.uid = data.uid
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
