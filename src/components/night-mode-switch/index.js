/* eslint-disable @next/next/no-img-element */
export function NightModeSwitch({ checked, onCheckedChange }) {
  const onClick = () => onCheckedChange(!checked)

  return (
    <div
      className="outline-none rounded-full overflow-hidden focus:ring-2 ring-yellow-300 dark:ring-blue-700"
      role="button"
      tabIndex={0}
      onKeyPress={e => {
        if (e.code === 'Enter') {
          onClick()
        }
      }}
    >
      <input
        readOnly
        className="hidden"
        id="night-mode-checkbox"
        type="checkbox"
        checked={checked}
        onClick={onClick}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className="cursor-pointer flex items-center justify-between rounded-full relative bg-title p-[5px] h-[26px] w-[50px]"
        htmlFor="night-mode-checkbox"
      >
        <img
          src="data:image/png;base64,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"
          alt="moon"
          className="select-none"
          width={16}
          height={16}
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABHVBMVEUAAAD+qDL+pjH+20H+3EH+0D7+RxX+QxT+yTz+vTj+Zx/+ZR7+SBb+TBf+Shf+Thf+vjj9bCD+aiD+Uhn+Thj+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+qDL+/03+qDL+qDL+20H+20H+20H+20H+20H+3EH+3EH+20H+20H+20H+qDL+pzL+20H+20H+20H+3EH+qDL+20H+20H+3EH+20H+20H+qDL+qDL+20H+20H+pzL+qDL+qDL+qDL+qDL+20H+1T/+zT3+0T7+2ED+0D7+vDj+uTf+uDf+wzr+1j/+2UD+0j7+wDn+tzb+zj3+3EH+zD3+tjb///92CB/iAAAASnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAABCNdsJsCrm+AQhIg4UTEDP5MVqCgW9GQc6e6m+vql8OwizHjir8KsNYeXlYvJBNKo3H7TETRStAkoAAAABYktHRF4E1mG7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5QYdERo0KxOdWgAAAbRJREFUOMuFU+d6gkAQdC2JppqiYsNeELuJBQUjtuTOXhM17/8aQSF4Yozzgw/Yudu5uVmdjgAA2GzSQ3cKAHaHw/4fgXIi5KTgeOEO0ovL7fG4XUD8kgle2ufffkIgGAoFA7Ct+320VyXQ4Ug0FtcbjKYLhrk0GQ16KhaNhGmV4IsglGDNyVQ6k83lCy+vZjaBUMSnEvxRVCxZyhUO415/MOSqZUupiKI1lQCxROmKF7CE0Xgync3rb9elRGwvEijWwjewjMXy82vV4C0stTcE9OaygH+xxpvvVb1s1hN+GJIVTGC9+ZpXkwbCJWOKwwf4nHEpo+yVJMAVMBUO6+vldJg2BVxbGWB3uoM3mUMCXkwG+dug22kHnehAnhCT1RDwuJ9jRA9yiKcIo15WIUBTanGnbSEhcy+3kEWmjwmqyD+PibF6TMWolpbQ+jVKsbotHNaFNmE1QJy1qpe1Q4O3snEgr7vzwBN7CPxjh7xuKTDdjrXdUpRyrba10yUDQ0Yum0mnktrI7UJLbUP7xDDPcmjfydB6abomx/5DFJXY12gi9ucG5+zoETPYPDO8AKKo2fkH+QuBg1nQTncAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYtMjlUMTc6MjY6MTgrMDA6MDDFZPdpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTI5VDE3OjI2OjE5KzAwOjAwEk5EYQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
          alt="sun"
          className="select-none"
          width={16}
          height={16}
        />
        <div className="dark:translate-x-[24px] bg-title-dark rounded-full absolute top-[2px] left-[2px] h-[22px] w-[22px] transition-transform translate-x-0 transform duration-200" />
      </label>
    </div>
  )
}
