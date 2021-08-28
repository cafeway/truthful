<template>
  <section class="content">
    <div class="row center-block">
    </div>

    <div class="row center-block">
      <h2>running Investments</h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">id</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Amount</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">State</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Timer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="downline in investments" :key="downline.id" class="even" role="row">
                        <td class="sorting_1">{{downline.id}}</td>
                        <td>{{downline.amount}}</td>
                        <td>{{downline.state}}</td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="downline.start"
      :end-time="downline.stop"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="'Remaining:'"
      label-position="begin"
      :end-text="'Event ended!'"
      :day-txt="'days'"
      :hour-txt="'hours'"
      :minutes-txt="'minutes'"
      :seconds-txt="'seconds'">
    </vue-countdown-timer>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                       
                       
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
      <div class="row center-block">
      <h2>UserAccounts<i class="fa fa-users" aria-hidden="true"></i></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Email</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Name</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="d in useraccounts" :key="d.id" class="even" role="row">
                        <td class="sorting_1">{{d.email}}</td>
                        <td>{{d.username}}</td>
                        <td><button type="button" @click="activate(d.email)" class="btn btn-primary btn-block">Activate</button></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                       
                       
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
    <div class="row center-block">
      <h2>Cashouts<i class="fa fa-users" aria-hidden="true"></i></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Amount</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">UId</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Phone Number</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="d in cashouts" :key="d.id" class="even" role="row">
                        <td class="sorting_1">{{d.amount}}</td>
                        <td>{{d.uid}}</td>
                        <td>{{d.phone}}</td>
                        <td><button type="button" @click="confirm(d.id, d.uid)" class="btn btn-primary btn-block"> Confirm</button></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                       
                       
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  data() {
    return {
      investments: [],
      level3: [],
      username: '',
      balance: 0,
      revenue: 0,
      phonenumber: '',
      auction: 0,
      bitcoin: 0,
      trivia: 0,
      user_email: '',
      slot: 0,
      invites: [],
      bonus: [],
      cashouts: [],
      useraccounts: [],
      balances: []
    }
  },
  name: 'Tables',
  methods: {
    activate: function (email, id) {
      let db = firebase.firestore()
      db.collection('users').where('email', '==', email).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            let upline = data.upline
            let lv1 = data.lv1
            let lv2 = data.lv2
            db.collection('users').doc(id).update({
              activated: true
            })
            db.collection('users').doc(upline).collection('downlines').doc(id).get().then(snapshot => {
              let data = snapshot.data()
              let amount = data.amount
              let newAmount = amount + 2
              db.collection('users').doc(upline).collection('downlines').doc(id).update({
                amount: newAmount
              })
            })
            db.collection('users').doc(lv1).collection('downlines').doc(id).get().then(snapshot => {
              let data = snapshot.data()
              let amount = data.amount
              let newAmount = amount + 1
              db.collection('users').doc(lv1).collection('downlines').doc(id).update({
                amount: newAmount
              })
            })
            db.collection('users').doc(lv2).collection('downlines').doc(id).get().then(snapshot => {
              let data = snapshot.data()
              let amount = data.amount
              let newAmount = amount + 0.5
              db.collection('users').doc(lv2).collection('downlines').doc(id).update({
                amount: newAmount
              })
            })
          })
        })
      })
      alert('account activated successfuly')
    },
    startCallBack: function(x) {
      console.log(x)
    },
    endCallBack: function(x) {
      console.log(x)
    },
    confirm: function (id) {
      let db = firebase.firestore()
      db.collection('cashouts').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('cashouts').doc(doc.id).delete()
        })
      })
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let db = firebase.firestore()
        db.collection('users').doc(user.uid).get().then(snapshot => {
          let data = snapshot.data()
          this.balance = data.balance
          this.revenue = data.revenue
          this.phonenumber = data.phonenumber
          this.auction = data.auction
          this.bitcoin = data.bitcoin
          this.downlines = data.downlines
          this.trivia = data.trivia
          this.slot = data.slot
        })
        db.collection('investments').get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.investments.push(doc.data())
          })
        })
        db.collection('cashouts').get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.cashouts.push(doc.data())
          })
        })
        db.collection('users').get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.useraccounts.push(doc.data())
          })
        })
      } else {
        this.$router.push('/login')
      }
    })
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
