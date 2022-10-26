

import { GetUserApi, LoginUserApi, RegisterUserApi } from '@/services/UserApi'
import { defineStore } from 'pinia'
import type { UserModel } from '../models'
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue/es';
import type { AxiosError } from 'axios';
export const useUserStore = defineStore('User', () => {
  const state = reactive<UserModel>({
    user: {
      _id: '',
      mobile: 'sdf',
    },
    isLogin: false,
    login: {
      error: {
        message: ''
      }
    }
  })
  const login = async (user: any) => {
    console.log('user', user);
    try {
      const { data }: any = await LoginUserApi(user)
      console.log('data', data);
      localStorage.setItem('token', data.data.token)
      router.push({ name: 'ThePanel', params: { userId: data.data._id } });
    } catch (e) {
      message.error()
      state.login.error.message = (e as AxiosError).message
    }
  }
  const getUserData = async (userId: string) => {
    try {
      const { data } = await GetUserApi(userId)
      Object.assign(state.user, data.data)
      state.isLogin = data.success
    } catch (error) {
      console.log('🔥 login error', error)
    }
  }
  const router = useRouter();
  const register = async (user: any) => {
    try {
      await RegisterUserApi(user)
      message.info('user created')
      setTimeout(() => {
        router.push({ name: 'TheLogin' })
      }, 1000);
    } catch (error) {
      console.log('🔥 getOneCv error', error)
    }
  }
  const setUser = (user: any) => {
    Object.assign(state.user, user)
  }


  const isLoginHandler = computed(() => {
    return state.isLogin

  })
  return { state, login, register, setUser, isLoginHandler, getUserData }
})