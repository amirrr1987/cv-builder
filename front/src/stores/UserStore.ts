import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { LoginUserApi, RegisterUserApi } from "@/services/UserApi";
import type { UserModel } from '@/models'

import type { AxiosError } from 'axios';


import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue';
// import { useContainerStore } from '/@survey/stores/ContainerStore'
export const useUserStore = defineStore('cv', () => {

  const state = reactive<UserModel>({
    user: {
      mobile: '',
      password: "",
      repassword: ""
    },
    isLogin: false
  })

  const login = async (user: any) => {
    try {
      const { data }: any = await LoginUserApi(user)
      localStorage.setItem('token', data.data.token)
      router.push({ name: 'ThePanel', params: { id: data.data._id } });
    } catch (err) {
      console.log('err', err);
    }
  }
  const router = useRouter();

  const register = async (user: any) => {
    try {
      await RegisterUserApi(user)
      router.push({ name: 'TheLogin' })
    } catch (err) {
      console.log('err', err);
    }
  }
  const setUser = (user: any) => {
    Object.assign(state.user, user)
  }
  const isLoginHandler = (status: boolean) => {
    state.isLogin = status
  }

  return { state, login, register, setUser, isLoginHandler }
})