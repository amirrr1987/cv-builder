
import { LoginAuthApi, RegisterAuthApi } from "@/services/AuthApi";
import { defineStore } from 'pinia'
import type { AuthModel } from '@/models'

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
    async login(user: any) {
      try {
        const { data } = await LoginAuthApi(user)
        localStorage.setItem('token', data.data.token)
        return data.data._id
      } catch (e) {
        console.log((e as AxiosError).message);
      }
    },
    async register(user: any) {
      try {
        const { data } = await RegisterAuthApi(user)
        console.log('data', data);
        console.log('data', data);
        console.log('data',data);
        localStorage.setItem('token', data.data.token)
          return data
        } catch (e) {
          console.log((e as AxiosError).message);
        }

    },
    setUser(user: any) {
      Object.assign(this.$state.user, user)
    },
    isLoginHandler(state: boolean) {
      this.$state.isLogin = state
    }

  }
})
