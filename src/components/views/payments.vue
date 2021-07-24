<template>
  <section class="content">
    <div class="row center-block">
      <h2>payments</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Available Methods</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Method</th>
                  <th>Initiator</th>
                  <th style="width: 60px">Label</th>
                </tr>
                 <tr>
                  <td class="text-success">2.</td>
                  <td class="text-primary">Bitcoins(coinbase)</td>
                  <td style="padding-top:20px">
                      <button  class="btn btn-secondary btn-block">
                    <div>
  <a class="donate-with-crypto"
     href="https://commerce.coinbase.com/checkout/c45decdb-619e-4354-a4b8-5816dac25d04">
    Donate with Crypto
  </a>
</div>  
                    </button>
                  </td>
                  <td><img style="width:60px;height:60px" src="data:image/png;base64,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"></td>
                </tr>
                 <tr>
                  <td class="text-success">3.</td>
                  <td class="text-warning">Chipper Cash</td>
                  <td style="padding-top:20px">
                     <div class="alert alert-warning" role="alert">
   Pay to chipper tag: @kefwe
</div>
                  </td>
                  <td><img style="width:60px;height:60px" src="data:image/png;base64,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"></td>
                </tr> 
                <tr>
                
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import $ from 'jquery'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')
import firebase from 'firebase'
export default {
  name: 'Tables',
  data() {
    return {
      upline: '',
      lv1: '',
      lv2: '',
      username: '',
      email: '',
      phone: ''
    }
  },
  created () {
    const script = document.createElement('script')
    script.src = 'https://checkout.flutterwave.com/v3.js'
    document.getElementsByTagName('head')[0].appendChild(script)
  },
  mounted() {
    let db = firebase.firestore()
    db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
      let data = snapshot.data()
      this.upline = data.upline
      this.lv1 = data.lv1
      this.lv2 = data.lv2
      this.username = data.username
      this.email = data.email
      this.phone = data.phonenumber
    })
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
    let flutterwave = document.createElement('script')
    flutterwave.setAttribute('src', 'https://checkout.flutterwave.com/v3.js')
    document.head.appendChild(flutterwave)
    let coinbase = document.createElement('script')
    coinbase.setAttribute('src', 'https://commerce.coinbase.com/v1/checkout.js?version=201807')
    document.head.appendChild(coinbase)
  },
  methods: {
    pay: function () {
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X ',
        tx_ref: 'registration fees' + new Date(),
        amount: 550,
        currency: 'KES',
        country: 'KE',
        payment_option: 'mpesa,card,ussd,account',
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.username
        },
        callback: function () {
          let db = firebase.firestore()
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            activated: true
          })
          db.collection('users').doc(this.upline).get().then(snapshot => {
            let data = snapshot.data()
            let revenue = data.revenue
            let newerevenue = revenue + 200
            db.collection('users').doc(this.upline).update({
              revenue: newerevenue
            })
            db.collection('users').doc(this.upline).collection('timeline').add({
              type: ' refferal earning',
              message: this.username + '  ' + 'activated and earned you 200 ksh'
            })
          })
          // level 2
          db.collection('users').doc(this.lv1).get().then(snapshot => {
            let data = snapshot.data()
            let revenue = data.revenue
            let newerevenue = revenue + 150
            db.collection('users').doc(this.lv1).update({
              revenue: newerevenue
            })
            db.collection('users').doc(this.lv1).collection('timeline').add({
              type: ' refferal earning',
              message: this.username + '  ' + 'activated and earned you 150 ksh'
            })
          })
          // level 3
          // db.collection('users').doc(this.lv2.get().then(snapshot => {
          //   let data = snapshot.data()
          //   let revenue = data.revenue
          //   let newerevenue = revenue + 100
          //   db.collection('users').doc(this.lv2).update({
          //     revenue: newerevenue
          //   })
          //   db.collection('users').doc(this.lv2).collection('timeline').add({
          //     type: ' refferal earning',
          //     message: this.username + '  ' + 'activated and earned you 100 ksh'
          //   })
          // })
          db.collection('users').doc(this.lv2).get().then(snapshot => {
            let data = snapshot.data()
            let revenue = data.revenue
            let newerevenue = revenue + 100
            db.collection('users').doc(this.lv2).update({
              revenue: newerevenue
            })
            db.collection('users').doc(this.lv2).collection('timeline').add({
              type: ' refferal earning',
              message: this.username + '  ' + 'activated and earned you 100 ksh'
            })
          })
        }

      })
    },
    topush: function () {
      firebase.auth().onAuthStateChanged(user => {
        var urlgenerator = require('urlgenerator')
        var createURLwithParameters = urlgenerator.createURLwithParameters
        var baseURL = 'https://mpesa-modal.herokuapp.com/pvp'
        let uid = user.uid
        var parameters = {'uid': uid}
        var finalUrl = createURLwithParameters(baseURL, parameters)
        window.location.href = finalUrl
      })
    },
    tocasino: function () {
      window.location.href = 'https://mpesa-modal.herokuapp.com'
    }
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}

table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}
</style>
