<template>
    <div class="main">
      <table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Note</th>
              </tr> 
          </thead>
          <tbody>
              <tr v-for="(v,index) in record" :key="index">
                  <td>{{ index + 1}}</td>
                  <td>{{ v.type }}</td>
                  <td>{{ v.date }}</td>
                  <td>{{ v.amount }}</td>
                  <td>{{ v.note }}</td>
              </tr>
          </tbody>
           total : {{this.total.all}}
      </table>
     
  </div>

</template>

<script>

import PiggyBankStore from '@/store/PiggyBank'
export default {
    data(){
        return {record:[],total:{}}
    },
    /*computed:{
        getData(){
            return PiggyBankStore.state.data
        }
        
    },*/
    created(){
        this.fetchData()
        this.sumTotal()
    },
    methods:{
        fetchData() {
            //RecordStore.dispatch('fetchData')
            this.record = PiggyBankStore.getters.record
        },
        sumTotal(){
            PiggyBankStore.dispatch('sumTotal')
            this.total = PiggyBankStore.getters.total
        }
    }
}
</script>

<style scoped>
    .main{
        width:100%;
        display: flex;
        justify-content: center;
    }

    table{
        width:80%;
    }

    td{
        padding:1vh;
    }
</style>