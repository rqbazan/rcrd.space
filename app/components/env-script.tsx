export interface EnvScriptProps {
  env: Record<string, string>;
}

declare global {
  interface Window {
    ENV: Record<string, string>;
  }
}

export function EnvScript({ env }: EnvScriptProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.ENV = ${JSON.stringify(env)}`,
      }}
    />
  );
}
