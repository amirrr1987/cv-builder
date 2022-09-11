import Services from '@/services'
import { defineStore } from 'pinia'
import type { AuthModel } from '../models'
import { message } from 'ant-design-vue';
import type { AxiosError } from 'axios';



export const useAuthStore = defineStore({
  id: 'personal',
  state: () => <AuthModel>({
    user: {
      mobile: '',
      password: "",
      repassword: ""
    },
    isLogin: false
  }),
  getters: {

  },
  actions: {
    async login() {
      try {
        const { data } = await Services.Auth.LoginAuthApi(this.$state.user)
        message.success('user corrected', data)
        this.$state.isLogin = true
      } catch (e) {
        message.error((e as AxiosError).message)
      }
    },
    async register() {
      try {
        const { data } = await Services.Auth.RegisterAuthApi(this.$state.user)
        message.success('user corrected', data)
      } catch (e) {
        message.error((e as AxiosError).message)
      }
    },
    setUser(user: any) {
      Object.assign(this.$state.user, user)
    },
    isLoginHandler(state:boolean) {
      this.$state.isLogin = state
    }

  }
})
