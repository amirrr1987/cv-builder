import {
  GetOneCvApi,
  GetAllCvApi,
  CreateOneCvApi,
  DeleteOneCvApi,
  UpdateOneCvApi,
} from "@/services/CvApi";
import { defineStore } from "pinia";
import type { CvModel } from "../models";
import { computed, reactive } from "vue";
import { message } from "ant-design-vue";
export const useCvStore = defineStore("cv", () => {
  const state = reactive<CvModel>({
    cvs: [
      {
        fullName: {
          first: "",
          last: "",
        },
        _id: "",
        userId: "",
        font: "",
        theme: {
          color: "",
          font: "",
          lang: "",
        },
        image: "",
        about: "",
        title: "",
        subTitle: "",
        address: {
          country: "",
          province: "",
          region: "",
        },
        skillsSummary: [
          {
            label: "",
          },
        ],
        contacts: [
          {
            label: "",
            icon: "",
          },
        ],
        educations: [
          {
            label: "",
          },
        ],
        techExperiences: [
          {
            label: "",
          },
        ],
        softwareKnowledges: [
          {
            label: "",
            skills: [
              {
                label: "",
              },
            ],
          },
        ],
        experiences: [
          {
            title: "",
            company: {
              name: "",
              url: "",
            },
            description: "",
            beginDate: "",
            endDate: "",
            skills: [
              {
                label: "",
              },
            ],
          },
        ],
        socials: [
          {
            label: "",
            icon: "",
            link: "",
          },
        ],
      },
    ],
    cv: {
      fullName: {
        first: "",
        last: "",
      },
      _id: "",
      userId: "",
      theme: {
        color: "",
        font: "",
        lang: "",
      },
      image: "",
      about: "",
      title: "",
      subTitle: "",
      address: {
        country: "",
        province: "",
        region: "",
      },
      skillsSummary: [
        {
          label: "",
        },
      ],
      contacts: [
        {
          label: "",
          icon: "",
        },
      ],
      educations: [
        {
          label: "",
        },
      ],
      techExperiences: [
        {
          label: "",
        },
      ],
      softwareKnowledges: [
        {
          label: "",
          skills: [
            {
              label: "",
            },
          ],
        },
      ],
      experiences: [
         ,
      ],
      socials: [
        {
          label: "",
          icon: "",
          link: "",
        },
      ],
    },
  });
  const addToCv = (name: string, obj: object) => {
    state.cv[name].push(obj);
  };
  const removeFromCv = (name: string, index: number) => {
    state.cv[name].splice(index, 1);
  };
  const addItemInCvFeild = (
    name: string,
    index: number,
    childName: string,
    obj: any
  ) => {
    state.cv[name][index][childName].push(obj);
  };
  const removeItemFromCv = (name: string, index: number, filedIndex: any) => {
    // state.cv[name].splice(index, 1)

    console.log(name, index, filedIndex);
  };
  const getAllCv = async (userId: string) => {
    try {
      const { data }: any = await GetAllCvApi(userId);
      state.cvs = [];
      Object.assign(state.cvs, data.data.cvs);
    } catch (error) {
      console.log("🔥 getAllCv error", error);
    }
  };
  const getOneCv = async (userId: string, cvId: string) => {
    try {
      const { data }: any = await GetOneCvApi(userId, cvId);
      Object.assign(state.cv, data.data.cv);
    } catch (error) {
      console.log("🔥 getOneCv error", error);
    }
  };
  const createCv = async (userId: string) => {
    try {
      await CreateOneCvApi(userId);
      await getAllCv(userId);
    } catch (error) {
      console.log("🔥 createCv error", error);
    }
  };
  const updateCv = async (userId: string, cvId: string) => {
    delete state.cv.__v;
    try {
      await UpdateOneCvApi(cvId, state.cv);
      message.success(`this cv:${cvId} is update`);
      await getAllCv(userId);
    } catch (error) {
      console.log("🔥 deleteCv error", error);
    }
  };
  const deleteCv = async (userId: string, cvId: string) => {
    try {
      await DeleteOneCvApi(cvId);
      message.success(`this cv:${cvId} is delete`);
      await getAllCv(userId);
    } catch (error) {
      console.log("🔥 deleteCv error", error);
    }
  };
  return {
    state,
    addToCv,
    removeFromCv,
    getOneCv,
    getAllCv,
    createCv,
    deleteCv,
    updateCv,
    addItemInCvFeild,
    removeItemFromCv,
  };
});
