import { useLocation, useOutlet } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

// ref: https://stackoverflow.com/a/74351729
const AnimatedOutlet: React.FC = () => {
  const o = useOutlet()
  const [outlet] = useState(o)

  return <>{outlet}</>
}

export function Content() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
      >
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  )
}
