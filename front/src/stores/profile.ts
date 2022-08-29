import Services from '@/services'
import { defineStore } from 'pinia'
import type { ProfileModel } from '../models'
// import moment from 'moment'
// import { ref } from 'vue';
// let temp = ref(0);
export const useProfileStore = defineStore({
  id: 'personal',
  state: () => <ProfileModel>({
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
          title: "",
          company: {
            name: '',
            url: ''
          },
          description: "",
          beginDate: "",
          endDate: "",
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
  }),
  getters: {
    // getYears: (state) => state.profile.experiences.map((item) => {
    //   const startTime = moment(item.beginDate)
    //   const endTime = moment(item.endDate)
    //   const duration = moment.duration(endTime.diff(startTime));
    //   // if (duration.asMonths() > 12) {
    //   //   return `${(duration.asMonths() / 12).toFixed(1)} Year`
    //   // }
    //   // else {
    //   //   return `${(duration.asMonths().toFixed(0))} month`
    //   // }
    //   temp.value = temp.value + parseInt(`${duration.asMilliseconds()}`)
    //   console.log(temp.value);
    // })
  },
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
      this.profile.experiences.push({
        title: "",
        company: {
          name: '',
          url: ''
        },
        description: "",
        beginDate: "",
        endDate: "",
        skills: [{
          label: ''
        }]
      }
      )
    },
    removeExperiences(index: number) {
      this.profile.experiences.splice(index, 1)
    },
    addExperiencesSkills(index: number) {
      this.profile.experiences[index].skills.push({
        label: ''
      })
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
        await this.getData()
      } catch (error) {
        console.log('🔥 error', error)
      }
    },
    async getData() {
      try {
        const { data } = await Services.GetPersonalApi(this.$state.profileId)
        Object.assign(this.$state.profile, data.payload)
      } catch (error) {
        console.log('🔥 error', error)
      }
    }
  }
})
