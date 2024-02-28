import { getJsText } from "@rqbazan/set-initial-color-mode"

export function ColorModeScript() {
  return (
    <script
      id="set-initial-color-mode"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a special script
      dangerouslySetInnerHTML={{ __html: getJsText() }}
    />
  )
}
