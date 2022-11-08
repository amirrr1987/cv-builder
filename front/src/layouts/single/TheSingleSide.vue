<template>
  <Form layout="vertical" class="overflow-y-scroll" :class="[`${prefixCls}`]">
    <Tabs v-model:activeKey="tabKey" type="card" size="large">
      <TabPane key="1" tab="Sidebar Panel">
        <Collapse v-model:activeKey="activeKey" accordion>
          <CollapsePanel key="1" :class="[`${prefixCls}__fullname`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:user" />
                {{ $t("yourName") }}:
              </span>
            </template>
            <FormItem>
              <template #label>
                {{ $t("firstName") }}
              </template>
              <Input v-model:value="cvStore.state.cv.fullName.first">
                <template #suffix>
                  <Button
                    @click="cvStore.state.cv.fullName.first = ''"
                    type="text"
                    danger
                    size="small"
                    shape="circle"
                    class="!flex justify-center items-center"
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:close" />
                    </template>
                  </Button>
                </template>
              </Input>
            </FormItem>
            <FormItem>
              <template #label>
                {{ $t("lastName") }}
              </template>
              <Input v-model:value="cvStore.state.cv.fullName.last">
                <template #suffix>
                  <Button
                    @click="cvStore.state.cv.fullName.last = ''"
                    type="text"
                    danger
                    size="small"
                    shape="circle"
                    class="!flex justify-center items-center"
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:close" />
                    </template>
                  </Button>
                </template>
              </Input>
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="2" :class="[`${prefixCls}__title`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:hourglass" />
                {{ $t("title") }}:
              </span>
            </template>
            <FormItem>
              <template #label>
                <span class="header__title">
                  {{ $t("title") }}
                </span>
              </template>
              <Input v-model:value="cvStore.state.cv.title">
                <template #suffix>
                  <Button
                    @click="cvStore.state.cv.title = ''"
                    type="text"
                    danger
                    size="small"
                    shape="circle"
                    class="!flex justify-center items-center"
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:close" />
                    </template>
                  </Button>
                </template>
              </Input>
            </FormItem>
            <FormItem>
              <template #label>
                {{ $t("subTitle") }}
              </template>
              <Input v-model:value="cvStore.state.cv.subTitle">
                <template #suffix>
                  <Button
                    @click="cvStore.state.cv.subTitle = ''"
                    type="text"
                    danger
                    size="small"
                    shape="circle"
                    class="!flex justify-center items-center"
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:close" />
                    </template>
                  </Button>
                </template>
              </Input>
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="3" :class="[`${prefixCls}__about`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:me" />
                {{ $t("aboutMe") }}:
              </span>
            </template>
            <FormItem label="About">
              <Textarea :rows="5" v-model:value="cvStore.state.cv.about" />
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="4" :class="[`${prefixCls}__contacts`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:phone" />
                {{ $t("contactMe") }}:
              </span>
            </template>
            <FormItem>
              <draggable
                tag="div"
                :list="cvStore.state.cv.contacts"
                class="list-group grid grid-cols-[3rem,1fr] gap-1"
                handle=".handle"
                item-key="index"
                @change="dargHandler"
              >
                <template #item="{ element, index }">
                  <div class="grid grid-cols-[3rem,1fr] gap-1 mb-3 col-span-2">
                    <Button
                      type="default"
                      size="small"
                      class="handle !border-0 !flex justify-center items-center !w-11 !h-10"
                    >
                      <template #icon>
                        <Icon icon="icon-park-outline:drag" />
                      </template>
                    </Button>
                    <Input v-model:value="element.label" type="text">
                      <template #prefix>
                        <Select v-model:value="element.icon" class="">
                          <template v-for="item in contactIcons">
                            <SelectOption
                              :value="item.icon"
                              class="flex items-center justify-center"
                            >
                              <Icon :icon="item.icon" />
                            </SelectOption>
                          </template>
                        </Select>
                      </template>
                      <template #suffix>
                        <Button
                          type="text"
                          danger
                          shape="circle"
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.removeFromCv('contacts', index)
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:minus" />
                          </template>
                        </Button>
                      </template>
                    </Input>
                  </div>
                </template>
                <template #footer>
                  <Button
                    type="dashed"
                    block
                    class="col-strat-2 col-end-3 !flex justify-center items-center"
                    @click.prevent="
                      cvStore.addToCv('contacts', { label: '', icon: '' })
                    "
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:plus" />
                    </template>
                  </Button>
                </template>
              </draggable>
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="5" :class="[`${prefixCls}__skills-summary`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:star" />
                {{ $t("skillsSummary") }}:
              </span>
            </template>
            <FormItem label="Skills Summary">
              <draggable
                tag="div"
                :list="cvStore.state.cv.skillsSummary"
                class="list-group grid grid-cols-[3rem,1fr] gap-1"
                handle=".handle"
                item-key="index"
                @change="dargHandler"
              >
                <template #item="{ element, index }">
                  <div class="grid grid-cols-[3rem,1fr] gap-1 mb-3 col-span-2">
                    <Button
                      type="default"
                      size="small"
                      class="handle !border-0 !flex justify-center items-center !w-11 !h-10"
                    >
                      <template #icon>
                        <Icon icon="icon-park-outline:drag" />
                      </template>
                    </Button>
                    <Input v-model:value="element.label" type="text">
                      <template #suffix>
                        <Button
                          type="text"
                          danger
                          shape="circle"
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.removeFromCv('skillsSummary', index)
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:minus" />
                          </template>
                        </Button>
                      </template>
                    </Input>
                  </div>
                </template>
                <template #footer>
                  <Button
                    type="dashed"
                    block
                    class="col-strat-2 col-end-3 !flex justify-center items-center"
                    @click.prevent="
                      cvStore.addToCv('skillsSummary', { label: '' })
                    "
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:plus" />
                    </template>
                  </Button>
                </template>
              </draggable>
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="6" :class="[`${prefixCls}__educations`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:hat" />
                {{ $t("educations") }}:
              </span>
            </template>
            <FormItem label="Educations">
              <draggable
                tag="div"
                :list="cvStore.state.cv.educations"
                class="list-group grid grid-cols-[3rem,1fr] gap-1"
                handle=".handle"
                item-key="index"
                @change="dargHandler"
              >
                <template #item="{ element, index }">
                  <div class="grid grid-cols-[3rem,1fr] gap-1 mb-3 col-span-2">
                    <Button
                      type="default"
                      size="small"
                      class="handle !border-0 !flex justify-center items-center !w-11 !h-10"
                    >
                      <template #icon>
                        <Icon icon="icon-park-outline:drag" />
                      </template>
                    </Button>
                    <Input v-model:value="element.label" type="text">
                      <template #suffix>
                        <Button
                          type="text"
                          danger
                          shape="circle"
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.removeFromCv('educations', index)
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:minus" />
                          </template>
                        </Button>
                      </template>
                    </Input>
                  </div>
                </template>
                <template #footer>
                  <Button
                    type="dashed"
                    block
                    class="col-strat-2 col-end-3 !flex justify-center items-center"
                    @click.prevent="
                      cvStore.addToCv('educations', { label: '' })
                    "
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:plus" />
                    </template>
                  </Button>
                </template>
              </draggable>
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="7" :class="[`${prefixCls}__tech-experiences`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:book" />
                {{ $t("teachExperiences") }}:
              </span>
            </template>
            <FormItem label="Teach Experiences">
              <draggable
                tag="div"
                :list="cvStore.state.cv.techExperiences"
                class="list-group grid grid-cols-[3rem,1fr] gap-1"
                handle=".handle"
                item-key="index"
                @change="dargHandler"
              >
                <template #item="{ element, index }">
                  <div class="grid grid-cols-[3rem,1fr] gap-1 mb-3 col-span-2">
                    <Button
                      type="default"
                      size="small"
                      class="handle !border-0 !flex justify-center items-center !w-11 !h-10"
                    >
                      <template #icon>
                        <Icon icon="icon-park-outline:drag" />
                      </template>
                    </Button>
                    <Input v-model:value="element.label" type="text">
                      <template #suffix>
                        <Button
                          type="text"
                          danger
                          shape="circle"
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.removeFromCv('techExperiences', index)
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:minus" />
                          </template>
                        </Button>
                      </template>
                    </Input>
                  </div>
                </template>
                <template #footer>
                  <Button
                    type="dashed"
                    block
                    class="col-strat-2 col-end-3 !flex justify-center items-center"
                    @click.prevent="
                      cvStore.addToCv('techExperiences', { label: '' })
                    "
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:plus" />
                    </template>
                  </Button>
                </template>
              </draggable>
            </FormItem>
          </CollapsePanel>
          <CollapsePanel key="8" :class="[`${prefixCls}__socials`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:app-switch" />
                {{ $t("social") }}:
              </span>
            </template>
            <FormItem label="Social">
              <draggable
                tag="div"
                :list="cvStore.state.cv.socials"
                class="list-group grid grid-cols-[3rem,1fr] gap-1"
                handle=".handle"
                item-key="index"
                @change="dargHandler"
              >
                <template #item="{ element, index }">
                  <div
                    class="grid grid-cols-[3rem,1fr] gap-1 mb-3 col-span-2 items-center"
                  >
                    <Button
                      type="default"
                      size="small"
                      class="handle !border-0 !flex justify-center items-center !w-11 !h-10 row-span-2"
                    >
                      <template #icon>
                        <Icon icon="icon-park-outline:drag" />
                      </template>
                    </Button>
                    <Input v-model:value="element.label" type="text">
                      <template #prefix>
                        <Select v-model:value="element.icon" class="">
                          <template v-for="item in contactIcons">
                            <SelectOption
                              :value="item.icon"
                              class="flex items-center justify-center"
                            >
                              <Icon :icon="item.icon" />
                            </SelectOption>
                          </template>
                        </Select>
                      </template>
                      <template #suffix>
                        <Button
                          type="text"
                          danger
                          shape="circle"
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.removeFromCv('socials', index)
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:minus" />
                          </template>
                        </Button>
                      </template>
                    </Input>

                    <Input
                      v-model:value="element.link"
                      type="text"
                      class="col-start-2"
                      placeholder="Social Link"
                    />
                  </div>
                </template>
                <template #footer>
                  <Button
                    type="dashed"
                    block
                    class="col-strat-2 col-end-3 !flex justify-center items-center"
                    @click.prevent="
                      cvStore.addToCv('socials', {
                        label: '',
                        icon: '',
                        link: '',
                      })
                    "
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:plus" />
                    </template>
                  </Button>
                </template>
              </draggable>
            </FormItem>
          </CollapsePanel>
        </Collapse>
      </TabPane>
      <TabPane key="2" tab="Main Panel">
        <Collapse v-model:activeKey="activeKey" accordion>
          <CollapsePanel key="9" :class="[`${prefixCls}__software-knowledges`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:home" />
                {{ $t("softwareKnowledge") }}:
              </span>
            </template>
            <div class="grid grid-cols-[max-content,1fr]">
              <draggable
                tag="div"
                :list="cvStore.state.cv.softwareKnowledges"
                class="list-group"
                handle=".handle"
                item-key="index"
                @change="dargHandler"
              >
                <template #item="{ element, index }">
                  <Button
                    type="ghost"
                    size="small"
                    class="handle !border-0 !flex justify-center items-center !w-11 !h-10"
                  >
                    <template #icon>
                      <Icon icon="icon-park-outline:drag" />
                    </template>
                  </Button>
                </template>
              </draggable>
              <Collapse>
                <template
                  v-for="(item, index) in cvStore.state.cv.softwareKnowledges"
                  :key="index"
                >
                  <CollapsePanel>
                    <template #header>
                      <span class="header__title flex items-center gap-x-2">
                        <Icon icon="icon-park-outline:home" />
                        {{ item.label }}
                      </span>
                    </template>
                    <FormItem label="Software Knowledge Title">
                      <Input
                        v-model:value="item.label"
                        type="text"
                        class="mb-4"
                      >
                        <template #suffix>
                          <Button
                            type="text"
                            danger
                            shape="circle"
                            class="!flex justify-center items-center"
                            @click.prevent="
                              cvStore.removeFromCv('softwareKnowledges', index)
                            "
                          >
                            <template #icon>
                              <Icon icon="icon-park-outline:minus" />
                            </template>
                          </Button>
                        </template>
                        {{ item.label }}
                      </Input>
                      <div class="grid grid-cols-3 gap-4">
                        <template
                          v-for="(single, skillIndex) in item.skills"
                          :key="skillIndex"
                        >
                          <Input v-model:value="single.label" type="text">
                            <template #suffix>
                              <Button
                                type="text"
                                danger
                                shape="circle"
                                class="!flex justify-center items-center"
                                @click.prevent="
                                  cvStore.state.removeItemFromCv()
                                "
                              >
                                <template #icon>
                                  <Icon icon="icon-park-outline:minus" />
                                </template>
                              </Button>
                            </template>
                            {{ item.label }}
                          </Input>
                        </template>

                        <Button
                          type="dashed"
                          block
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.addItemInCvFeild(
                              'softwareKnowledges',
                              index,
                              'skills',
                              { label: '' }
                            )
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:plus" />
                          </template>
                        </Button>
                      </div>
                    </FormItem>
                  </CollapsePanel>
                </template>
              </Collapse>
            </div>

            <Button
              type="dashed"
              block
              class="!flex justify-center items-center !h-12"
              @click.prevent=""
            >
              <template #icon>
                <Icon icon="icon-park-outline:plus" />
              </template>
            </Button>
          </CollapsePanel>
          <CollapsePanel key="10" :class="[`${prefixCls}__experiences`]">
            <template #header>
              <span class="header__title flex items-center gap-x-2">
                <Icon icon="icon-park-outline:code" />{{ $t("experiences") }}::
              </span>
            </template>
            <FormItem>
              <template #label>
                <span>Experiences</span>
              </template>
              <Collapse>
                <template
                  v-for="(item, index) in cvStore.state.cv.experiences"
                  :key="index"
                >
                  <CollapsePanel>
                    <template #header>
                      <span class="header__title">
                        {{ item.title }} at
                        {{ item.company.name }}
                      </span>
                    </template>
                    <Button
                      type="text"
                      danger
                      shape="circle"
                      class="!absolute right-0 top-0 !flex justify-center items-center"
                      @click.prevent="
                        cvStore.removeFromCv('experiences', index)
                      "
                    >
                      <template #icon>
                        <Icon icon="icon-park-outline:close" />
                      </template>
                    </Button>
                    <FormItem label="Title">
                      <Input
                        v-model:value="item.title"
                        type="text"
                        placeholder="label"
                      />
                    </FormItem>
                    <FormItem label="Company name">
                      <Input
                        v-model:value="item.company.name"
                        type="text"
                        placeholder="label"
                      />
                    </FormItem>
                    <FormItem label="Company url">
                      <Input
                        v-model:value="item.company.url"
                        type="text"
                        placeholder="label"
                      />
                    </FormItem>
                    <FormItem label="Description">
                      <Textarea
                        :rows="5"
                        v-model:value="item.description"
                        type="text"
                        placeholder="label"
                      />
                    </FormItem>
                    <FormItem label="Skills">
                      <div class="grid grid-cols-2 gap-2">
                        <template
                          v-for="(single, skillIndex) in item.skills"
                          :key="skillIndex"
                        >
                          <Input
                            class="mb-1"
                            v-model:value="single.label"
                            type="text"
                          >
                            <template #suffix>
                              <Button
                                type="text"
                                danger
                                shape="circle"
                                class="!flex justify-center items-center"
                                @click.prevent="
                                  cvStore.state.removeExperiencesSkill(
                                    item.company.name,
                                    skillIndex
                                  )
                                "
                              >
                                <template #icon>
                                  <Icon icon="icon-park-outline:minus" />
                                </template>
                              </Button>
                            </template>
                          </Input>
                        </template>
                        <Button
                          type="dashed"
                          block
                          class="!flex justify-center items-center"
                          @click.prevent="
                            cvStore.addItemInCvFeild(
                              'experiences',
                              index,
                              'skills',
                              { label: '' }
                            )
                          "
                        >
                          <template #icon>
                            <Icon icon="icon-park-outline:plus" />
                          </template>
                        </Button>
                      </div>
                    </FormItem>
                    <div class="flex gap-x-3">
                      <FormItem label="Begin Date">
                        <DatePicker
                          v-model:value="item.beginDate"
                          placeholder="label"
                        />
                      </FormItem>
                      <FormItem label="End Date">
                        <DatePicker
                          v-model:value="item.endDate"
                          placeholder="label"
                        />
                      </FormItem>
                    </div>
                  </CollapsePanel>
                </template>
              </Collapse>
              <Button
                type="dashed"
                block
                class="!flex justify-center items-center"
                @click.prevent="
                  cvStore.addToCv('experiences', {
                    title: '',
                    company: { name: '', url: '' },
                    description: '',
                    beginDate: '',
                    endDate: '',
                    skills: [{ label: '' }],
                  })
                "
              >
                <template #icon>
                  <Icon icon="icon-park-outline:plus" />
                </template>
              </Button>
            </FormItem>
          </CollapsePanel>
        </Collapse>
      </TabPane>
      <TabPane key="3" tab="Theme Panel">
        <div class="p-4">
          <FormItem>
            <template #label>
              <div class="flex gap-x-4 items-center">
                <Icon icon="fa:language" />
                <span>Language:</span>
              </div>
            </template>
            <RadioGroup
              v-model:value="cvStore.state.cv.theme.lang"
              @change="changeLocale"
            >
              <Radio value="en">
                <div class="flex gap-x-3 items-center">
                  <Icon icon="circle-flags:us" />
                  <span>English</span>
                </div>
              </Radio>
              <Radio value="fa">
                <div class="flex gap-x-3 items-center">
                  <Icon icon="emojione:flag-for-iran" />
                  Persian
                </div>
              </Radio>
            </RadioGroup>
          </FormItem>

          <FormItem>
            <template #label>
              <div class="flex gap-x-4 items-center">
                <Icon icon="fa:font" />
                <span>Font face:</span>
              </div>
            </template>
            <Select
              v-model:value="cvStore.state.cv.theme.font"
              :class="`font-${cvStore.state.cv.theme.font}`"
              :options="fontList"
            >
              <SelectOption value="vazir" class="font-vazir"
                >Vazir</SelectOption
              >
            </Select>
          </FormItem>

          <FormItem>
            <template #label>
              <div class="flex gap-x-4 items-center">
                <Icon icon="icon-park-outline:theme" />
                <span>Language:</span>o
              </div>
            </template>
            <RadioGroup
              v-model:value="cvStore.state.cv.theme.color"
              class="w-40"
            >
              <RadioButton value="pink" class="!bg-pink-500 !w-6 !h-6 !p-0" />
              <RadioButton value="rose" class="!bg-rose-500 !w-6 !h-6 !p-0" />
              <RadioButton
                value="orange"
                class="!bg-orange-500 !w-6 !h-6 !p-0"
              />
              <RadioButton
                value="yellow"
                class="!bg-yellow-500 !w-6 !h-6 !p-0"
              />
              <RadioButton value="amber" class="!bg-amber-500 !w-6 !h-6 !p-0" />
              <RadioButton value="lime" class="!bg-lime-500 !w-6 !h-6 !p-0" />
              <RadioButton value="green" class="!bg-green-500 !w-6 !h-6 !p-0" />
              <RadioButton
                value="emerald"
                class="!bg-emerald-500 !w-6 !h-6 !p-0"
              />
              <RadioButton value="teal" class="!bg-teal-500 !w-6 !h-6 !p-0" />
              <RadioButton value="cyan" class="!bg-cyan-500 !w-6 !h-6 !p-0" />
              <RadioButton value="sky" class="!bg-sky-500 !w-6 !h-6 !p-0" />
              <RadioButton value="blue" class="!bg-blue-500 !w-6 !h-6 !p-0" />
              <RadioButton
                value="indigo"
                class="!bg-indigo-500 !w-6 !h-6 !p-0"
              />
              <RadioButton
                value="purple"
                class="!bg-purple-500 !w-6 !h-6 !p-0"
              />
              <RadioButton
                value="violet"
                class="!bg-violet-500 !w-6 !h-6 !p-0"
              />
              <RadioButton
                value="fuchsia"
                class="!bg-fuchsia-500 !w-6 !h-6 !p-0"
              />
              <RadioButton value="gray" class="!bg-gray-500 !w-6 !h-6 !p-0" />
              <RadioButton value="slate" class="!bg-slate-500 !w-6 !h-6 !p-0" />
              <RadioButton value="stone" class="!bg-stone-500 !w-6 !h-6 !p-0" />
              <RadioButton
                value="neutral"
                class="!bg-neutral-500 !w-6 !h-6 !p-0"
              />
              <RadioButton value="zinc" class="!bg-zinc-500 !w-6 !h-6 !p-0" />
              <RadioButton value="light" class="!bg-light-500 !w-6 !h-6 !p-0" />
              <RadioButton value="dark" class="!bg-dark-500 !w-6 !h-6 !p-0" />
            </RadioGroup>
          </FormItem>
        </div>
      </TabPane>
    </Tabs>
  </Form>
</template>
<script setup lang="ts">
import {
  Input,
  FormItem,
  Form,
  DatePicker,
  Select,
  SelectOption,
  Textarea,
  Button,
  Collapse,
  CollapsePanel,
  message,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  RadioButton,
} from "ant-design-vue";
import { computed, onMounted, onUnmounted, reactive } from "vue";
import { Dropdown, Menu, MenuItem } from "ant-design-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useCvStore } from "@/stores/CvStore";
import { useDesign } from "@/utils";
import { useI18n } from "vue-i18n";
import draggable from "vuedraggable";
import type { UploadChangeParam } from "ant-design-vue";

const cvStore = useCvStore();

const tabKey = ref("1");
const activeKey = ref([]);
const contactIcons = reactive([
  {
    label: "linkedin",
    icon: "cib:linkedin",
  },
  {
    label: "phone",
    icon: "ci:phone",
  },
  {
    label: "mail",
    icon: "codicon:mail",
  },
  {
    label: "skype",
    icon: "cib:skype",
  },
  {
    label: "twitter",
    icon: "cib:twitter",
  },
  {
    label: "github",
    icon: "cib:github",
  },
  {
    label: "codewars",
    icon: "cib:codewars",
  },
  {
    label: "stack-overflow",
    icon: "cib:stackoverflow",
  },
  {
    label: "codepen",
    icon: "cib:codepen",
  },
]);
function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
// const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");
const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    // Get this url from response in real world.
    // getBase64(info.file.originFileObj, (base64Url: string) => {
    //     imageUrl.value = base64Url;
    //     loading.value = false;
    // });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("upload error");
  }
};
const dargHandler = (id: any) => {
  cvStore.state.cv.contacts.forEach((item, index) => {
    index = index + 1;
  });
};

const { locale } = useI18n();
const html = window.document.getElementsByTagName("html");

const changeLocale = () => {
  if (cvStore.state.cv.theme.lang === "en") {
    html[0].classList.remove("is-rtl");
  }
  if (cvStore.state.cv.theme.lang === "fa") {
    html[0].classList.add("is-rtl");
  }
};

onMounted(() => {
  locale.value = cvStore.state.cv.theme.lang;
});

const fontList = reactive([
  {
    label: "Roboto",
    value: "roboto",
    fontClass: "font-roboto",
  },
  {
    label: "spaceMono",
    value: "spaceMono",
    fontClass: "font-spaceMono",
  },
  {
    label: "calibri",
    value: "calibri",
    fontClass: "font-calibri",
  },
  {
    label: "helvetica",
    value: "helvetica",
    fontClass: "font-helvetica",
  },
  {
    label: "georgia",
    value: "georgia",
    fontClass: "font-georgia",
  },
  {
    label: "sofia",
    value: "sofia",
    fontClass: "font-sofia",
  },
  {
    label: "vazir",
    value: "vazir",
    fontClass: "font-vazir",
  },
]);

const { prefixCls } = useDesign("the-side");
</script>
<style lang="less">
@prefix: ~"amirmaghami-the-side";

.@{prefix} {
  &__fullname {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }

  &__title {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }

  &__about {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }

  &__contacts {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }

    .ant-select-selection-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ant-input-prefix {
      width: 4rem;
      transform: translateX(-10px);
    }

    .ant-select-selector {
      border: 0 !important;
    }
  }

  &__skills-summary {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }

  &__educations {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }

  &__tech-experiences {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }

  &__socials {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }

    .ant-select-selection-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ant-input-prefix {
      width: 4rem;
      transform: translateX(-10px);
    }

    .ant-select-selector {
      border: 0 !important;
    }
  }

  &__software-knowledges {
    .ant-collapse-header {
      justify-content: space-between;

      // align-items: center !important;
      & > div {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
      }

      .header__title {
        order: -1;
      }
    }

    .amirmaghami-the-side__software-knowledges-item {
      .ant-collapse-header {
        // justify-content: space-between;
        // align-items: center !important;
        & > div {
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }

        .header__title {
          // order: -1;
        }
      }
    }
  }

  &__experiences {
    .ant-collapse-header {
      justify-content: space-between;
      align-items: center !important;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .header__title {
        order: -1;
      }
    }
  }
}

.ant-radio-group.ant-radio-group-outline.w-40 {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1px;
  width: max-content;
  border: 1px solid #9e9e9e;
  padding: 1px;
  /* box-shadow: 0 0 2px 1px #9e9e9e; */
}
</style>
