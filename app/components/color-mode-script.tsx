import { getJsText } from "@rqbazan/set-initial-color-mode";

export function ColorModeScript() {
  return (
    <script
      id="set-initial-color-mode"
      dangerouslySetInnerHTML={{ __html: getJsText() }}
    />
  );
}
