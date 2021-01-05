import clsx from 'clsx'
import styles from './styles.module.css'

export default function OwlImage({ className, ...props }) {
  return (
    <picture className="flex items-end justify-end bg-black left-0 right-0 bottom-0 top-16 fixed select-none">
      <source
        media="(min-width:1280px)"
        srcSet="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto,f_auto/v1608151568/me/night-owl-remove-bg.png"
      />
      <source
        media="(min-width:1024px)"
        srcSet="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto,f_auto,w_650,c_scale/v1608151568/me/night-owl-remove-bg.png"
      />
      <source
        media="(min-width:768px)"
        srcSet="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto,f_auto,w_550,c_scale/v1608151568/me/night-owl-remove-bg.png"
      />
      <img
        src="https://res.cloudinary.com/dpwoyjb1f/image/upload/q_auto,f_auto,w_400,c_scale/v1608151568/me/night-owl-remove-bg.png"
        alt="coverage"
        className={clsx(styles.img, className)}
        {...props}
      />
    </picture>
  )
}
