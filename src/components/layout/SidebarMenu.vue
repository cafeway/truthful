<template>
  <ul class="sidebar-menu">
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-home  "></i>
        <span class="page">Home</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-user"></i>
        <span class="page">Profile</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/paypal">
      <a>
        <i class="fa fa-dollar"></i>
        <span class="page">Cashout</span>
      </a>
    </router-link>
     <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-bullhorn"></i>
        <span class="page">Refferal Earnings</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/investments">
      <a>
        <i class="fa fa-clock-o"></i>
        <span class="page">Sacco Earnings</span>
      </a>
    </router-link>
    <!-- <router-link tag="li" class="pageLink" to="/mypayrolls">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Payroll investments</span>
      </a>
    </router-link> -->
    <!-- <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-money"></i>
        <span class="page">Emoji spin</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="" @click="toCasino()">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Spin and Win</span>
      </a>
    </router-link>-->
     <router-link tag="li" class="pageLink" to="/payroll">
      <a>
        <i class="fa fa-money"></i>
        <span class="page">Investment in Sacco</span>
        <small class="label pull-right bg-red">all packages</small>
      </a>
    </router-link>
    <hr>
    <router-link tag="li" class="pageLink" to="/payments">
      <a>
        <i class="fa fa-btc text-green"></i>
        <span class="page">Pay with Crypto</span>
      </a>
    </router-link>
      <router-link tag="li" class="pageLink" to="/visa">
      <a>
        <i class="fa fa-cc-visa text-red"></i>
        <span class="page">Pay with Visa</span>
      </a>
    </router-link>
     <router-link tag="li" class="pageLink" to="/mobileMoney">
      <a>
        <i class="fa fa-phone text-yellow"></i>
        <span class="page">Pay with Mobile Money</span>
      </a>
    </router-link>
    <hr>
     <router-link tag="li" class="pageLink" to="/login" @click="logout()">
      <a>
        <i class="fa fa-sign-out text-yellow"></i>
        <span class="page">Sign Out</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'SidebarMenu',
  methods: {
    logout: function () {
      firebase.auth().signOut()
    }
  }
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}
.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}
.treeview-title {
  z-index: 1;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}
</style>
