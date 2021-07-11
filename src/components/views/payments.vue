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
                  <td class="text-success">1.</td>
                  <td class="text-success">LIPA NA MPESA(Push Stk)</td>
                  <td style="padding-top:20px">
                      <button class="btn btn-success btn-block" @click="pay()">Initiate Push stk</button>
                  </td>
                  <td><img style="width:60px;height:60px" src="data:image/png;base64,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"></td>
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
                  <td><img style="width:60px;height:60px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAACdCAMAAAAdWzrjAAAAgVBMVEUAAAD////29vbs7OxXV1f5+fk4ODiurq4ODg7l5eXV1dUaGhrExMTv7+8GBgYdHR0/Pz/b29slJSV0dHTKysq0tLRkZGRFRUWioqJSUlKMjIxubm6FhYWnp6fJyclKSkovLy99fX28vLwrKyuYmJiampozMzMjIyNfX1+RkZFWVlZb79TNAAAHiUlEQVR4nO2caWOiMBCGFxAsClU88b5aW/f//8CtJIO5ODTdwrrv8y0CIbwkk5lJ8NcvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQy6Kwul2kvDJPo/TL+3Dfdnn+M0/gYuo6AG0bL80vTzfpnWEWxY8CfrPtNN+1fYLQOTfIxvPTcdPtazywp1u9KuG66he1mNynXL+uHn023ssUcjPZPxd003c628jqto9+V7anptraSfoUFlEbyrunWtpBTr76AjhN3mm5v6zh59wj4ZQxnTbe4ZfTv6oGZhPum29wqXqJ7BXScBNOJQHq/gI4TNd3qFjEvVMkLw+IgD+EJcTaKFEdLSsaMp2YZF402u0WYxrB3mYvJrGBs8ha3jTW5XSx8TRo3HWinjQ3+zqGs3tfZ+LA8jOd/reGtQQ/mEuPwPOsnhoWVnsZbj70ZN9z8lg69RLH3RRLQD4NJ9kOcsuIizEpTNgb6WYnobYSmpbFwJDyOb9nLhXTRtTY+XD564jVJ91uyJHoXjD4KTn3XJBwXnCknGf2j+Epeme8ZD+mHAbcQXVbssAZFXEGlee40F6qrNKaX69HRnilhB0aKQfenRc96B1rPmhafe1HP7RlPm2tJMv/tdrRSQVdS0FXrSigoVxW8eQe1FRSb8Shn1byZReGok45vCu522kN/Mc0tq62Cue3QFaQxcYeCTmibdl8rFXr6HCKiRn9H/ZSVPjNd6dHcbq0g3dSgYMzkuEfB8i5TA3XAFVk2zlzpsq52xuKWpvXjWHh+sg4PKei+p2k6pdrYOOYKHr8OdcnZYrNRlYLu5qu2Iz2KZZJEuVdlqKbOJtpsljuO3vsqGCwOt5Cb+z4PKehlhUA6kyu4EgtxNjNwBZPVmOAqcQW9zA/o8w5pGEd3sFIECaou6CvjIFWOk6X085gvzzzGrOtYKPhrz0rMEnLR+Kg5CnpyBSda67mCMXNS91xPqxyJ0qVq2ARlMtnK6/ABHxq+4Gz3qRsytW0U5Dqxa2UFO6yUTfqkoLZHQFaQaqjsNmUoZrA0yGDs5HHv7aWj9EZW0q80srNzrRRcsveTDUpZwRGzv9kyWF0FD6wGG4dmJIe7ihxmlAhZvr3ZtHx2M6aZY/2XFDw1o+BOXt/UDYeBw1RCGgI7Vo9flrXhCgpvq1dfwamggKzggpXesyqYgnrmQ1Fww66xGcUL2duyXgnm3mWpOeUK+pPthLGNaysY3DWTxHSHyYRbFVnBj2+YSWayUVtaVJWR1ngTr0VrMtUKvvBLmZGQvBlugN3Mpdb9Qf5k5M2wccsnAX2w38FBvs+q+opyohr1PKSgu14ul10ShjmhXMHu15E3Ms7MbdcV5L4VedRv19rIglk9tRLTWSu4ZfWUevkPKSjBO40hqvNZIq1KQYniFF0dvlvBv9YHRVxutwwKXngVdyjo2q1VjOXaariD5fDJTQ1UJGwVDOmRdQUph3aHgq5lkrUjt6/0yevA3LVyr4jm4iinxlx8o5cvG6gKxnkgyRX08jts5bhYqM12tUxJ5dVaAp7PJKRsGHfK/LLFkYf8QYdn+bvCE1MygWXsI2EAVcXFxNF+tXEoJ6uSOtdEji/gyGJ5khjEIs3YWMQkp+FwOB9Kr4sruA6uhySfriom8bi97tn4MRzZJvk1jMJIDmNiOcVLeQd5Nqa7ZGpbRXUiskctUqkgxWJ2iS2xFUSNoOQgX5HISzXUNGmvMN2ESdQCBeOAptBL9QNXoLgzcfUVW/kK9S2SWm7+YCNKbnG/4QcV1A7cojoeBLrWGyHPsh7V70RNyaoO0C0DmxwWwX7+Oc09Cx5Z/ZyCvQ7xyaeMm4J9Plhi6y1oyvReuXKlOnPaCbPbMTdMvJtnRmPq5xR0XMLnuQ4hs0CjL3qtkqgCdf2ywqFRTzdkYRQvnUiopT+ooHB3dkDMzZBxKVkfr0VH9VhL97R11JaZsjnqQM/Y5km4tig4pOFXsTxZiRZjlXg06lqn4xkH/UyPPgUHsS0K5oPFtdy2oA06vzA6Xmhf7BR5P2+y1BPxrTykoMlJsFUwH8eWG5r170j8goG80j95KsyPD9cJPUV8nEl+2UsvC2q8m4LsB1Lwd5yVuIKDrOSb+uCGXWZS0PVlnHwmyYohUzAI+VFLU3jQdHEiQ1x7Mnzy1NVPuxGMl+/p27qjubX7IONV/WHESi+sRP2ClUzWYsQOGT7Z5VUI0PVn6d78xoHt7iNDtilOlY79sTTkJj3rfU9PgmET63Wf3iGP115nG+NGautlladB2xbIuxi3cv2Cb2a3tr7oE2Hequ/zQTowf7Po/gc7pGujbcNkEpGC5rQ8vqwTMZvCUgXt80LPhSmYLVXQNpp8PtaGr0pKFMQ/BejovbBEQQho4lOdkQsVdGEDzQS9egrGmIULefNrKHj8hs+Anpf5xK9QMLHeW/PsrMIyBX2EwjVYHF2zgn7PNh/+37BbJlcRpbjYD9NF+QdjQGI/TiP6ArgfTTYHpBEe4IOyVwP8+yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQB3+AP0OcO06zkqKAAAAAElFTkSuQmCC"></td>
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
        public_key: 'FLWPUBK-5f67453df7e9775baa8cae9bdc0de688-X',
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
