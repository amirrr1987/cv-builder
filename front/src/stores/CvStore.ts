import { UpdateOneCvApi, GetOneCvApi, GetAllCvApi } from '@/services/CvApi'
import { defineStore } from 'pinia'
import type { CvModel } from '../models'
import { message } from 'ant-design-vue';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';



export const useCvStore = defineStore('cv', () => {
  const state = reactive<CvModel>({
    cvs: [
      {
        fullName: {
          first: '',
          last: ''
        },
        _id: "",
        userId: '',
        font: "",
        theme: {
          color: "red",
          font: "calibri",
          lang: "en"
        },
        image: "",
        about: "",
        title: "wer",
        subTitle: "",
        address: {
          country: "",
          province: "",
          region: ""
        },
        skillsSummary: [
          {
            label: ""
          }
        ],
        contacts: [
          {
            label: "",
            icon: ""
          }
        ],
        educations: [
          {
            label: ""
          }
        ],
        techExperiences: [
          {
            label: ""
          }
        ],
        softwareKnowledges: [
          {
            label: "",
            skills: [
              {
                label: ""
              }
            ]
          }
        ],
        experiences: [
          {
            title: "",
            company: {
              name: '',
              url: ''
            },
            description: "",
            beginDate: Date(),
            endDate: Date(),
            skills: [{
              label: ''
            }]
          }
        ],
        socials: [
          {
            label: "",
            icon: "",
            link: ""
          }
        ],
      }
    ],
    cv: {
      fullName: {
        first: '',
        last: ''
      },
      _id: "",
      userId: '',
      font: "",
      theme: {
        color: "red",
        font: "calibri",
        lang: "en"
      },
      image: "",
      about: "",
      title: "wer",
      subTitle: "",
      address: {
        country: "",
        province: "",
        region: ""
      },
      skillsSummary: [
        {
          label: ""
        }
      ],
      contacts: [
        {
          label: "",
          icon: ""
        }
      ],
      educations: [
        {
          label: ""
        }
      ],
      techExperiences: [
        {
          label: ""
        }
      ],
      softwareKnowledges: [
        {
          label: "",
          skills: [
            {
              label: ""
            }
          ]
        }
      ],
      experiences: [
        {
          title: "",
          company: {
            name: '',
            url: ''
          },
          description: "",
          beginDate: Date(),
          endDate: Date(),
          skills: [{
            label: ''
          }]
        }
      ],
      socials: [
        {
          label: "",
          icon: "",
          link: ""
        }
      ],
    }
  })
  const addToCv = (name: string, obj: object) => {
    // state.cv[name].push(obj)
    // state.cv
  }

  const removeFromCv = (name: string, index: number) => {
    // state.cv[name].splice(index, 1)
  }
  const removeItemFromCv = (name: string, index: number) => {
    // state.cv[name].splice(index, 1)
  }
  const router = useRouter()
  const route = useRoute()
  // const userId = computed(() => {
  //   return String(route.params.userId)
  // })

  // const userId = computed(() => {
  //   return String(route.params.userId)
  // })

  const getAllCv = async (userId: string) => {
    
    try {
      const { data }: any = await GetAllCvApi(userId)
      Object.assign(state.cvs, data.data.cvs)
    } catch (error) {
      console.log('🔥 error getData', error)
    }
  }
  const getOneCv = async (userId: string, cvId: string) => {

    try {
      const { data }: any = await GetOneCvApi(userId,cvId)
      console.log('data',data);
      Object.assign(state.cv, data.data.cv)
    } catch (error) {
      console.log('🔥 error getData', error)
    }


    // const index = state.cvs.findIndex((item: any) => {
    //   return item._id === cvId
    // })
    // Object.assign(state.cv, state.cvs[index])
  }

  return { state, addToCv, removeFromCv, getOneCv, getAllCv }
})