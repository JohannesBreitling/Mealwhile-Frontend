export const messages = {
    de: {
        keywords: {
            username: 'Nutzername',
            password: 'Passwort',
            login: 'anmelden',
            userGroup: 'Nutzergruppe',
            firstname: 'Vorname',
            lastname: 'Nachname',
            register: 'Registrieren'
        },

        errors: {
            title: {
                wrongPassword: 'Falsches Passwort',
                userNotFound: 'Nutzer nicht gefunden'
            },

            message: {
                wrongPassword: 'Das angegebene Passwort ist falsch.',
                userNotFound: 'Kein Nutzer mit diesem Nutzernamen gefunden.'
            }
        },

        messages: {
            rules: {
                noUsername: 'Du musst einen Nutzernamen angeben.',
                noPassword: 'Du musst ein Passwort angeben.',
                noFirstname: 'Du musst deinen Vornamen angeben',
                noLastname: 'Du musst deinen Nachnamen angeben',
                shortPassword: 'Dein Passwort muss aus mindestens 8 Zeichen bestehen.',
                wrongUserGroupLength: 'Die ID der Nutzergruppe muss aus 12 Zeichen bestehen.'
            },

            noAccount: 'Kein Account? Registrieren...',
            loadUsername: 'Prüfe Nutzernamen...',
            usernameAvaiable: 'Nutzername verfügbar!',
            usernameNotAvaiable: 'Nutzername leider nicht verfügbar.'
        },

        login: {
            message: 'Bei Mealwhile anmelden'
        },

        register: {
            message: 'Bei Mealwhile registrieren',
            userGroupInfo: 'Gib die ID der Nutzergruppe an, die du von deinem Eventleiter erhalten hast.'
        }
    },

    en: {
        keywords: {
            username: 'username',
            password: 'password',
            login: 'login'
        },

        messages: {
            rules: {
                noUsername: 'You have to provide a username.',
                noPassword: 'You have to provide a password.'
            },

            noAccount: 'No Account? Register...'
        },

        errors: {
            title: {
                wrongPassword: 'Wrong password',
                userNotFound: 'User not found'
            },

            message: {
                wrongPassword: 'The provided password is wrong.',
                userNotFound: 'No user with that username is found.'
            }
        },

        login: {
            message: 'Login to Mealwhile'
        }
    }
}