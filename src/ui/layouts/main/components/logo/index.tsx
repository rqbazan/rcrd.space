import * as React from 'react'
import { ColorModes, useColorModeToggle } from '@rqbazan/set-initial-color-mode'
import clsx from 'clsx'
import { darkTheme, keyframes, styled } from '~/stitches.config'

export interface MainLogoProps {
  className?: string
}

const rainbow = keyframes({
  '0%': {
    color: '#52ff00',
  },
  '25%': {
    color: '#4afff4',
  },
  '50%': {
    color: '#ccff00',
  },
  '75%': {
    color: '#ff002e',
  },
  '100%': {
    color: '#5200ff',
  },
})

const Box = styled('div', {
  animation: `${rainbow} linear 5s infinite alternate`,
})

export function MainLogo({ className, ...props }: MainLogoProps) {
  const { onToggle, colorMode } = useColorModeToggle()

  React.useEffect(() => {
    if (colorMode === ColorModes.DARK) {
      document.documentElement.classList.add(darkTheme)
    } else if (colorMode === ColorModes.LIGHT) {
      document.documentElement.classList.remove(darkTheme)
    }
  }, [colorMode])

  return (
    <Box className={clsx('p-2 relative', className)} {...props} onClick={() => onToggle()}>
      <svg width="66" height="68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M51.441 9.524c6.116 3.686 12.393 7.898 13.527 13.284 1.134 5.427-2.875 12.069-5.184 19.237-2.308 7.21-2.916 14.986-7.047 19.846-4.09 4.86-11.664 6.844-18.346 5.629-6.683-1.255-12.474-5.67-18.225-10.003C10.415 53.183 4.664 48.97 2.315 43.26c-2.309-5.67-1.256-12.797.567-20.087 1.863-7.25 4.495-14.661 9.72-18.63 5.224-3.97 13.04-4.577 19.926-3.24 6.885 1.296 12.838 4.495 18.913 8.221Z" />
      </svg>
      <span className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-black opacity-40">
        <svg width="22" height="34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.25 7.265c.048-.431.19-.934.425-1.51a7.53 7.53 0 0 1 .919-1.725 7.45 7.45 0 0 1 1.485-1.51 4.21 4.21 0 0 1 1.908-.934c1.508-.287 2.757-.191 3.747.288.99.479 1.744 1.03 2.262 1.653.189.288.26.455.212.503-.094.096-.259.072-.494-.072-.283-.191-.755-.359-1.414-.503-.613-.143-1.297-.167-2.05-.072-.707.048-1.414.264-2.121.647-.66.384-1.202 1.007-1.626 1.87a9.703 9.703 0 0 0-.778 2.515 24.4 24.4 0 0 0-.283 2.445c0 .718.024 1.341.07 1.869.048.527.072.886.072 1.078.094.527.165 1.198.212 2.013.094.766.141 1.557.141 2.372 0 .814-.023 1.63-.07 2.444a11.446 11.446 0 0 1-.283 2.013c-.047.143-.118.383-.212.718-.048.336-.118.504-.213.504-.235 0-.353-.168-.353-.503v-.72a31.35 31.35 0 0 0-.495-3.594 579.235 579.235 0 0 1-.707-3.81 54.302 54.302 0 0 1-.424-3.881 23.89 23.89 0 0 1 .07-4.098ZM7.777 21.498c.048-.958-.047-2.3-.282-4.025-.189-1.773-.26-3.81-.212-6.11.047-1.198.165-2.42.353-3.666.189-1.294.636-2.564 1.343-3.81.754-1.342 1.697-2.325 2.828-2.948 1.178-.67 2.192-.982 3.04-.934h.424c.141 0 .212.024.212.072 0 .096-.023.143-.07.143-.048-.047-.213-.024-.496.072a5.8 5.8 0 0 0-2.262 1.222 7.963 7.963 0 0 0-1.696 1.87 11 11 0 0 0-1.131 2.228c-.283.767-.448 1.462-.495 2.085-.283 2.635-.26 4.936.07 6.9.236 1.582.425 3.235.566 4.96.141 1.678.07 3.235-.212 4.673-.236 1.39-.73 2.564-1.485 3.523-.707.91-1.814 1.413-3.322 1.51h-.566c-.188-.049-.283-.12-.283-.217 0-.095.212-.263.637-.503 1.225-.575 2.026-1.413 2.403-2.516.377-1.102.59-2.612.636-4.529ZM.283 29.982c.66 1.054 1.697 1.845 3.11 2.372 1.461.48 3.182.431 5.161-.144a6.279 6.279 0 0 0 2.616-1.51 9.692 9.692 0 0 0 1.838-2.371c.518-.911.895-1.845 1.13-2.804.284-.958.449-1.845.496-2.66.047-1.341 0-2.66-.142-3.953a45.193 45.193 0 0 0-.424-3.738 392.272 392.272 0 0 0-.424-3.595 20.208 20.208 0 0 1 0-3.378c.094-1.198.424-2.109.99-2.732a3.554 3.554 0 0 1 2.05-1.15c.848-.192 1.72-.144 2.616.144.895.287 1.72.743 2.474 1.365.188.096.26.216.212.36 0 .096-.047.12-.141.072l-.283-.144c-1.744-.575-3.11-.743-4.1-.503-.943.24-1.462 1.102-1.556 2.588-.094 1.725.024 3.762.354 6.11.377 2.3.518 4.864.424 7.692.047.958-.07 2.06-.354 3.306a13.563 13.563 0 0 1-1.272 3.667 10.44 10.44 0 0 1-2.333 3.09c-.943.911-2.074 1.486-3.393 1.726-2.498.383-4.501.24-6.01-.431-1.46-.671-2.52-1.702-3.18-3.091C.046 29.98 0 29.813 0 29.764h.07l.213.216Zm3.11 0c.896.24 1.98.335 3.252.287.425-.047.943-.167 1.556-.359.612-.192.942-.24.99-.144.14.192 0 .432-.425.72-.424.287-.966.55-1.626.79-.66.192-1.343.335-2.05.431-.707.048-1.296-.024-1.767-.215-.896-.384-1.532-.791-1.909-1.223a7.735 7.735 0 0 1-1.131-1.725l-.142-.287c-.094-.192-.117-.312-.07-.36.047-.048.118-.048.212 0 .047.048.07.096.07.144.566.527 1.037.935 1.414 1.222.425.24.967.48 1.626.719Z" />
        </svg>
      </span>
    </Box>
  )
}
