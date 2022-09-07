import Services from '@/services'
import { defineStore } from 'pinia'
import type { ProfileModel } from '../models'
import { message } from 'ant-design-vue';

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
      font: "",
      theme: {
        color: "",
        font: "",
        lang: ""
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
          endDate: Date() ,
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
    techExperiencesAdd() {
      this.profile.techExperiences.push({ label: "" })

    },
    techExperiencesRemove(index: number) {
      this.profile.techExperiences.splice(index, 1)

    },

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

    addSoftwareKnowledges() {
      this.profile.softwareKnowledges.push({ label: "", skills: [{ label: "" }] })
    },
    removeSoftwareKnowledges(index: number) {
      this.profile.softwareKnowledges.splice(index, 1)
    },
    addSoftwareKnowledgesItem(index: number) {
      this.profile.softwareKnowledges[index].skills.push({
        label: ''
      })
    },
    removeSoftwareKnowledgesItem(index: number, skillIndex: number) {
      this.profile.softwareKnowledges[index].skills.splice(skillIndex, 1)
    },


    // addSoftwareKnowledges() {

    // },
    // removeSoftwareKnowledges() {
    // },
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
    removeExperiencesSkill(index: string, skillIndex: number) {
      let indexx = this.profile.experiences.findIndex((item) => {
        return item.company.name === index
      })
      this.profile.experiences[indexx].skills.splice(skillIndex, 1)
    },
    setProfileId(id: string) {
      this.profileId = id
    },
    updatePersonal() {
      this.postData()
    },
    async postData() {
      try {
        const { data } = await Services.Profile.UpdatePersonalApi(this.$state.profileId, this.$state.profile)
        await this.getData()
        message.success('Update data')
      } catch (error) {
        message.error('error update')
      }
    },
    async getData() {
      try {
        const { data } = await Services.Profile.GetPersonalApi(this.$state.profileId)
        Object.assign(this.$state.profile, data.payload)
      } catch (error) {
        console.log('🔥 error', error)
      }
    }
  }
})
