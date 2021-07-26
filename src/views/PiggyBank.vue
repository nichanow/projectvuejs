<template>
  <div class="piggy">
      <piggy-bank-record></piggy-bank-record>
      <piggy-bank-table></piggy-bank-table>
  </div>
</template>

<script>


import PiggyBankRecord from '@/components/PiggyBankRecord'
import PiggyBankTable from '@/components/PiggyBankTable'
export default {
    components: {
        PiggyBankRecord,
        PiggyBankTable
    }

}
</script>

<style scoped>
    .piggy{
        justify-content: center;
    }
</style>