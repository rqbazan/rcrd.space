import { createStyleObject } from '@capsizecss/core'

type CapsizecssStyleObject = ReturnType<typeof createStyleObject>

type StitchesStyleObject = Pick<CapsizecssStyleObject, 'fontSize' | 'lineHeight'> & {
  '&::after': CapsizecssStyleObject['::after']
  '&::before': CapsizecssStyleObject['::before']
}

type CapsizedFn = (...args: Parameters<typeof createStyleObject>) => StitchesStyleObject

export const capsized: CapsizedFn = options => {
  const styles = createStyleObject(options)

  return {
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    '&::after': styles['::after'],
    '&::before': styles['::before'],
  }
}
