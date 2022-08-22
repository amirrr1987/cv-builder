import Services from '@/services'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore({
  id: 'personal',
  state: () => ({
    profileId: '',
    profile: {
      fullName: {
        first: '',
        last: ''
      },
      _id: "62fcc34181a707c5d4f1e0ae",
      image: "https://api.lorem.space/image/face?w=150&h=150",
      about: "Hello I`m Amir",
      title: "FrontEndDeveloper",
      subTitle: "Vue.js",
      address: {
        country: "",
        province: "",
        region: ""
      },
      skillsSummary: [
        {
          label: ""
        },
        {
          label: ""
        },
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
        },
        {
          label: ""
        },
        {
          label: ""
        }
      ],
      techExperiences: [
        {
          label: ""
        },
        {
          label: ""
        },
        {
          label: ""
        }
      ],
      softwareKnowledges: [
        {
          label: "",
          skills: [
            ""
          ]
        }
      ],
      experiences: [
        {
          title: "",
          company: "",
          description: "",
          beginDate: "",
          endDate: ""
        }
      ],
      socials: [
        {
          title: "",
          icon: "",
          link: ""
        }
      ],
    }


  }),
  // getters: {
  //   // fullName: (state) => state.fullName.first + ' ' + state.fullName.last,
  // },
  actions: {
    addTechExperiences() {
      this.profile.techExperiences.push({ label: "" })
    },
    removeTechExperiences(index: number) {
      this.profile.techExperiences.splice(index, 1)
    },

    addSkillSummary() {
      this.profile.skillsSummary.push({ label: "" })
    },
    removeSkillSummary(index: number) {
      this.profile.skillsSummary.splice(index, 1)
    },
    setProfileId(id: string) {
      this.profileId = id
    },

    updatePersonal(data: any) {
      Object.assign(this.profile, data);
      this.postData()
    },
    async postData() {
      try {
        const { data } = await Services.UpdatePersonalApi(this.$state.profileId, this.$state.profile)
        console.log('🔥 postData', data)
      } catch (error) {

        console.log('🔥 error', error)
      }
    },

    async getData() {
      try {
        const { data } = await Services.GetPersonalApi(this.$state.profileId)
        Object.assign(this.profile, data)
        console.log('🔥 data', data)
      } catch (error) {

        console.log('🔥 error', error)
      }
    }


  }

})
