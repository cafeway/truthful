<template>
  <div>
    <section class="card container grid">
  <div class="card__container grid">
    <!--==================== CARD 1 ====================-->
    <article class="card__content grid">
      <div class="card__pricing">
        <div class="card__pricing-number">
          <span class="card__pricing-symbol"></span>10
        </div>
        <span class="card__pricing-month">/day</span>
      </div>

      <header class="card__header">
        <div class="card__header-circle grid">
         <span class="iconify" style="height:100px; width:50px" data-icon="noto:panda" data-inline="false"></span>
        </div>

        <span class="card__header-subtitle">Panda plan</span>
        <h1 class="card__header-title">10%-For-24HRS</h1>
      </header>
                <span class="help-block">Enter Amount</span>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input  v-model="form.amount" class="form-control" placeholder="Choose Amount" type="number" min="0" id="activated">
              </div>
     <hr>
      <button class="card__button" @click="mpesa(1)">Invest From Mpesa</button>
      <hr>
      <button class="card__button" @click="wallet(1)">Invest From Wallet</button>
    </article>

    <!--==================== CARD 2 ====================-->
    <article class="card__content grid">
      <div class="card__pricing">
        <div class="card__pricing-number">
          <span class="card__pricing-symbol">$</span>19
        </div>
        <span class="card__pricing-month">/month</span>
      </div>

      <header class="card__header">
        <div class="card__header-circle grid">
         <span class="iconify" style="height:100px; width:50px" data-icon="emojione:rabbit-face" data-inline="false"></span>
        </div>
          <hr>
        <h1 class="card__header-title">30%-For-48hrs</h1>
      </header>
                <span class="help-block">Enter Amount</span>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input  v-model="form.amount" class="form-control" placeholder="Choose Amount" type="number" min="0" id="activated">
              </div>
     <hr>
      <button class="card__button" @click="mpesa(2)">Invest From Mpesa</button>
      <hr>
      <button class="card__button" @click="wallet(2)">Invest From Wallet</button>
    </article>

   <article class="card__content grid">
      <div class="card__pricing">
        <div class="card__pricing-number">
          <span class="card__pricing-symbol">$</span>19
        </div>
        <span class="card__pricing-month">/month</span>
      </div>

      <header class="card__header">
        <div class="card__header-circle grid">
         <span class="iconify" data-icon="noto:fox" style="height:100px; width:50px" data-inline="false"></span>
        </div>
          <hr>
        <h1 class="card__header-title">40%-For-72hrs</h1>
      </header>
                <span class="help-block">Enter Amount</span>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-money"></i></span>
                <input  v-model="form.amount" class="form-control" placeholder="Choose Amount" type="number" min="0" id="activated">
              </div>
     <hr>
      <button class="card__button" @click="mpesa(3)">Invest From Mpesa</button>
      <hr>
      <button class="card__button" @click="wallet(3)">Invest From Wallet</button>
    </article>
  </div>
</section>
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
    wallet: function (x) {
      let username = this.username
      let phonenumber = this.phonenumber
      let email = this.email
      let db = firebase.firestore()
      if (x >= 1 && x <= 3 && this.form.amount <= this.balance && this.form.amount > 0) {
        let newbalance = this.balance - this.form.amount
        db.collection('users').doc(this.id).update({
          balance: newbalance
        })
        db.collection('users').doc(this.id).collection('timeline').add({
          message: 'you invested' + this.form.amount,
          type: 'successfull investment'
        })
        let startdate = firebase.firestore.Timestamp.now().seconds
        if (x === 1) {
          let value = parseFloat(this.form.amount)
          db.collection('investments').add({
            user: username,
            phone: phonenumber,
            mail: email,
            amount: value,
            profit: value + value * 0.1,
            id: Math.floor(Math.random() * 10000) + 1,
            state: 'running',
            cashed: 'false',
            matured: false,
            start: startdate,
            stop: startdate + 86400,
            mpesa: 'not sent'
          })
          alert('your investment was successfull please refresh')
        } else if (x === 2) {
          db.collection('investments').add({
            user: username,
            phone: phonenumber,
            mail: email,
            amount: this.form.amount,
            profit: parseFloat(this.form.amount) + (0.3 * parseFloat(this.form.amount)),
            id: Math.floor(Math.random() * 10000) + 1,
            state: 'running',
            cashed: 'false',
            matured: false,
            start: startdate,
            stop: startdate + 172800,
            mpesa: 'not sent'
          })
          alert('your investment was successfull please refresh')
        } else {
          db.collection('investments').add({
            user: username,
            phone: phonenumber,
            mail: email,
            amount: this.form.amount,
            id: Math.floor(Math.random() * 10000) + 1,
            state: 'running',
            cashed: 'false',
            matured: false,
            start: startdate,
            stop: startdate + 345600,
            mpesa: 'not sent',
            profit: parseFloat(this.form.amount) + (0.4 * parseFloat(this.form.amount))
          })
        }
      } else {
        alert('insufficient balance')
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
/*==================== GOOGLE FONTS ====================*/
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Rubik&display=swap");

/*==================== VARIABLES CSS ====================*/
:root {
  /*========== Colors ==========*/
  /* Change favorite color - Blue 210 - Purple 250 - Green 142 - Pink 340*/
  --hue-color: 210;

  /* HSL color mode */
  --first-color: hsl(var(--hue-color), 96%, 54%);
  --first-color-light: hsl(var(--hue-color), 96%, 69%);
  --first-color-alt: hsl(var(--hue-color), 96%, 37%);
  --first-color-lighter: hsl(var(--hue-color), 14%, 96%);
  --title-color: hsl(var(--hue-color), 12%, 15%);
  --text-color: hsl(var(--hue-color), 12%, 35%);
  --text-color-light: hsl(var(--hue-color), 12%, 65%);
  --white-color: #FFF;
  --body-color: hsl(var(--hue-color), 100%, 99%);
  --container-color: #FFF;

  /*========== Font and typography ==========*/
  --body-font: 'Lato', sans-serif;
  --pricing-font: 'Rubik', sans-serif;
  --biggest-font-size: 1.75rem;
  --normal-font-size: .938rem;
  --h2-font-size: 1.25rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;
  --tiny-font-size: .625rem;

  /*========== Margenes Bottom ==========*/
  --mb-0-25: .25rem;
  --mb-0-5: .5rem;
  --mb-1: 1rem;
  --mb-1-25: 1.25rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
}

@media screen and (min-width: 968px) {
  :root {
    --biggest-font-size: 2.125rem;
    --h2-font-size: 1.5rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
    --tiny-font-size: .688rem;
  }
}

/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*==================== REUSABLE CSS CLASSES ====================*/
.container {
  max-width: 1024px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
}

.grid {
  display: grid;
}

/*==================== CARD PRICING ====================*/
.card {
  padding: 3rem 0;
}

.card__container {
  gap: 3rem 1.25rem;
}

.card__content {
  position: relative;
  background-color: var(--container-color);
  padding: 2rem 1.5rem 2.5rem;
  border-radius: 1.75rem;
  box-shadow: 0 12px 24px hsla(var(--hue-color), 61%, 16%, 0.1);
  transition: .4s;
}

.card__content:hover {
  box-shadow: 0 16px 24px hsla(var(--hue-color), 61%, 16%, 0.15);
}

.card__header-img {
  width: 30px;
  height: 30px;
}

.card__header-circle {
  width: 40px;
  height: 40px;
  background-color: var(--first-color-lighter);
  border-radius: 50%;
  margin-bottom: var(--mb-1);
  place-items: center;
}

.card__header-subtitle {
  display: block;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
  text-transform: uppercase;
  margin-bottom: var(--mb-0-25);
}

.card__header-title {
  font-size: var(--biggest-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-1);
}

.card__pricing {
  position: absolute;
  background: linear-gradient(157deg, var(--first-color-light) -12%, var(--first-color) 109%);
  width: 60px;
  height: 88px;
  right: 1.5rem;
  top: -1rem;
  padding-top: 1.25rem;
  text-align: center;
}

.card__pricing-number {
  font-family: var(--pricing-font);
}

.card__pricing-symbol {
  font-size: var(--smaller-font-size);
}

.card__pricing-number {
  font-size: var(--h2-font-size);
}

.card__pricing-month {
  display: block;
  font-size: var(--tiny-font-size);
}

.card__pricing-number, 
.card__pricing-month {
  color: var(--white-color);
}

.card__pricing::after, 
.card__pricing::before {
  content: '';
  position: absolute;
}

.card__pricing::after {
  width: 100%;
  height: 14px;
  background-color: var(--white-color);
  left: 0;
  bottom: 0;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

.card__pricing::before {
  width: 14px;
  height: 16px;
  background-color: var(--first-color-alt);
  top: 0;
  left: -14px;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.card__list {
  row-gap: .5rem;
  margin-bottom: var(--mb-2);
}

.card__list-item {
  display: flex;
  align-items: center;
}

.card__list-icon {
  font-size: 1.5rem;
  color: var(--first-color);
  margin-right: var(--mb-0-5);
}

.card__button {
  padding: 1.25rem;
  border: none;
  font-size: var(--normal-font-size);
  border-radius: .5rem;
  background: linear-gradient(157deg, var(--first-color-light) -12%, var(--first-color) 109%);
  color: var(--white-color);
  cursor: pointer;
  transition: .4s;
}

.card__button:hover {
  box-shadow: 0 12px 24px hsla(var(--hue-color), 97%, 54%, 0.2);
}

/*==================== MEDIA QUERIES ====================*/
/* For small devices */
@media screen and (max-width: 320px) {
  .container {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  .card__content {
    padding: 2rem 1.25rem;
    border-radius: 1rem;
  }
}

/* For medium devices */
@media screen and (min-width: 568px) {
  .card__container {
    grid-template-columns: repeat(2, 1fr);
  }
  .card__content {
    grid-template-rows: repeat(2, max-content);
  }
  .card__button {
    align-self: flex-end;
  }
}

/* For large devices */
@media screen and (min-width: 968px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
  .card {
    height: 100vh;
    align-items: center;
  }
  .card__container {
    grid-template-columns: repeat(3, 1fr);
  }
  .card__header-circle {
    margin-bottom: var(--mb-1-25);
  }
  .card__header-subtitle {
    font-size: var(--small-font-size);
  }
}
</style>
