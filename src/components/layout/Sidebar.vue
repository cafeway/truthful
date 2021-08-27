<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left info">
          <div>
            <h4 class="white"> Balance {{this.balance}} <small> {{ this.currency }}</small>  </h4>
          </div>
        </div>
      </div>

      <!-- search form (Optional) -->
    
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'
import firebase from 'firebase'
export default {
  data() {
    return {
      username: '',
      currency: '',
      balance: 0,
      activated: false
    }
  },
  name: 'Sidebar',
  props: ['user'],
  components: { SidebarMenu },
  mounted: function() {
    window
      .jQuery('[data-toggle="hideseek"]')
      .off()
      .hideseek()
    firebase.auth().onAuthStateChanged(user => {
      let db = firebase.firestore()
      db.collection('users').doc(user.uid).get().then(snapshot => {
        let data = snapshot.data()
        this.username = data.username
        this.balance = data.balance
        this.currency = data.currency
        this.activated = data.activated
      })
    })
  }
}
</script>
<style scope="local">
.user-panel .image img {
  border-radius: 50%;
}
#searchForm {
  padding-left: 0em;
  padding-right: 0em;
}
#searchContainer {
  height: 100%;
  padding-bottom: 0em;
}
#search {
  width: 80%;
  float: right;
}

#search-btn {
  width: 20%;
}
</style>
