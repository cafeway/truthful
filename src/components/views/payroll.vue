<template>
  <div>
   
<div class="snip1265">
  <div class="plan">
    <header><i class="ion-ios-navigate-outline"></i>
      <h4 class="plan-title">
        Starter
      </h4>
      <div class="plan-cost"><span class="plan-price">200ksh</span><span class="plan-type">/DAILY</span></div>
    </header>
    <ul class="plan-features">
      <li>Invest 1000 get 200 daily for 10 days
      </li>
    </ul>
    <div class="plan-select"><a  @click="invest(1000)">Select Plan</a></div>
  </div>
  <div class="plan">
    <header><i class="ion-ios-world"></i>
      <h4 class="plan-title">
        Centrist
      </h4>
      <div class="plan-cost"><span class="plan-price">400ksh</span><span class="plan-type">/Daily</span></div>
    </header>
    <ul class="plan-features">
      <li>Invest 2500 get 600 daily for 10 days
      </li>
    </ul>
    <div class="plan-select"><a  @click="invest(2500)">Select Plan</a></div>
  </div>
    <div class="plan">
    <header><i class="ion-ios-world"></i>
      <h4 class="plan-title">
        Basic
      </h4>
      <div class="plan-cost"><span class="plan-price">600ksh</span><span class="plan-type">/Daily</span></div>
    </header>
    <ul class="plan-features">
      <li>Invest 3000 get 600 daily for 10 days
      </li>
    </ul>
    <div class="plan-select"><a  @click="invest(3000)">Select Plan</a></div>
  </div>
  <div class="plan featured">
    <header><i class="ion-ios-people"></i>
      <h4 class="plan-title">
        Professional
      </h4>
      <div class="plan-cost"><span class="plan-price">800ksh</span><span class="plan-type">/DAILY</span></div>
    </header>
   <ul class="plan-features">
      <li>Invest 5000 get 800 daily for 10 days
      </li>
    </ul>
    <div class="plan-select"><a @click="invest(5000)">Select Plan</a></div>
  </div>
  <div class="plan">
    <header><i class="ion-ios-speedometer"></i>
      <h4 class="plan-title">
        Ultra
      </h4>
      <div class="plan-cost"><span class="plan-price">1000ksh</span><span class="plan-type">/DAILY</span></div>
    </header>
   <ul class="plan-features">
      <li>Invest 10000 get 2000 daily for 10 days
      </li>
    </ul>
    <div class="plan-select"><a  @click="invest(10000)">Select Plan</a></div>
  </div>
  <div class="plan">
    <header><i class="ion-ios-speedometer"></i>
      <h4 class="plan-title">
        Forex Plan
      </h4>
      <div class="plan-cost"><span class="plan-price">15000ksh</span><span class="plan-type">/DAILY</span></div>
    </header>
   <ul class="plan-features">
      <li>Invest 100000 get 15000 daily for 30days
      </li>
       <li>Contact admin for this package
      </li>
    </ul>
    <div class="plan-select"><a >Select Plan</a></div>
  </div>
</div>
  </div>
</template> 
<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
  name: 'Repository',
  data () {
    return {
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
    charge: function () {
      let country = document.getElementById('country').value
      let db = firebase.firestore()
      let email = this.email
      let pesa = this.form.deposit
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
        tx_ref: 'registration fees' + new Date(),
        amount: this.form.deposit,
        currency: country,
        country: this.country,
        payment_option: 'mpesa,card,ussd,account',
        customer: {
          email: this.email,
          phone_number: this.phonenumber,
          name: this.username
        },
        callback: function () {
          let mail = email
          let pesa2 = pesa
          db.collection('users').where('email', '==', mail).get().then(snapshot => {
            snapshot.forEach((doc) => {
              let id = doc.id
              let newbalance = this.balance + pesa2
              let nb = parseFloat(newbalance)
              db.collection('users').doc(id).update({
                balance: nb
              })
            })
          })
        }
      })
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
    invest: function (amount) {
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
            day6: time + 51800,
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
            day6: time + 51800,
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
            day6: time + 51800,
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
            day6: time + 51800,
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
            day6: time + 51800,
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
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);
@import url(https://fonts.googleapis.com/css?family=Montserrat:800);
.snip1265 {
  font-family: 'Raleway', Arial, sans-serif;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  width: 100%;
  max-width: 1000px;
  margin: 50px 10px 10px;
}
.snip1265 .plan {
  margin: 0;
  width: 25%;
  position: relative;
  float: left;
  background-color: #262626;
  border: 1px solid #1e1e1e;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}
.snip1265 .plan:hover,
.snip1265 .plan.hover {
  background-color: #1c1c1c;
}
.snip1265 .plan:hover i,
.snip1265 .plan.hover i {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.snip1265 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}
.snip1265 header {
  position: relative;
  padding: 20px 10px;
}
.snip1265 header i {
  font-size: 56px;
  margin: 0 15px;
  color: #f39c12;
  display: inline-block;
  float: left;
}
.snip1265 .plan-title {
  top: 0;
  font-weight: 800;
  margin: 10px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.snip1265 .plan-cost {
  margin: 0;
  opacity: 0.2;
}
.snip1265 .plan-price {
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 800;
  font-size: 1.3em;
}
.snip1265 .plan-type {
  opacity: 0.8;
  font-size: 0.7em;
  text-transform: uppercase;
}
.snip1265 .plan-features {
  padding: 0;
  margin: 0 0 40px;
  text-align: center;
  list-style: outside none none;
  font-size: 0.8em;
  text-align: left;
}
.snip1265 .plan-features li {
  padding: 5px 5%;
  font-weight: 500;
  opacity: 0.5;
  border-left: 5px solid #f39c12;
  margin: 2px 20px;
}
.snip1265 .plan-select {
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.snip1265 .plan-select a {
  color: #ffffff;
  text-decoration: none;
  padding: 15px 20px;
  margin: 20px;
  border-radius: 40px;
  font-size: 0.75em;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  background-color: #f39c12;
}
.snip1265 .plan-select a:hover {
  background-color: #262626;
}
.snip1265 .featured {
  margin-top: -10px;
  background-color: #262626;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.snip1265 .featured .plan-select a {
  margin: 30px 20px;
}
@media only screen and (max-width: 767px) {
  .snip1265 .plan {
    width: 50%;
  }
  .snip1265 .plan-title,
  .snip1265 .plan-select a {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .snip1265 .plan-select a,
  .snip1265 .featured .plan-select a {
    margin: 20px;
  }
  .snip1265 .featured {
    margin-top: 0;
  }
}
@media only screen and (max-width: 440px) {
  .snip1265 .plan {
    width: 100%;
  }
}


</style>
