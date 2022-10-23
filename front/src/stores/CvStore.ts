import { UpdateOneCvApi, GetOneCvApi, GetAllCvApi } from '@/services/CvApi'
import { defineStore } from 'pinia'
import type { CvModel } from '../models'
import { message } from 'ant-design-vue';
import { reactive } from 'vue';



export const useCvStore = defineStore('cv', () => {
  const state = reactive<CvModel>({
    id: '',
    cv: [
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
        title: "",
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
    ]
  })
  const addToCv = (name: string, obj: object) => {
    state.cv[name].push(obj)
  }

  const removeFromCv = (name: string, index: number) => {
    state.cv[name].splice(index, 1)
  }
  const removeItemFromCv = (name: string, index: number) => {
    state.cv[name].splice(index, 1)
  }





  // const techExperiencesRemove = (index: number) => {
  //   state.cv.techExperiences.splice(index, 1)

  // }


  // const removeTechExperiences = (index: number) => {
  //   state.cv.techExperiences.splice(index, 1)
  // }


  // const removeContacts = (index: number) => {
  //   state.cv.contacts.splice(index, 1)
  // }
  // const addSkillSummary = () => {
  //   state.cv.skillsSummary.push({ label: "" })
  // }
  // const removeSkillSummary = (index: number) {
  //   state.cv.skillsSummary.splice(index, 1)
  // }
  // const addEducations = () => {
  //   state.cv.educations.push({ label: "" })
  // }
  // const removeEducations = (index: number) => {
  //   state.cv.educations.splice(index, 1)
  // }
  // const addSocials = () => {
  //   state.cv.socials.push({ label: "", icon: "", link: "" })
  // }
  // const removeSocials = (index: number) => {
  //   state.cv.socials.splice(index, 1)
  // }

  // const addSoftwareKnowledges = () => {
  //   state.cv.softwareKnowledges.push({ label: "", skills: [{ label: "" }] })
  // }
  // const removeSoftwareKnowledges = (index: number) => {
  //   state.cv.softwareKnowledges.splice(index, 1)
  // }
  // const addSoftwareKnowledgesItem = (index: number) => {
  //   state.cv.softwareKnowledges[index].skills.push({
  //     label: ''
  //   })
  // }
  // const removeSoftwareKnowledgesItem = (index: number, skillIndex: number) => {
  //   state.cv.softwareKnowledges[index].skills.splice(skillIndex, 1)
  // }
  // const addExperiences = () => {
  //   state.cv.experiences.push({
  //     title: "",
  //     company: {
  //       name: '',
  //       url: ''
  //     },
  //     description: "",
  //     beginDate: "",
  //     endDate: "",
  //     skills: [{
  //       label: ''
  //     }]
  //   }
  //   )
  // }
  // const removeExperiences = (index: number) => {
  //   state.cv.experiences.splice(index, 1)
  // }
  // const addExperiencesSkills = (index: number) => {
  //   state.cv.experiences[index].skills.push({
  //     label: ''
  //   })
  // }
  // const removeExperiencesSkill = (index: string, skillIndex: number) => {
  //   let indexx = state.cv.experiences.findIndex((item) => {
  //     return item.company.name === index
  //   })
  //   state.cv.experiences[indexx].skills.splice(skillIndex, 1)
  // }

  const updateCv = async (id) => {
    try {
      await UpdateOneCvApi(state.cv.userId, state.cv)
      await getOneCv(state.id, state.cv)
      // message.success('Update data')
    } catch (error) {
      message.error('error update')
    }
  }

  const getAllCv = async (id: string) => {
    console.log('id', id);
    try {
      const { data }: any = await GetAllCvApi(id)

      Object.assign(state.cv, data.data)
    } catch (error) {
      console.log('🔥 error getData', error)

    }
  }
  const getOneCv = async (id: string, cvId: string) => {
    console.log('id', id);
    try {
      const { data }: any = await GetOneCvApi(id, cvId)

      Object.assign(state.cv, data.data)
    } catch (error) {
      console.log('🔥 error getData', error)

    }
  }

  return { state, addToCv, removeFromCv, getOneCv, getAllCv }
})