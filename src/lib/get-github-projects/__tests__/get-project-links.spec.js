import { getProjectLinks } from '../get-project-links'

describe('Get Project Links', () => {
  test('should get the project links when the `homepageUrl` is not present', () => {
    const mockedRepo = {
      homepageUrl: null,
    }

    const links = getProjectLinks(mockedRepo, [
      'https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ',
      'https://www.npmjs.com/package/@rqbazan/set-initial-color-mode',
    ])

    expect(links).toMatchObject([
      {
        url: 'https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ',
        type: 'drawing',
      },
      {
        url: 'https://www.npmjs.com/package/@rqbazan/set-initial-color-mode',
        type: 'package',
      },
    ])
  })

  it('should get the project links when just the `homepageUrl` is present', () => {
    const mockedRepo = {
      homepageUrl: 'https://rcrd.space',
    }

    const links = getProjectLinks(mockedRepo)

    expect(links).toMatchObject([{ url: 'https://rcrd.space', type: 'homepage' }])
  })

  test('should get the project links when all the arguments are filled', () => {
    const mockedRepo = {
      homepageUrl: 'https://rcrd.space',
    }

    const links = getProjectLinks(mockedRepo, [
      'https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ',
      'https://www.npmjs.com/package/@rqbazan/set-initial-color-mode',
    ])

    expect(links).toMatchObject([
      { url: 'https://rcrd.space', type: 'homepage' },
      {
        url: 'https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ',
        type: 'drawing',
      },
      {
        url: 'https://www.npmjs.com/package/@rqbazan/set-initial-color-mode',
        type: 'package',
      },
    ])
  })
})
