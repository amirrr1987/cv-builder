

import { GetUserApi, LoginUserApi, RegisterUserApi } from '@/services/UserApi'
import { defineStore } from 'pinia'
import type { UserModel } from '../models'
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
export const useUserStore = defineStore('User', () => {
  const state = reactive<UserModel>({
    user: {
      _id: '',
      mobile: 'sdf',
    },
    isLogin: false
  })
  const login = async (user: any) => {
    console.log('user', user);
    try {
      const { data }: any = await LoginUserApi(user)
      localStorage.setItem('token', data.data.token)
      router.push({ name: 'ThePanel', params: { userId: data.data._id } });
    } catch (error) {
      console.log('🔥 getOneCv error', error)
    }
  }
  const getUserData = async (userId: string) => {
    try {
      const { data } = await GetUserApi(userId)
      Object.assign(state.user, data.data)
      state.isLogin = data.success
    } catch (error) {
      console.log('🔥 getOneCv error', error)
    }
  }
  const router = useRouter();
  const register = async (user: any) => {
    try {
      await RegisterUserApi(user)
      router.push({ name: 'TheLogin' })
    } catch (error) {
      console.log('🔥 getOneCv error', error)
    }
  }
  const setUser = (user: any) => {
    Object.assign(state.user, user)
  }
  const isLoginHandler = computed(() => {
    if (!state.isLogin) {
      localStorage.removeItem('token')
      router.push({ name: 'TheLogin' })
    }
    return state.isLogin

  })
  return { state, login, register, setUser, isLoginHandler, getUserData }
})