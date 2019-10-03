import data from 'src/data.json'

const curlyBracketsIdentation = /^[{}]?\s{0,5}/gm

const desktopCode = JSON.stringify(data.profile, null, 4)
const mobileCode = desktopCode.replace(curlyBracketsIdentation, '').trim()

export default (_, res) => {
  res.json({
    profile: {
      desktopCode,
      mobileCode,
      socialLinks: data.socialLinks
    }
  })
}
