import { motion } from 'framer-motion'

export interface MainTransitionProps {
  children: React.ReactNode
}

export function MainTransition({ children }: MainTransitionProps) {
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
    >
      {children}
    </motion.div>
  )
}
