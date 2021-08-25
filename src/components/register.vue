<template>
 
<div class="container">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

<hr>





<div class="card bg-light">
<article class="card-body mx-auto" style="max-width: 400px;">
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	<p class="divider-text">
       
    </p>
	<form>
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Username " id="username" v-model="form.username" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Email address" type="email" id="email" v-model="form.email">
    </div> <!-- form-group// -->
     <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="phone number" type="text" id="phonenumber" v-model="form.phonenumber">
    </div>
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select class="form-control" name="country" id="country">
			<option selected=""> Select country</option>
			<option>Kenya</option>
			<option>Uganda</option>
			<option>Rwanda</option>
            <option>Tanzania</option>
            <option>Zambia</option>
            <option>Malawi</option>
            <option>Ghana</option>
            <option>Nigeria</option>
            <option>South Africa</option>
		</select>
	</div> <!-- form-group end.// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Create password" type="password" id="password" v-model="form.password">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="button" @click="register()" class="btn btn-primary btn-block"> Create Account  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Have an account? <a href="/login">Log In</a> </p>                                                                 
</form>
</article>
</div> <!-- card.// -->

</div> 
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data(router) {
    return {
      upline: '',
      currency: '',
      lv1: '',
      lv2: '',
      form: {
        username: '',
        email: '',
        phonenumber: '',
        password: '',
        UplineUid: ''
      }
    }
  },
  mounted() {
    let url = window.location.href
    let split = url.split('id=')
    let uid = split[1]
    this.upline = uid
    if (typeof this.upline === 'undefined') {
      this.upline = '6JJ5SAWdG8VOcmKazCie5cXVbnq2'
    }
  },
  methods: {
    register: function () {
      var country = document.getElementById('country').value
      switch (country) {
        case 'Kenya':
          this.currency = 'KES'
          break
        case 'Rwanda':
          this.currency = 'RWF'
          break
        case 'Uganda':
          this.currency = 'UGX'
          break
        case 'Tanzania':
          this.currency = 'TZS'
          break
        case 'Zambia':
          this.currency = 'ZMW'
          break
        case 'Nigeria':
          this.currency = 'NGN'
          break
        case 'Ghana':
          this.currency = 'GHS'
          break
        case 'South Africa':
          this.currency = 'ZAR'
          break
        case 'Malawi':
          this.currency = 'MWK'
          break
        default:
          break
      }
      let db = firebase.firestore()
      db.collection('users').doc(this.upline).get().then(snapshot => {
        let data = snapshot.data()
        this.lv1 = data.lv1
        this.lv2 = data.lv2
      })
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        db.collection('users').doc(data.user.uid).set({
          username: this.form.username,
          email: this.form.email,
          phonenumber: this.form.phonenumber,
          country: country,
          activated: false,
          balance: 0,
          revenue: 0,
          downlines: 0,
          trivia: 0,
          bitcoin: 0,
          auction: 0,
          slot: 0,
          uid: data.user.uid,
          upline: this.upline,
          currency: this.currency
        })
        db.collection('users').doc(this.upline).collection('downlines').doc(data.user.uid).set({
          name: this.form.username,
          phone: this.form.phonenumber,
          id: data.user.uid,
          amount: 0,
          currency: this.currency,
          level: 1
        })
        db.collection('users').doc(this.lv1).collection('downlines').doc(data.user.uid).set({
          name: this.form.username,
          phone: this.form.phonenumber,
          id: data.user.uid,
          amount: 0,
          currency: this.currency,
          level: 2
        })
        db.collection('users').doc(this.lv2).collection('downlines').doc(data.user.uid).set({
          name: this.form.username,
          phone: this.form.phonenumber,
          id: data.user.uid,
          amount: 0,
          currency: this.currency,
          level: 3
        })
        db.collection('users').doc(this.upline).collection('timeline').add({
          message: this.form.username + 'joined using your invite link',
          type: 'downline registration'
        })
        alert('account created successfully')
        this.$router.push('/login')
      })
      .catch(err => {
        alert(err.message)
      })
    }
  }
}
</script>
<style>
.divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}

.btn-facebook {
    background-color: #405D9D;
    color: #fff;
}
.btn-twitter {
    background-color: #42AEEC;
    color: #fff;
}
</style>
