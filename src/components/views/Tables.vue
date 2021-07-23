<template>
  <section class="content">
    <div class="row center-block">
    </div>

    <div class="row center-block">
      <h2>INVESTMENTS</h2>
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
                         <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Cashed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="downline in downlines" :key="downline.id" class="even" role="row">
                        <td class="sorting_1">{{downline.username}}</td>
                        <td>{{downline.downlineId}}</td>
                        <td>{{downline.phonenumber}}</td>
                        <td>{{ downline.amount}}</td>
                        <td
                        >
                         <vue-countdown-timer
      @start_callback="startCallBack('event started')"
      @end_callback="endCallBack('event ended')"
      :start-time="'2018-10-10 00:00:00'"
      :end-time="1481450115"
      :interval="1000"
      :start-label="'Until start:'"
      :end-label="'Until end:'"
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
    <!-- LEVEL TWO DOWNLINES -->
    <div class="row center-block">
      <h2>DOWNLINES BONUS <i class="fa fa-users" aria-hidden="true"></i></h2>
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
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Username</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Downline Id</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Phone Number</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Amount</th>
                         <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Activation Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="downline in level2" :key="downline.id" class="even" role="row">
                        <td class="sorting_1">{{downline.username}}</td>
                        <td>{{downline.downlineId}}</td>
                        <td>{{downline.phonenumber}}</td>
                        <td>{{ downline.amount}}</td>
                        <td>null</td>
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
    <!-- LEVEL 3-->
    <div class="row center-block">
      <h2>Downlines<i class="fa fa-users" aria-hidden="true"></i></h2>
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
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Username</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Downline Id</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Phone Number</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Amount</th>
                         <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Activation Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="downline in level3" :key="downline.id" class="even" role="row">
                        <td class="sorting_1">{{downline.username}}</td>
                        <td>{{downline.downlineId}}</td>
                        <td>{{downline.phonenumber}}</td>
                        <td>{{ downline.amount}}</td>
                        <td>null</td>
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
import $ from 'jquery'
import firebase from 'firebase'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  data() {
    return {
      downlines: [],
      level2: [],
      level3: []
    }
  },
  name: 'Tables',
  methods: {
    startCallBack: function(x) {
      console.log(x)
    },
    endCallBack: function(x) {
      console.log(x)
    }
  },
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
    firebase.auth().onAuthStateChanged(user => {
      let db = firebase.firestore()
      db.collection('investments').where(user.uid).collection('lv1').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.downlines.push(doc.data())
        })
      })
      db.collection('users').doc(user.uid).collection('lv2').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.level2.push(doc.data())
        })
      })
      db.collection('users').doc(user.uid).collection('lv3').get().then(snapshot => {
        snapshot.forEach(doc => {
          this.level3.push(doc.data())
        })
      })
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
