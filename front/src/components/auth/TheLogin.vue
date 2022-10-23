<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <RouterLink to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
        ResumeIT
      </RouterLink>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>

          <Form :model="formState" name="basic" layout="vertical" autocomplete="off" @finish="onFinish"
            @finishFailed="onFinishFailed">
            <FormItem label="Mobile" name="mobile" :rules="[
              { required: true, message: 'Please input your mobile!' },
            ]">
              <Input v-model:value="formState.mobile" />
            </FormItem>

            <FormItem label="Password" name="password" :rules="[
              { required: true, message: 'Please input your password!' },
            ]">
              <InputPassword v-model:value="formState.password" />
            </FormItem>

            <FormItem>
              <Button type="primary" html-type="submit">Submit</Button>
            </FormItem>
            <p class="text-sm font-light text-gray-500 dark:text-yellow-400">
              Don’t have an account yet?
              <RouterLink to="/auth/register"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up
              </RouterLink>
            </p>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Form,
  FormItem,
  Input,
  InputPassword,
  Checkbox,
  Button,
  message,
} from "ant-design-vue";
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores/UserStore";
import { useRouter } from "vue-router";
import type { AxiosError } from "axios";


interface FormState {
  mobile: string;
  password: string;
  repassword: string;
}

const formState = reactive<FormState>({
  mobile: "",
  password: "",
  repassword: "",
});
const router = useRouter();


const userStore = useUserStore();

const onFinish = async () => {
  try {
    const id = await userStore.login(formState)
    router.push({ name: 'ThePanel', params: { id: id } });
  } catch (e) {
    message.error((e as AxiosError).message)
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};





</script>
