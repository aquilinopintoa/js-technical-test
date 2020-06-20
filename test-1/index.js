const users =  ['928g9', '928g8', '928d9', '926g9']

const buildUser = (id) => {
    return {
        Id: id,
        Username: id,
        Email: id,
        firstName: id,
        lastName: id,
    }
}

const getUserById = (id) => {
    return new Promise((resolve, reject) =>  {
        try {
            setTimeout(() => {
                resolve(buildUser(id))
            }, 1 * 1000)
        } catch (e) {
            reject(e)
        }
    })
}

const sendEmail = (email) => {
    return new Promise((resolve, reject) =>  {
        try {
            setTimeout(() => {
                resolve('200')
            }, 1 * 1000)
        } catch (e) {
            reject(e)
        }
    })
}

const sendEmailToUsers = (userIds) => {
    userIds.forEach((userId) => {
        getUserById(userId)
            .then((userData) => {
                sendEmail(userData.Email)
                    .then((result) => {
                        console.log(result)
                    })
            })
    })
}

sendEmailToUsers(users);
