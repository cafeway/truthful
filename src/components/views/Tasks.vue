<template>
  <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Timeline</h1>
      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{today}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="line in timeline">
          <!-- timeline icon -->
          <i v-bind:class="'fa ' + line.icon + ' bg-' + line.color"></i>
          <div class="timeline-item">
            <span class="time text-success"><i class="fa fa-clock-o text-success"></i>&nbsp;{{ line.message }}</span>
            <h3 class="timeline-header">{{ line.type }}</h3>
            <div class="timeline-body" v-if="line.body" v-html="line.body">
            </div>
            <div class="timeline-footer" v-if="line.buttons">
              <a v-for="btn in line.buttons" v-bind:class="'btn btn-' + btn.type + ' btn-xs'" v-bind:href="btn.href" v-bind:target="btn.target">{{btn.message}}</a>
            </div>
          </div>
        </li>
      <!-- END timeline item -->
      </ul>
    </div>
  </section>
</template>
<script>
  import firebase from 'firebase'
  export default {
    name: 'Tasks',
    data() {
      return {
        timeline: []
      }
    },
    mounted() {
      let db = firebase.firestore()
      firebase.auth().onAuthStateChanged(user => {
        db.collection('users').doc(user.uid).collection('timeline').get().then(snapshot => {
          snapshot.forEach(doc => {
            this.timeline.push(doc.data())
          })
        })
      })
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
