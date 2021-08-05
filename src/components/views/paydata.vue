<template>
  <section class="content">
    <div class="row center-block">
    </div>

    <div class="row center-block">
      <h2>Payroll Data</h2>
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
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Capital</th>
                             <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Expected Amount</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Intrest</th>
                         <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day1</th>
                          <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day2</th>
                           <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day3</th>
                            <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day4</th>
                             <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day5</th>
                              <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day6</th>
                               <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day7</th>
                                <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day8</th>
                             <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day9</th>
                           <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Day10</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="roll in payrolls" :key="roll.id" class="even" role="row">
                        <td>{{roll.capital}}</td>
                        <td>{{ roll.amount * 10}}
                        <td>{{ roll.amount}}</td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day1"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'investment matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack2(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day2"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your  daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                          <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack3(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day3"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack4(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day4"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack5(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day5"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack6(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day6"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack7(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day7"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack8(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day8"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack9(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day9"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
    </vue-countdown-timer>
                        </td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack10(roll.amount, roll.id)"
      :start-time="roll.start"
      :end-time="roll.day10"
      :interval="1000"
      :start-label="'Time to maturity:'"
      :end-label="''"
      label-position="begin"
      :end-text="'your daily cashout matured'"
      :day-txt="'d'"
      :hour-txt="'h'"
      :minutes-txt="'m'"
      :seconds-txt="'s'">
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
      uid: '',
      payrolls: [],
      bonus: 0
    }
  },
  name: 'Tables',
  methods: {
    startCallBack: function(x) {
      console.log(x)
    },
    endCallBack: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d1) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d1: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack2: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d2) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d2: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack3: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d3) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d3: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack4: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d4) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d4: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack5: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d5) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d5: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack6: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d6) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d6: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack7: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d7) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d7: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack8: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d8) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d8: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack9: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          let id = doc.id
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d9) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d9: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    },
    endCallBack10: function(amount, id) {
      let bal = this.balance
      let db = firebase.firestore()
      db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').where('id', '==', id).get().then(snapshot => {
        snapshot.forEach((doc) => {
          db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).get().then(snapshot => {
            let data = snapshot.data()
            if (!data.d10) {
              db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').doc(doc.id).update({
                d10: true
              })
              let bonus = amount * 0.1
              let nb = bal + (amount - bonus)
              db.collection('users').doc(firebase.auth().currentUser.uid).update({
                balance: nb
              })
              db.collection('users').doc(firebase.auth().currentUser.uid).get().then(snapshot => {
                let c = bonus
                let data = snapshot.data()
                let upline = data.upline
                db.collection('users').doc(upline).get().then(snapshot => {
                  let data = snapshot.data()
                  let balance = data.balance
                  let bonus = data.slot
                  let b = balance + c
                  let nb = bonus + c
                  db.collection('users').doc(upline).update({
                    balance: b,
                    slot: nb
                  })
                })
              })
            }
          })
        })
      })
    }
  },
  mounted () {
    alert('all payroll packages mature individually at the same time!On maturity kindly refresh to credit your wallet balance with the daily interest')
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
        db.collection('users').doc(firebase.auth().currentUser.uid).collection('payroll').get().then(snapshot => {
          snapshot.forEach((doc) => {
            this.payrolls.push(doc.data())
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
