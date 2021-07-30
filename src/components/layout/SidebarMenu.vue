<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS  </li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <li class="header">YOUR DATA</li>
     <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Downlines</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/investments">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">ROI investments</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/mypayrolls">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Payrolls</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Updates</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Profile</span>
      </a>
    </router-link>
    
    <li class="header">INVEST HERE</li>
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
     <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-btc"></i>
        <span class="page">Promax Coin</span>
        <small class="label pull-right bg-red">Hot</small>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-dollar"></i>
        <span class="page">ROI packages</span>
        <small class="label pull-right bg-red">popular</small>
      </a>
    </router-link>
     <router-link tag="li" class="pageLink" to="/payroll">
      <a>
        <i class="fa fa-dollar"></i>
        <span class="page">Daily Payroll</span>
        <small class="label pull-right bg-red">new</small>
      </a>
    </router-link>

    <li class="header">PAYMENT METHODS</li>
    <router-link tag="li" class="pageLink" to="/payments">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page">Bitcoins & Chiper cash</span>
      </a>
    </router-link>
     <router-link tag="li" class="pageLink" to="/mobileMoney">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page">Mobile Money</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu',
  methods: {
    toCasino: function () {
      window.location.href('https://mpesa-modal.herokuapp.com')
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
