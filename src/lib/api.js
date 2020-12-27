import mdToHtml from '@rqbazan/md-to-html'
import externalLinks from 'remark-external-links'
import { format as dateFormat, parse as parseDate } from 'date-fns'
import { httpClient } from './client'
import * as auth from './auth'

export async function getTechProfile() {
  const token = await auth.getJWT()

  const { data } = await httpClient.get('/tech-profiles/1', {
    headers: { authorization: `Bearer ${token}` }
  })

  return {
    profile: {
      name: data.shortName,
      'a.k.a': data.nickname,
      role: data.freelanceRole,
      location: `${data.geoLocation.divisionLevel1}, ${data.geoLocation.countryName}`,
      interests: data.interests
    },
    socialNetworks: data.contactInfo.socialNetworks
  }
}

export async function getTechProjects() {
  const token = await auth.getJWT()

  const { data } = await httpClient.get('/tech-projects', {
    headers: { authorization: `Bearer ${token}` },
    params: {
      _sort: 'startAt:desc,endAt:desc,name:asc'
    }
  })

  function formatDate(strDate) {
    return strDate
      ? dateFormat(parseDate(strDate, 'yyyy-MM-dd', new Date()), 'LLL yyyy')
      : null
  }

  return data.map(item => ({
    ...item,
    startAt: formatDate(item.startAt),
    endAt: formatDate(item.endAt),
    description: mdToHtml()
      .use(externalLinks, { rel: ['noopener', 'noreferrer'] })
      .processSync(item.description)
      .toString()
  }))
}
