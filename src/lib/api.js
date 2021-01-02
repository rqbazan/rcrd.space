import Airtable from 'airtable'
import mdToHtml from '@rqbazan/md-to-html'
import externalLinks from 'remark-external-links'
import { format as dateFormat, parse as parseDate } from 'date-fns'

const db = Airtable.base(process.env.AIRTABLE_BASE)

export async function getTechProfile() {
  const record = await db('Tech Profiles').find(process.env.AIRTABLE_RECORD_ID)

  return {
    profile: {
      name: record.fields.name,
      'a.k.a': record.fields.nickname,
      role: record.fields.freelanceRole,
      location: record.fields.location,
      interests: record.fields.interests
    },
    socialNetworks: {
      github: record.fields.github,
      linkedin: record.fields.linkedin,
      twitter: record.fields.twitter
    }
  }
}

export async function getTechProjects() {
  const records = await db('Tech Projects')
    .select({
      sort: [
        { field: 'startAt', direction: 'desc' },
        { field: 'endAt', direction: 'desc' },
        { field: 'name', direction: 'asc' }
      ]
    })
    .all()

  function formatDate(strDate) {
    return strDate
      ? dateFormat(parseDate(strDate, 'yyyy-MM-dd', new Date()), 'LLL yyyy')
      : null
  }

  return records.map(record => ({
    id: record.id,
    ...record.fields,
    startAt: formatDate(record.fields.startAt),
    endAt: formatDate(record.fields.endAt),
    accessInfo: ['package', 'website', 'design', 'source']
      .map(key => [key, record.fields[key]])
      .filter(item => item[1])
      .map(([key, value]) => ({ icon: key, url: value })),
    description: mdToHtml()
      .use(externalLinks, { rel: ['noopener', 'noreferrer'] })
      .processSync(record.fields.description)
      .toString()
  }))
}
