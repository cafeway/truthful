<template>
  <li class="dropdown user user-menu">
    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
      <!-- The user image in the navbar-->
      <img :src="user.avatar" class="user-image" alt="User Image">
      <!-- hidden-xs hides the username on small devices so only the image appears. -->
      <span class="hidden-xs">{{this.username}}</span>
    </a>
    <!-- Account Info and Menu -->
    <ul class="dropdown-menu">
      <li class="user-header" style="height:auto;min-height:85px;padding-bottom:15px;">
        <p>
          <span>{{this.username}}</span>
          <small>Activated: {{ this.status }}</small>
        </p>
      </li>
      <li class="user-footer">
        <a href="javascript:;" class="btn btn-default btn-flat btn-block" @click="logout()">
          <i class="fa fa-sign-out"></i>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'UserMenu',
  props: ['user'],
  data() {
    return {
      username: '',
      status: ''
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      let db = firebase.firestore()
      db.collection('users').doc(user.uid).get().then(snapshot => {
        let data = snapshot.data()
        this.username = data.username
        this.status = data.activated
      })
    })
  },
  methods: {
    logout: function () {
      firebase.auth().signOut()
      this.$router.push('/login')
    }
  }
}
</script>
