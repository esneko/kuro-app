'use strict'

const users = { ry: { id: 80 } }

export default function fetch(url: string) {
  return new Promise((resolve, reject) => {
    const username = url.substr(url.lastIndexOf('/') + 1)

    process.nextTick(
      () =>
        users[username]
          ? resolve(users[username])
          : reject({ error: 'User not found.' })
    )
  })
}
