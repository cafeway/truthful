<template>
  <!-- Main content -->
  <section class="content">
    <!-- GitHub hint -->
    <div class="row">
      <div class="col-xs-12">
        <alert :dismissible="true"
               type="warning"
               :iconClasses="['fa', 'fa-check']"
               title="LongLifeTrading">
          <!-- <span>Click on icon to check it out in alpha mode.</span> -->
          <a href="#" target="_blank">
            <i class="fa fa-play fa-2x"></i>
          </a>
        </alert>
      </div>

      <!-- Info boxes -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-aqua"
                  :icon-classes="['fa', 'fa-credit-card']"
                  text="wallet"
                  :number= this.balance></info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-red"
                  :icon-classes="['fa', 'fa-gift']"
                  text="Cashouts"
                  :number= this.revenue ></info-box>
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>
      
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-purple"
                  :icon-classes="['fa', 'fa-heart']"
                  text="Bonus"
                  :number= this.slot></info-box>
      </div>
      <!-- /.col -->
      <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-orange"
                  :icon-classes="['fa', 'fa-bullhorn']"
                  text="Downlines"
                  :number= this.downlines></info-box>
      </div>
      <!-- /.col -->
    </div>
   
    <!-- /.row -->

    <!-- <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>Web Traffic Overview</strong>
              </p>
              <canvas id="trafficBar" ></canvas>
            </div>
            <hr class="visible-xs-block">
            <div class="col-sm-6 col-xs-12">
              <p class="text-center">
                <strong>Language Overview</strong>
              </p>
              <canvas id="languagePie"></canvas>
            </div>
          </div>
        </div>
        <div class="text-center">
          <small><b>Pro Tip</b> Don't forget to star us on github!</small>
        </div>
      </div>
    </div> -->
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>
import Alert from '../widgets/Alert'
import InfoBox from '../widgets/InfoBox'
import ProcessInfoBox from '../widgets/ProcessInfoBox'
import firebase from 'firebase'
export default {
  name: 'Dashboard',
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },
  data () {
    return {
      generateRandomNumbers (numbers, max, min) {
        var a = []
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return a
      },
      username: '',
      balance: 0,
      revenue: 0,
      phonenumber: '',
      auction: 0,
      bitcoin: 0,
      downlines: 0,
      trivia: 0,
      user_email: '',
      slot: 0,
      country: '',
      pending: 0,
      currency: '',
      activated: false

    }
  },
  computed: {
    coPilotNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    personalNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    isMobile () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  // methods: {
  //   convert: function (amount){}
  // },
  methods: {
    toProfile: function () {
      this.$router.push('/setting')
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
          this.country = data.country
          this.currency = data.currency
          this.activated = data.activated
        })
        db.collection('users').doc(user.uid).collection('downlines').get().then(snapshot => {
          this.downlines = snapshot.size
        })
      } else {
        this.$router.push('/login')
      }
    })
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
