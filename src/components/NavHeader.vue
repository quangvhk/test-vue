<template>
  <div>
    <el-input placeholder="Type username" @keyup.native.enter="onAddUser" v-model="name"></el-input>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapActions('user', ['addUser']),
    onAddUser() {
      const name = this.name;
      this.addUser(name);
      this.name = '';
    },
  }
}
</script>
