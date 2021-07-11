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
		    <span class="input-group-text"> <i class="fa fa-link"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Upline Id" type="text" id="uid" v-model="form.UplineUid" require="required">
    </div>
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
    let db = firebase.firestore()
    let url = window.location.href
    let split = url.split('id=')
    let uid = split[1]
    db.collection('users').doc(uid).get().then(snaphot => {
      let data = snaphot.data()
      this.upline = data.uid
      this.lv1 = data.upline
      this.lv2 = data.lv1
    })
  },
  methods: {
    register: function () {
      let db = firebase.firestore()
      var country = document.getElementById('country').value
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        // let upline1 = this.form.UplineUid.slice(0, 28)
        // let upline2 = this.form.UplineUid.slice(28, 56)
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
          lv1: this.lv1,
          lv2: this.lv2
        })
        db.collection('users').doc(this.upline).collection('lv1').add({
          username: this.form.username,
          phonenumber: this.form.phonenumber,
          downlineId: data.user.uid,
          amount: 200,
          level: 1
        })
        db.collection('users').doc(this.upline).collection('timeline').add({
          type: 'lv1 downline registration',
          message: this.form.username + '  ' + 'joined using your id' + ' ' + 'at lv1'
        })
          // level 2
        db.collection('users').doc(this.lv1).collection('lv2').add({
          username: this.form.username,
          phonenumber: this.form.phonenumber,
          downlineId: data.user.uid,
          amount: 150,
          level: 1
        })
        db.collection('users').doc(this.lv1).collection('timeline').add({
          type: 'lv2 downline registration',
          message: this.form.username + '  ' + 'joined using your id' + ' ' + 'at lv2'
        })
          // level3
        db.collection('users').doc(this.lv2).collection('lv3').add({
          username: this.form.username,
          phonenumber: this.form.phonenumber,
          downlineId: data.user.uid,
          amount: 100,
          level: 1
        })
        db.collection('users').doc(this.lv2).collection('timeline').add({
          type: 'lv3 downline registration',
          message: this.form.username + '  ' + 'joined using your id' + ' ' + 'at lv3'
        })
        this.$swal({
          icon: 'success',
          text: 'Your account was created successfully'
        })
      })
      .catch(err => {
        this.$swal({
          icon: 'warning',
          text: err.message
        })
      })
    }
  }
}
</script>

<s.divider-text {
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
