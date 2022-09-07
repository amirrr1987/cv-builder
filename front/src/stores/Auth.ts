import Services from '@/services'
import { defineStore } from 'pinia'
import type { AuthModel } from '../models'
import { message } from 'ant-design-vue';
import type { AxiosError } from 'axios';



export const useAuthStore = defineStore({
  id: 'personal',
  state: () => <AuthModel>({
    user:{
        email: '',
        password: "",
        repassword: ""
    }
  }),
  getters: {

  },
  actions: {
    async login() {
        try {
          const { data } = await Services.Auth.PostAuthApi(this.$state.user)

          console.log(data);
          
          message.success('user corrected')
        } catch (e) {
          message.error((e as AxiosError).message)
        }
      },
      setUser(user:any){
        Object.assign(this.$state.user,user)
      }

  }
})
