import { defineStore } from 'pinia'

export const usePersonalStore = defineStore({
  id: 'personal',
  state: () => ({


    fullName: {
      first: {
        required: true,
        default: ""
      },
      last: {
        required: true,
        default: ""
      }
    },
    _id: "62fcc34181a707c5d4f1e0ae",
    image: "image.png",
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
  getters: {
    fullName: (state) => state.fullName.first + ' ' + state.fullName.last,
  },
  actions: {
    addTeaching() {
      this.teaching.push({ title: "" })
    },
    removeTeaching(index: number) {
      this.teaching.splice(index, 1)
    },

    addSkillSummary() {
      this.skillSummary.push({ skill: "" })
    },
    removeSkillSummary(index: number) {
      this.skillSummary.splice(index, 1)
    }

  }

})
