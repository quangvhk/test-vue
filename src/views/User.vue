<template>
  <div style="padding: 20px;">
    <SkillAddForm :user="currentUser" />
    <SkillList :user="currentUser" />
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import SkillAddForm from '@/components/SkillAddForm';
import SkillList from '@/components/SkillList';
export default {
  components: {SkillList, SkillAddForm},
  computed: {
    ...mapGetters('user', ['users']),
    currentUser() {
      const username = this.$route.params.username;
      return this.users.find(u => u.username === username);
    }
  },
}
</script>
