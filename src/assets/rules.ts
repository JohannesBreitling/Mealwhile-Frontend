import { reactive } from "vue"
import { i18n } from "@/i18n/i18n"

export const rules = reactive({
    noUsername: (v: string) => !!v || i18n.global.t('messages.rules.noUsername'),
    noPassword: (v: string) => !!v || i18n.global.t('messages.rules.noPassword'),
    noFirstname: (v: string) => !!v || i18n.global.t('messages.rules.noFirstname'),
    noLastname: (v: string) => !!v || i18n.global.t('messages.rules.noLastname'),
    shortPassword: (v: string) => (v.length >= 8) || i18n.global.t('messages.rules.shortPassword'),
    userGroupLength: (v: string) => (v.length == 12) || i18n.global.t('messages.rules.wrongUserGroupLength'),
    usernameNotAvaiable: (v: string) => false || i18n.global.t('messages.usernameNotAvaiable')
})