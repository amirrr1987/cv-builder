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
      _id: "",
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
            ""
          ]
        }
      ],
      experiences: [
        {
          label: "",
          company: "",
          description: "",
          beginDate: "",
          endDate: ""
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

    addContacts() {
      this.profile.contacts.push({ label: "", icon: '' })
    },
    removeContacts(index: number) {
      this.profile.contacts.splice(index, 1)
    },

    addSkillSummary() {
      this.profile.skillsSummary.push({ label: "" })
    },
    removeSkillSummary(index: number) {
      this.profile.skillsSummary.splice(index, 1)
    },

    addEducations() {
      this.profile.educations.push({ label: "" })
    },
    removeEducations(index: number) {
      this.profile.educations.splice(index, 1)
    },

    addSocials() {
      this.profile.socials.push({ label: "", icon: "", link: "" })
    },
    removeSocials(index: number) {
      this.profile.socials.splice(index, 1)
    },


    addExperiences() {
      this.profile.experiences.push({ label: "", company: "", description: "", beginDate: "", endDate: "" })
    },
    removeExperiences(index: number) {
      this.profile.experiences.splice(index, 1)
    },

    setProfileId(id: string) {
      this.profileId = id
    },

    updatePersonal() {
      this.postData()
    },
    async postData() {
      try {
        const { data } = await Services.UpdatePersonalApi(this.$state.profileId, this.$state.profile)
        console.log('🔥 postData', data)
        await this.getData()
      } catch (error) {

        console.log('🔥 error', error)
      }
    },

    async getData() {
      try {
        const { data } = await Services.GetPersonalApi(this.$state.profileId)
        Object.assign(this.$state.profile, data.payload)
        console.log('🔥 data resived and assign store', data.payload)
      } catch (error) {

        console.log('🔥 error', error)
      }
    }


  }

})
