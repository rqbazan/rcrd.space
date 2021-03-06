import { processIssue } from '../proccess-issue'

describe('Process Issue', () => {
  it('should process the issue bodyHTML with full template', () => {
    const mockedIssue = {
      bodyHTML:
        '<h3 dir="auto">Description</h3>\n<p dir="auto">After reading <a href="https://www.joshwcomeau.com/react/dark-mode/" rel="nofollow">The Quest for the Perfect Dark Mode</a> by <a href="https://twitter.com/JoshWComeau" rel="nofollow">Josh Comeau</a>, I’ve created a reusable solution for the dark-mode-flick-problem. My own website use this solution.</p>\n<h3 dir="auto">Extra Links</h3>\n<ul dir="auto">\n<li><a href="https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ" rel="nofollow">https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ</a></li>\n<li><a href="https://www.npmjs.com/package/@rqbazan/set-initial-color-mode" rel="nofollow">https://www.npmjs.com/package/@rqbazan/set-initial-color-mode</a></li>\n</ul>',
    }

    // @ts-expect-error
    const realValue = processIssue(mockedIssue)

    expect(realValue).toMatchObject({
      descriptionHTML:
        '<p dir="auto">After reading <a href="https://www.joshwcomeau.com/react/dark-mode/" rel="nofollow">The Quest for the Perfect Dark Mode</a> by <a href="https://twitter.com/JoshWComeau" rel="nofollow">Josh Comeau</a>, I’ve created a reusable solution for the dark-mode-flick-problem. My own website use this solution.</p>',
      extraLinks: [
        'https://excalidraw.com/#json=k6pQGzgskJz0DcXvO7xDt,bYqI9PPcI8CB3vue35JRGQ',
        'https://www.npmjs.com/package/@rqbazan/set-initial-color-mode',
      ],
    })
  })

  it('should process the issue bodyHTML without extra links', () => {
    const mockedIssue = {
      bodyHTML:
        '<h3 dir="auto">Description</h3>\n<p dir="auto">After reading <a href="https://www.joshwcomeau.com/react/dark-mode/" rel="nofollow">The Quest for the Perfect Dark Mode</a> by <a href="https://twitter.com/JoshWComeau" rel="nofollow">Josh Comeau</a>, I’ve created a reusable solution for the dark-mode-flick-problem. My own website use this solution.</p>',
    }

    // @ts-expect-error
    const realValue = processIssue(mockedIssue)

    expect(realValue).toMatchObject({
      descriptionHTML:
        '<p dir="auto">After reading <a href="https://www.joshwcomeau.com/react/dark-mode/" rel="nofollow">The Quest for the Perfect Dark Mode</a> by <a href="https://twitter.com/JoshWComeau" rel="nofollow">Josh Comeau</a>, I’ve created a reusable solution for the dark-mode-flick-problem. My own website use this solution.</p>',
      extraLinks: undefined,
    })
  })

  it('should process the issue bodyHTML without extra links content', () => {
    const mockedIssue = {
      bodyHTML:
        '<h3 dir="auto">Description</h3>\n<p dir="auto">After reading <a href="https://www.joshwcomeau.com/react/dark-mode/" rel="nofollow">The Quest for the Perfect Dark Mode</a> by <a href="https://twitter.com/JoshWComeau" rel="nofollow">Josh Comeau</a>, I’ve created a reusable solution for the dark-mode-flick-problem. My own website use this solution.</p>\n<h3 dir="auto">Extra Links</h3>\n<p dir="auto"><em>No response</em></p>',
    }

    // @ts-expect-error
    const realValue = processIssue(mockedIssue)

    expect(realValue).toMatchObject({
      descriptionHTML:
        '<p dir="auto">After reading <a href="https://www.joshwcomeau.com/react/dark-mode/" rel="nofollow">The Quest for the Perfect Dark Mode</a> by <a href="https://twitter.com/JoshWComeau" rel="nofollow">Josh Comeau</a>, I’ve created a reusable solution for the dark-mode-flick-problem. My own website use this solution.</p>',
      extraLinks: [],
    })
  })
})
