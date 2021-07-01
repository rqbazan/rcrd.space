import Airtable from 'airtable'
import { buildProcessor } from '@rqbazan/md-to-html'
import externalLinks from 'remark-external-links'
import { format as dateFormat, parse as parseDate } from 'date-fns'

const db = Airtable.base(process.env.AIRTABLE_BASE)

export async function getTechProfile() {
  const record = await db('Tech Profiles').find(process.env.AIRTABLE_RECORD_ID)

  return record.fields
}

export async function getTechProjects() {
  const records = await db('Tech Projects')
    .select({
      sort: [
        { field: 'startAt', direction: 'desc' },
        { field: 'endAt', direction: 'desc' },
        { field: 'name', direction: 'asc' },
      ],
    })
    .all()

  function formatDate(strDate) {
    return strDate
      ? dateFormat(parseDate(strDate, 'yyyy-MM-dd', new Date()), 'LLL yyyy')
      : null
  }

  const mdToHtml = buildProcessor({
    twemoji: {
      attributes: () => ({
        height: '16',
        width: '16',
      }),
    },
  })

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
      .toString(),
  }))
}
