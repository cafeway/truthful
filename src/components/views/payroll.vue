<template>
  <div>
    <h6 class="text-center">Investing your money for a better tomorrow</h6>
    <section class="content" v-if="this.activated">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title">Zido Agencies East Africa</h3>
            </div>
              <br>
            <div class="box-body">
              <!-- Success/Error heads up input -->
              <label>Choose a Package</label>
               <div class="input-group">
                <span class="input-group-addon"></span>
                
<select name="cars" id="investments">
  <option value="10">Choose 10% Per Day</option>
  <option value="25">Choose 25% Per Day</option>
  <option value="35">Choose 35% Per Day</option>
</select>
              </div>
              <hr>
               <button class="btn-success btn btn-lg btn-block" @click="invest()">Invest</button>
              <br />
              <!-- select examples -->

              <!-- /input-group -->
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
    <div v-else>
    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully created an account and logged in But You have to activate it to Earn</p>
  <hr>
  <a class="mb-0" @click="toProfile()">Click Here To activate</a>
</div>
    </div>
  </div>
</template>
<script>
import invest from './investments.vue'
import axios from 'axios'
import firebase from 'firebase'
export default {
  name: 'Repository',
  components: {
    invest
  },
  data () {
    return {
      activated: false,
      username: '',
      balance: 0,
      revenue: 0,
      phonenumber: '',
      auction: 0,
      bitcoin: 0,
      downlines: 0,
      trivia: 0,
      user_email: '',
      email: '',
      country: '',
      slot: 0,
      currency: '',
      id: '',
      form: {
        rate: null,
        amount: null,
        deposit: null
      }
    }
  },
  methods: {
    toProfile: function () {
      this.$router.push('/setting')
    },
    invest: function () {
      let plan = document.getElementById('investments').value
      switch (plan) {
        case '10':
          this.ROI1()
          break
        case '25':
          this.ROI2()
          break
        case '35':
          this.ROI3()
          break
        default:
          break
      }
    },
    ROI1: function () {
      let phone = this.phonenumber
      let email = this.email
      let startdate = firebase.firestore.Timestamp.now().seconds
      let amount = parseFloat(prompt('Enter Your Intended Capital'))
      if (amount <= this.balance && amount >= 499) {
        let db = firebase.firestore()
        let nb = this.balance - amount
        db.collection('users').doc(firebase.auth().currentUser.uid).update({
          balance: nb
        })
        db.collection('investments').add({
          user: firebase.auth().currentUser.uid,
          phone: phone,
          mail: email,
          amount: amount,
          id: Math.floor(Math.random() * 10000) + 1,
          state: 'running',
          cashed: 'false',
          matured: false,
          start: startdate,
          stop: startdate + 86400,
          mpesa: 'not sent',
          profit: amount + 0.1 * amount
        })
        alert('Investment Successfuly queued')
      } else {
        alert('min investment is 500')
      }
    },
    ROI2: function () {
      let phone = this.phonenumber
      let email = this.email
      let startdate = firebase.firestore.Timestamp.now().seconds
      let amount = parseFloat(prompt('Enter Your Intended Capital'))
      if (amount <= this.balance && amount >= 499) {
        let db = firebase.firestore()
        let nb = this.balance - amount
        db.collection('users').doc(firebase.auth().currentUser.uid).update({
          balance: nb
        })
        db.collection('investments').add({
          user: firebase.auth().currentUser.uid,
          phone: phone,
          mail: email,
          amount: amount,
          id: Math.floor(Math.random() * 10000) + 1,
          state: 'running',
          cashed: 'false',
          matured: false,
          start: startdate,
          stop: startdate + 172800,
          mpesa: 'not sent',
          profit: amount + 0.25 * amount
        })
        alert('Investment Successfuly queued')
      } else {
        alert('min investment is 500')
      }
    },
    ROI3: function () {
      let phone = this.phonenumber
      let email = this.email
      let startdate = firebase.firestore.Timestamp.now().seconds
      let amount = parseFloat(prompt('Enter Your Intended Capital'))
      if (amount <= this.balance && amount >= 499) {
        let db = firebase.firestore()
        let nb = this.balance - amount
        db.collection('users').doc(firebase.auth().currentUser.uid).update({
          balance: nb
        })
        db.collection('investments').add({
          user: firebase.auth().currentUser.uid,
          phone: phone,
          mail: email,
          amount: amount,
          id: Math.floor(Math.random() * 10000) + 1,
          state: 'running',
          cashed: 'false',
          matured: false,
          start: startdate,
          stop: startdate + 345600,
          mpesa: 'not sent',
          profit: amount + 0.35 * amount
        })
        alert('Investment Successfuly queued')
      } else {
        alert('Min investment is 500')
      }
    },
    mpesa: function (x) {
      console.log(x)
      let username = this.username
      let phonenumber = this.phonenumber
      let email = this.email
      let pesa = this.form.amount
      let db = firebase.firestore()
      if (x >= 1 && x <= 3) {
        window.FlutterwaveCheckout({
          public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
          tx_ref: 'registration fees' + new Date(),
          amount: this.form.amount,
          currency: 'KES',
          country: 'KE',
          payment_option: 'mpesa,card,ussd,account',
          customer: {
            email: this.email,
            phone_number: this.phonenumber,
            name: this.username
          },
          callback: function () {
            let user = username
            let mail = email
            let phone = phonenumber
            let startdate = firebase.firestore.Timestamp.now().seconds
            let pesa2 = parseFloat(pesa)
            if (x === 1) {
              db.collection('investments').add({
                user: user,
                phone: phone,
                mail: mail,
                amount: pesa2,
                id: Math.floor(Math.random() * 10000) + 1,
                state: 'running',
                cashed: 'false',
                matured: false,
                start: startdate,
                stop: startdate + 86400,
                mpesa: 'not sent',
                profit: pesa2 + 0.1 * pesa2
              })
            } else if (x === 2) {
              db.collection('investments').add({
                user: user,
                phone: phone,
                mail: mail,
                amount: this.form.amount,
                id: Math.floor(Math.random() * 10000) + 1,
                state: 'running',
                cashed: 'false',
                matured: false,
                start: startdate,
                stop: startdate + 172800,
                mpesa: 'not sent',
                profit: pesa2 + 0.3 * pesa2
              })
            } else {
              db.collection('investments').add({
                user: user,
                phone: phone,
                mail: mail,
                amount: this.form.amount,
                id: Math.floor(Math.random() * 10000) + 1,
                state: 'running',
                cashed: 'false',
                matured: false,
                start: startdate,
                stop: startdate + 345600,
                mpesa: 'not sent',
                profit: pesa2 + 0.4 * pesa2
              })
            }
          }
        })
      } else {
        alert('choose btwn 1-2 days')
      }
    },
    invest2: function (amount) {
      console.log(amount)
      console.log(this.balance)
      let db = firebase.firestore()
      if (amount <= this.balance) {
        if (amount === 1000) {
          let time = firebase.firestore.Timestamp.now().seconds
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').add({
            start: time,
            amount: 200,
            capital: 1000,
            id: Math.floor(Math.random() * 10000) + 1,
            day1: time + 86400,
            d1: false,
            day2: time + 172800,
            d2: false,
            day3: time + 259200,
            d3: false,
            day4: time + 345000,
            d4: false,
            day5: time + 432000,
            d5: false,
            day6: time + 518000,
            d6: false,
            day7: time + 604900,
            d7: false,
            day8: time + 691300,
            d8: false,
            day9: time + 777700,
            d9: false,
            day10: time + 864100,
            d10: false
          })
          let nb = this.balance - amount
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            balance: nb
          })
          alert('payroll successfully deployed! kindly visit the payroll page')
        } else if (amount === 2500) {
          let time = firebase.firestore.Timestamp.now().seconds
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').add({
            start: time,
            amount: 400,
            capital: 2500,
            id: Math.floor(Math.random() * 10000) + 1,
            day1: time + 86400,
            d1: false,
            day2: time + 172800,
            d2: false,
            day3: time + 259200,
            d3: false,
            day4: time + 345000,
            d4: false,
            day5: time + 432000,
            d5: false,
            day6: time + 518000,
            d6: false,
            day7: time + 604900,
            d7: false,
            day8: time + 691300,
            d8: false,
            day9: time + 777700,
            d9: false,
            day10: time + 864100,
            d10: false
          })
          let nb = this.balance - amount
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            balance: nb
          })
          alert('payroll successfully deloyed! kindly visit the payroll page')
        } else if (amount === 3000) {
          let time = firebase.firestore.Timestamp.now().seconds
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').add({
            start: time,
            amount: 600,
            capital: 3000,
            id: Math.floor(Math.random() * 10000) + 1,
            day1: time + 86400,
            d1: false,
            day2: time + 172800,
            d2: false,
            day3: time + 259200,
            d3: false,
            day4: time + 345000,
            d4: false,
            day5: time + 432000,
            d5: false,
            day6: time + 518000,
            d6: false,
            day7: time + 604900,
            d7: false,
            day8: time + 691300,
            d8: false,
            day9: time + 777700,
            d9: false,
            day10: time + 864100,
            d10: false
          })
          let nb = this.balance - amount
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            balance: nb
          })
          alert('payroll successfully deloyed! kindly visit the payroll page')
        } else if (amount === 5000) {
          let time = firebase.firestore.Timestamp.now().seconds
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').add({
            start: time,
            amount: 800,
            id: Math.floor(Math.random() * 10000) + 1,
            capital: 5000,
            day1: time + 86400,
            d1: false,
            day2: time + 172800,
            d2: false,
            day3: time + 259200,
            d3: false,
            day4: time + 345000,
            d4: false,
            day5: time + 432000,
            d5: false,
            day6: time + 518000,
            d6: false,
            day7: time + 604900,
            d7: false,
            day8: time + 691300,
            d8: false,
            day9: time + 777700,
            d9: false,
            day10: time + 864100,
            d10: false
          })
          let nb = this.balance - amount
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            balance: nb
          })
          alert('payroll successfully deloyed! kindly visit the payroll page')
        } else if (amount === 10000) {
          let time = firebase.firestore.Timestamp.now().seconds
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').add({
            start: time,
            capital: 10000,
            amount: 1000,
            id: Math.floor(Math.random() * 10000) + 1,
            day1: time + 86400,
            d1: false,
            day2: time + 172800,
            d2: false,
            day3: time + 259200,
            d3: false,
            day4: time + 345000,
            d4: false,
            day5: time + 432000,
            d5: false,
            day6: time + 518000,
            d6: false,
            day7: time + 604900,
            d7: false,
            day8: time + 691300,
            d8: false,
            day9: time + 777700,
            d9: false,
            day10: time + 864100,
            d10: false
          })
          let nb = this.balance - amount
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            balance: nb
          })
          alert('payroll successfully deloyed! kindly visit the payroll page')
        }
      } else {
        alert('insufficient amount')
      }
    },
    callGitHub () {
      axios.get(this.githubUrl)
        .then(response => {
          console.log('GitHub Response:', response)

          if (response.status !== 200) {
            this.error = response.statusText
            return
          }

          this.response = response.data.items
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response.statusText
        })
    }
  },
  created() {
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
  },
  mounted () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://code.iconify.design/1/1.0.7/iconify.min.js')
    document.head.appendChild(recaptchaScript)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let db = firebase.firestore()
        db.collection('users').doc(user.uid).get().then(snapshot => {
          let data = snapshot.data()
          this.balance = data.balance
          this.email = data.email
          this.revenue = data.revenue
          this.phonenumber = data.phonenumber
          this.auction = data.auction
          this.bitcoin = data.bitcoin
          this.downlines = data.downlines
          this.trivia = data.trivia
          this.slot = data.slot
          this.id = data.uid
          this.country = data.country
          this.activated = data.activated
        })
        db.collection('users').doc(user.uid).collection('lv1').get().then(snapshot => {
          this.downlines = this.downlines + snapshot.size
        })
        db.collection('users').doc(user.uid).collection('lv2').get().then(snapshot => {
          this.downlines = this.downlines + snapshot.size
        })
        db.collection('users').doc(user.uid).collection('lv3').get().then(snapshot => {
          this.downlines = this.downlines + snapshot.size
        })
      } else {
        this.$router.push('/login')
      }
    })
  }
}
</script>

<style>
@charset "utf-8";
/* CSS Document */
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,500,400,300,800);
@import url(http://fonts.googleapis.com/css?family=Ubuntu:300,400,700);
@import url(http://fonts.googleapis.com/css?family=Roboto:100,300,400);

body{ 
    background-color:#f0f3f6;
  overflow-x: hidden;

}
h1,h2,h3,h4,h5,h6,div,input,p,a{
    font-family: "Open Sans";  
    margin:0px; 
}

h3{ 
    font-size:22px;
}
.container-fluid,.container { 
    margin:auto;
  padding:0px 15px;
  max-width:1200px;
}
label{
  font-weight:500;
}
.form-group{
  margin-bottom:5px;
}


input,textarea,select,button{ 
    margin: 5px 0px ;
    font-size:13px !important; 
    border-radius:0px;
}
input[type=text],input[type=password],textarea,input[type=email],select,textarea{ 
    width: 100%; 
    border:1px solid #DADADA; 
    padding: 5px 10px;  
    height:45px;  
}
input[type=submit],input[type=button],input[type=reset],button{
    border:none; 
    font-size: 11px;  
  border-radius:3px;
  height:45px;
  color:#FFF;
}

.btn:hover,.btn:focus{  
    cursor:pointer; 
    color:#FFF;
}
input[type=radio]{
    margin:0px;
    padding:0px; 
    height:auto;
}
.form-control{ 
    box-shadow:none !important;  
  border-radius:0px;
}
.form-control:focus{
    border:1px solid #CCC;
}
.btn:focus{
  box-shadow:none !important;
}

textarea{ 
    width: 100%;
}
input[type=reset]{ 
    margin-left: 10px;
}
textarea{
  min-height:100px;
}
a{ 
    color: inherit;
}
a:hover,a:focus{ 
    text-decoration: none !important; 
    color: inherit !important;
}
ul{
    margin: 0px; 
    padding: 0px; 
    list-style: none;
}
.relative{ 
    position: relative;
}
.absolute{ 
    position: absolute;
}
.fixed{ 
    position: fixed;
}

.pricing-table-container{
  padding:50px 0px;
}
.description{
  padding:15px 0px;
}
.description a{
  padding:10px;
  font-size:13px;
  display:block;
  font-weight:bold;
  border-bottom:1px solid #DDD;
}
.description a.active{
  background-color:#FFF;
  padding-left:25px;
}
/* DEMO 01 */
.pricing-table-3{
  background-color:#FFF;
  margin:15px auto;
  box-shadow:0px 0px 25px rgba(0,0,0,0.1);
  max-width:300px;
  border-radius:0px 10px 0px 10px;
  overflow:hidden;
  position:relative;
  min-height:250px;
  transition:all ease-in-out 0.25s;
}
.pricing-table-3:hover{
  transform:scale(1.1,1.1);
  cursor:pointer;
}

.pricing-table-3.basic .price{
  background-color:#28b6f6;
  color:#FFF;
}
.pricing-table-3.premium .price{
  background-color:#ff9f00;
  color:#FFF;
}
.pricing-table-3.business .price{
  background-color:#c3185c;
  color:#FFF;
}

.pricing-table-3 .pricing-table-header{
  background-color:#212121;
  color:#FFF;
  padding:20px 0px 0px 20px;
  position:absolute;
  z-index:5;
}
.pricing-table-3 .pricing-table-header p{
  font-size:12px;
  opacity:0.7;
}
.pricing-table-3 .pricing-table-header::before{
  content:"";
  position:absolute;
  left:-50px;
  right:-180px;
  height:125px;
  top:-50px;
  background-color:#212121;
  z-index:-1;
  transform:rotate(-20deg)
}

.pricing-table-3 .price{
  position:absolute;
  top:0px;
  text-align:right;
  padding:110px 20px 0px 0px;
  right:0px;
  left:0px;
  font-size:20px;
  z-index:4;
}
.pricing-table-3 .price::before{
  content:"";
  position:absolute;
  left:0px;
  right:0px;
  height:100px;
  bottom:-25px;
  background-color:inherit;
  transform:skewY(10deg);
  z-index:-1;
  box-shadow:0px 5px 0px 5px rgba(0,0,0,0.05);
}


.pricing-table-3 .pricing-body{
  padding:20px;
  padding-top:200px;  
}
.pricing-table-3 .pricing-table-ul li{
  color:rgba(0,0,0,0.7);
  font-size:13px;
  padding:10px;
  border-bottom:1px solid rgba(0,0,0,0.1);
}
.pricing-table-3 .pricing-table-ul .fa{
  margin-right:10px;
}
.pricing-table-3.basic .pricing-table-ul .fa{
  color:#28b6f6;
}
.pricing-table-3.premium .pricing-table-ul .fa{
  color:#ff9f00;
}
.pricing-table-3.business .pricing-table-ul .fa{
  color:#c3185c;
}
.pricing-table-3 .view-more{
  margin:10px 20px;
  display:block;
  text-align:center;
  background-color:#212121;
  padding:10px 0px;
  color:#FFF;
}
</style>
