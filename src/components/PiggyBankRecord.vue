<template>
  <div>
      <h1>Piggy Bank</h1>
      <div>
        <label for="type">Type : </label>
        <select name="type" id="type" v-model="form.type">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select>
        <br>

        <label for="date">Date : </label>
        <input type="date" v-model="form.date">
        <br>

        <label for="amount">Amount : </label>
        <input type="number" v-model="form.amount">
        <br>

        <label for="note">Note : </label>
        <input type="text" v-model="form.note">
        <br>

        <button @click="updatePiggyBank">Update</button>
      </div>
  </div>
</template>

<script>
import PiggyBankStore from '@/store/PiggyBank'

export default {
    data(){
        return{
            form:{
                type:'Income',
                date:null,
                amount:0,
                note:''
            }
        }
    },
    methods:{
        updatePiggyBank(){
            let payload = {
               type: this.form.type,
                date: this.form.date,
                amount: Number(this.form.amount),
                note: this.form.note
            }
            PiggyBankStore.dispatch('insertData',this.form)
            this.clearForm()
           PiggyBankStore.dispatch('sumTotal')
        },
       
        clearForm(){
            this.form = {
                type:'Income',
                date:null,
                amount:0,
                note:''
            }
        }
    }
}
</script>

<style scoped>
    input,select,button{
        margin-bottom:10px;
    }
</style>