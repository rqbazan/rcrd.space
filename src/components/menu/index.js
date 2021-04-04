import { Burger } from '../burger'
import { Navigation } from '../navigation'

export function Menu({ isOpen, onClose }) {
  return (
    <aside
      className="bg-body dark:bg-body-dark h-screen fixed right-0 top-0 w-full z-50"
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="absolute flex items-center justify-end w-full h-16 px-6">
        <Burger closable onClick={onClose} />
      </div>
      <Navigation className="w-full flex flex-col items-center justify-center" />
    </aside>
  )
}
