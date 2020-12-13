import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function OwlImage({ className, ...props }) {
  return (
    <img
      src="https://res.cloudinary.com/dpwoyjb1f/image/upload/v1607890376/me/night_owl_bg_removed_shhu0a.png"
      alt="coverage"
      className={clsx(styles.img, className)}
      {...props}
    />
  )
}
