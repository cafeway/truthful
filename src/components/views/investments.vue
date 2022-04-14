<template>
  <section class="content">
    <div class="row center-block">
    </div>

    <div class="row center-block">
      <h4>YOUR EARNINGS</h4>
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
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Amount expected</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Time To Maturity </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="downline in investments" :key="downline.id" class="even" role="row">
                        <td v-if="downline.state == 'running'" style="color:blue">{{downline.profit}}</td>
                        <td v-if="downline.state == 'running'" style="color:blue"
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack(downline.id, downline.profit)"
      :start-time="downline.start"
      :end-time="downline.stop"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'matured'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'">
    </vue-countdown-timer>
                        </td>
                          <td v-if="downline.state == 'matured'" style="color:red">{{downline.profit}}</td>
                        <td v-if="downline.state == 'matured'" style="color:blue"
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack(downline.id, downline.profit)"
      :start-time="downline.start"
      :end-time="downline.stop"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'matured'"
      :day-txt="'D'"
      :hour-txt="'H'"
      :minutes-txt="'M'"
      :seconds-txt="'S'">
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
      uid: '',
      activated: false
    }
  },
  name: 'Tables',
  methods: {
    toProfile: function () {
      this.$router.push('/setting')
    },
    startCallBack: function(x) {
      console.log(x)
    },
    endCallBack: function(id, profit) {
      let db = firebase.firestore()
      db.collection('investments').where('id', '==', id).where('cashed', '==', 'false').get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('investments').doc(doc.id).update({
            cashed: 'true'
          })
          let newbalance = this.balance + profit
          let rev = this.revenue + profit
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            balance: newbalance
          })
          db.collection('users').doc(firebase.auth().currentUser.uid).update({
            revenue: rev
          })
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('timeline').add({
            message: profit + ' ' + 'was credited to your wallet',
            type: 'earning'
          })
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
          this.uid = data.uid
          this.activated = data.activated
        })
        db.collection('investments').where('mail', '==', user.email).get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.investments.push(doc.data())
          })
        })
        db.collection('users').doc(user.uid).collection('bonus').get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.bonus.push(doc.data())
          })
        })
        db.collection('users').doc(user.uid).collection('downlines').get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.invites.push(doc.data())
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
