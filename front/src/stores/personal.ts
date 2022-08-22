import { defineStore } from 'pinia'

export const usePersonalStore = defineStore({
  id: 'personal',
  state: () => ({


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
      country: "email@email.email",
      province: "email@email.email",
      region: "email@email.email"
    },
    skillsSummary: [
      {
        label: "html"
      },
      {
        label: "html"
      },
      {
        label: "html"
      }
    ],
    contacts: [
      {
        label: "email@email.email",
        icon: "email"
      }
    ],
    educations: [
      {
        label: "html"
      },
      {
        label: "html"
      },
      {
        label: "html"
      }
    ],
    techExperiences: [
      {
        label: "html"
      },
      {
        label: "html"
      },
      {
        label: "html"
      }
    ],
    softwareKnowledges: [
      {
        label: "CSS",
        skills: [
          "CSS",
          "SCSS"
        ]
      }
    ],
    experiences: [
      {
        title: "CSS",
        company: "CSS",
        description: "CSS",
        beginDate: "CSS",
        endDate: "hwe servey"
      }
    ],
    socials: [
      {
        title: "stack",
        icon: "stack",
        link: "stack"
      }
    ],


  }),
  // getters: {
  //   // fullName: (state) => state.fullName.first + ' ' + state.fullName.last,
  // },
  actions: {
    addTeaching() {
      this.techExperiences.push({ label: "" })
    },
    techExperiences(index: number) {
      this.techExperiences.splice(index, 1)
    },

    addSkillSummary() {
      this.skillsSummary.push({ label: "" })
    },
    removeSkillSummary(index: number) {
      this.skillsSummary.splice(index, 1)
    }

  }

})
