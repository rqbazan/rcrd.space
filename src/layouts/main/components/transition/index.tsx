import { motion } from 'framer-motion'

export interface MainTransitionProps {
  children: React.ReactNode
}

export function MainTransition({ children }: MainTransitionProps) {
  return (
    <motion.div
      transition={{ duration: 0.15 }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
    >
      {children}
    </motion.div>
  )
}
