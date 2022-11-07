const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const valdateCreateCv = async (data) => {
  const schema = Joi.object({
    userId: Joi.objectId(),
    title: Joi.string().min(2).max(30).required().messages({
      "string.min": "title Min 2 characteers",
      "string.max": "title Max 30 characteers",
      "string.empty": "title Display name cannot be empty",
    }),
    theme: Joi.object({
      color: Joi.string().min(2).max(10).required().messages({
        "string.min": "theme color Min 2 characteers",
        "string.max": "theme color Max 10 characteers",
        "string.empty": "theme color Display name cannot be empty",
      }),
      font: Joi.string().min(2).max(10).required().messages({
        "string.min": "theme font Min 6 characteers",
        "string.max": "theme font Max 10 characteers",
        "string.empty": "theme font Display name cannot be empty",
      }),
      lang: Joi.string().min(2).max(4).required().messages({
        "string.min": "theme lang Min 2 characteers",
        "string.max": "theme lang Max 4 characteers",
        "string.empty": "theme lang Display name cannot be empty",
      }),
    }),
    image: Joi.string().min(5).max(350).required().messages({
      "string.min": "image Min 5 characteers",
      "string.max": "image Max 50 characteers",
      "string.empty": "image Display name cannot be empty",
    }),
    about: Joi.string().min(5).max(350).required().messages({
      "string.min": "about Min 5 characteers",
      "string.max": "about Max 350 characteers",
      "string.empty": "about Display name cannot be empty",
    }),
    subTitle: Joi.string().min(5).max(50).required().messages({
      "string.min": "subTitle Min 5 characteers",
      "string.max": "subTitle Max 50 characteers",
      "string.empty": "subTitle Display name cannot be empty",
    }),
    fullName: Joi.object({
      first: Joi.string().min(2).max(10).required().messages({
        "string.min": "fullName first Min 2 characteers",
        "string.max": "fullName first Max 10 characteers",
        "string.empty": "fullName first Display name cannot be empty",
      }),
      last: Joi.string().min(2).max(10).required().messages({
        "string.min": "fullName last Min 2 characteers",
        "string.max": "fullName last Max 10 characteers",
        "string.empty": "fullName last Display name cannot be empty",
      }),
    }),
    address: Joi.object({
      country: Joi.string().min(2).max(10).required().messages({
        "string.min": "address country Min 2 characteers",
        "string.max": "address country Max 10 characteers",
        "string.empty": "address country Display name cannot be empty",
      }),
      province: Joi.string().min(2).max(10).required().messages({
        "string.min": "address province Min 2 characteers",
        "string.max": "address province Max 10 characteers",
        "string.empty": "address province Display name cannot be empty",
      }),
      region: Joi.string().min(2).max(10).required().messages({
        "string.min": "address region Min 2 characteers",
        "string.max": "address region Max 10 characteers",
        "string.empty": "address region Display name cannot be empty",
      }),
    }),
    skillsSummary: Joi.array().items({
      label: Joi.string().min(2).max(10).required().messages({
        "string.min": "skillsSummary label Min 2 characteers",
        "string.max": "skillsSummary label Max 10 characteers",
        "string.empty": "skillsSummary label Display name cannot be empty",
      }),
    }),
    contacts: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "contacts label Min 2 characteers",
        "string.max": "contacts label Max 50 characteers",
        "string.empty": "contacts label Display name cannot be empty",
      }),
      icon: Joi.string().min(2).max(50).required().messages({
        "string.min": "contacts icon Min 2 characteers",
        "string.max": "contacts icon Max 50 characteers",
        "string.empty": "contacts icon Display name cannot be empty",
      }),
    }),

    educations: Joi.array().items({
      label: Joi.string().min(2).max(10).required().messages({
        "string.min": "educations label Min 2 characteers",
        "string.max": "educations label Max 10 characteers",
        "string.empty": "educations label Display name cannot be empty",
      }),
    }),

    techExperiences: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "techExperiences label Min 2 characteers",
        "string.max": "techExperiences label Max 50 characteers",
        "string.empty": "techExperiences label Display name cannot be empty",
      }),
    }),

    softwareKnowledges: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "softwareKnowledges label Min 2 characteers",
        "string.max": "softwareKnowledges label Max 50 characteers",
        "string.empty": "softwareKnowledges label Display name cannot be empty",
      }),
      skills: Joi.array().items({
        label: Joi.string().min(2).max(50).required().messages({
          "string.min": "softwareKnowledges skills label Min 2 characteers",
          "string.max": "softwareKnowledges skills label Max 50 characteers",
          "string.empty":
            "softwareKnowledges skills label Display name cannot be empty",
        }),
      }),
    }),

    experiences: Joi.array().items({
      title: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences title Min 2 characteers",
        "string.max": "experiences title Max 50 characteers",
        "string.empty": "experiences title Display name cannot be empty",
      }),

      company: Joi.object({
        name: Joi.string().min(2).max(50).required().messages({
          "string.min": "experiences company name Min 2 characteers",
          "string.max": "experiences company name Max 50 characteers",
          "string.empty":
            "experiences company name Display name cannot be empty",
        }),
        url: Joi.string().min(2).max(50).required().messages({
          "string.min": "experiences company url Min 2 characteers",
          "string.max": "experiences company url Max 50 characteers",
          "string.empty":
            "experiences company url Display name cannot be empty",
        }),
      }),

      description: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences description Min 2 characteers",
        "string.max": "experiences description Max 50 characteers",
        "string.empty": "experiences description Display name cannot be empty",
      }),

      beginDate: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences beginDate Min 2 characteers",
        "string.max": "experiences beginDate Max 50 characteers",
        "string.empty": "experiences beginDate Display name cannot be empty",
      }),

      endDate: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences endDate Min 2 characteers",
        "string.max": "experiences endDate Max 50 characteers",
        "string.empty": "experiences endDate Display name cannot be empty",
      }),

      skills: Joi.array().items({
        label: Joi.string().min(2).max(50).required().messages({
          "string.min": "experiences skills label Min 2 characteers",
          "string.max": "experiences skills label Max 50 characteers",
          "string.empty":
            "experiences skills label Display name cannot be empty",
        }),
      }),
    }),

    socials: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "socials label Min 2 characteers",
        "string.max": "socials label Max 50 characteers",
        "string.empty": "socials label Display name cannot be empty",
      }),
      icon: Joi.string().min(2).max(50).required().messages({
        "string.min": "socials icon Min 2 characteers",
        "string.max": "socials icon Max 50 characteers",
        "string.empty": "socials icon Display name cannot be empty",
      }),
      link: Joi.string().min(2).max(50).required().messages({
        "string.min": "socials link Min 2 characteers",
        "string.max": "socials link Max 50 characteers",
        "string.empty": "socials link Display name cannot be empty",
      }),
    }),
  });

  return await schema.validateAsync(data);
};

const valdateUpdateCv = (data) => {
  const schema = Joi.object({
    _id: Joi.objectId(),
    userId: Joi.objectId(),
    title: Joi.string().min(2).max(30).required().messages({
      "string.min": "title Min 2 characteers",
      "string.max": "title Max 30 characteers",
      "string.empty": "title Display name cannot be empty",
    }),
    theme: Joi.object({
      color: Joi.string().min(2).max(10).required().messages({
        "string.min": "theme color Min 2 characteers",
        "string.max": "theme color Max 10 characteers",
        "string.empty": "theme color Display name cannot be empty",
      }),
      font: Joi.string().min(2).max(10).required().messages({
        "string.min": "theme font Min 6 characteers",
        "string.max": "theme font Max 10 characteers",
        "string.empty": "theme font Display name cannot be empty",
      }),
      lang: Joi.string().min(2).max(4).required().messages({
        "string.min": "theme lang Min 2 characteers",
        "string.max": "theme lang Max 4 characteers",
        "string.empty": "theme lang Display name cannot be empty",
      }),
    }),
    image: Joi.string().min(5).max(350).required().messages({
      "string.min": "image Min 5 characteers",
      "string.max": "image Max 50 characteers",
      "string.empty": "image Display name cannot be empty",
    }),
    about: Joi.string().min(5).max(350).required().messages({
      "string.min": "about Min 5 characteers",
      "string.max": "about Max 350 characteers",
      "string.empty": "about Display name cannot be empty",
    }),
    subTitle: Joi.string().min(1).max(50).required().messages({
      "string.min": "subTitle Min 1 characteers",
      "string.max": "subTitle Max 50 characteers",
      "string.empty": "subTitle Display name cannot be empty",
    }),
    fullName: Joi.object({
      first: Joi.string().min(2).max(70).required().messages({
        "string.min": "fullName first Min 2 characteers",
        "string.max": "fullName first Max 70 characteers",
        "string.empty": "fullName first Display name cannot be empty",
      }),
      last: Joi.string().min(2).max(70).required().messages({
        "string.min": "fullName last Min 2 characteers",
        "string.max": "fullName last Max 70 characteers",
        "string.empty": "fullName last Display name cannot be empty",
      }),
    }),
    address: Joi.object({
      country: Joi.string().min(2).max(10).required().messages({
        "string.min": "address country Min 2 characteers",
        "string.max": "address country Max 10 characteers",
        "string.empty": "address country Display name cannot be empty",
      }),
      province: Joi.string().min(2).max(10).required().messages({
        "string.min": "address province Min 2 characteers",
        "string.max": "address province Max 10 characteers",
        "string.empty": "address province Display name cannot be empty",
      }),
      region: Joi.string().min(2).max(10).required().messages({
        "string.min": "address region Min 2 characteers",
        "string.max": "address region Max 10 characteers",
        "string.empty": "address region Display name cannot be empty",
      }),
    }),
    skillsSummary: Joi.array().items({
      label: Joi.string().min(2).max(10).required().messages({
        "string.min": "skillsSummary label Min 2 characteers",
        "string.max": "skillsSummary label Max 10 characteers",
        "string.empty": "skillsSummary label Display name cannot be empty",
      }),
    }),
    contacts: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "contacts label Min 2 characteers",
        "string.max": "contacts label Max 50 characteers",
        "string.empty": "contacts label Display name cannot be empty",
      }),
      icon: Joi.string().min(2).max(50).required().messages({
        "string.min": "contacts icon Min 2 characteers",
        "string.max": "contacts icon Max 50 characteers",
        "string.empty": "contacts icon Display name cannot be empty",
      }),
    }),

    educations: Joi.array().items({
      label: Joi.string().min(2).max(10).required().messages({
        "string.min": "educations label Min 2 characteers",
        "string.max": "educations label Max 10 characteers",
        "string.empty": "educations label Display name cannot be empty",
      }),
    }),

    techExperiences: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "techExperiences label Min 2 characteers",
        "string.max": "techExperiences label Max 50 characteers",
        "string.empty": "techExperiences label Display name cannot be empty",
      }),
    }),

    softwareKnowledges: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "softwareKnowledges label Min 2 characteers",
        "string.max": "softwareKnowledges label Max 50 characteers",
        "string.empty": "softwareKnowledges label Display name cannot be empty",
      }),
      skills: Joi.array().items({
        label: Joi.string().min(2).max(50).required().messages({
          "string.min": "softwareKnowledges skills label Min 2 characteers",
          "string.max": "softwareKnowledges skills label Max 50 characteers",
          "string.empty":
            "softwareKnowledges skills label Display name cannot be empty",
        }),
      }),
    }),

    experiences: Joi.array().items({
      title: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences title Min 2 characteers",
        "string.max": "experiences title Max 50 characteers",
        "string.empty": "experiences title Display name cannot be empty",
      }),

      company: Joi.object({
        name: Joi.string().min(2).max(50).required().messages({
          "string.min": "experiences company name Min 2 characteers",
          "string.max": "experiences company name Max 50 characteers",
          "string.empty":
            "experiences company name Display name cannot be empty",
        }),
        url: Joi.string().min(2).max(50).required().messages({
          "string.min": "experiences company url Min 2 characteers",
          "string.max": "experiences company url Max 50 characteers",
          "string.empty":
            "experiences company url Display name cannot be empty",
        }),
      }),

      description: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences description Min 2 characteers",
        "string.max": "experiences description Max 50 characteers",
        "string.empty": "experiences description Display name cannot be empty",
      }),

      beginDate: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences beginDate Min 2 characteers",
        "string.max": "experiences beginDate Max 50 characteers",
        "string.empty": "experiences beginDate Display name cannot be empty",
      }),

      endDate: Joi.string().min(2).max(50).required().messages({
        "string.min": "experiences endDate Min 2 characteers",
        "string.max": "experiences endDate Max 50 characteers",
        "string.empty": "experiences endDate Display name cannot be empty",
      }),

      skills: Joi.array().items({
        label: Joi.string().min(2).max(50).required().messages({
          "string.min": "experiences skills label Min 2 characteers",
          "string.max": "experiences skills label Max 50 characteers",
          "string.empty":
            "experiences skills label Display name cannot be empty",
        }),
      }),
    }),

    socials: Joi.array().items({
      label: Joi.string().min(2).max(50).required().messages({
        "string.min": "socials label Min 2 characteers",
        "string.max": "socials label Max 50 characteers",
        "string.empty": "socials label Display name cannot be empty",
      }),
      icon: Joi.string().min(2).max(50).required().messages({
        "string.min": "socials icon Min 2 characteers",
        "string.max": "socials icon Max 50 characteers",
        "string.empty": "socials icon Display name cannot be empty",
      }),
      link: Joi.string().min(2).max(50).required().messages({
        "string.min": "socials link Min 2 characteers",
        "string.max": "socials link Max 50 characteers",
        "string.empty": "socials link Display name cannot be empty",
      }),
    }),
  });
  return schema.validateAsync(data);
};

module.exports = {
  valdateCreateCv,
  valdateUpdateCv,
};
