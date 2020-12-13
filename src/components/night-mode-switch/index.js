import React from 'react'
import styles from './styles.module.css'

export default function NightModeSwitch({
  checked,
  onCheckedChange,
  className
}) {
  return (
    <div className={className}>
      <input
        readOnly
        className={styles.checkbox}
        id="night-mode-checkbox"
        type="checkbox"
        checked={checked}
        onClick={() => onCheckedChange(!checked)}
      />
      {/* eslint-disable-next-line */}
      <label className={styles.label} htmlFor="night-mode-checkbox">
        <div className="h-4 w-4 select-none">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABBwAAAQcBH5TRWAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASISURBVEiJnZZbTBRnFMfPN/e9wQILyy67ArorIEWlWBGQGEura5tGn2hqaAlKUStSFGNfRGKatjFtakOvEGyrrUZJH0yaiJWaKqEoLUXBigZqoFmuLux9YS8z8/WhLlnKLFr/j+f2mzPfOd8MwhjDk6iiQJfG0qiKZVGxKEAaKyMwzaA5t0MgfF5+/7c9U1ek8qjHFd6dn7iOIMjjRqNsRX5xXGpGjopLM8mBohB83Thi6+5w3EAqeUe0fBStg+MIEZMbk+tphqg+cHQFa85SqsI+jAFaTo5M9XY7L3zVMVGLHxWpzEsyMQrqZ79P2JPa+7C9AWORiEYeK9Cez8hR1Z5ofkYTWRwA4MrFqZmeLscPX14ff3u+eGGSSRZLdVbULNNlro05Z39B/x4AgCSgMl9XXlSSsLb2mEktU5ALfD6vAD+2TrjnPPidSPucNzgDCAmmTCWjiiEDTmeoQxLwRn5yuiaZfv/1vcvMUvCzzVbrrFc8eKZv0rfA3u90kCS0NdTeGxroc9uBFvsB/nMGpaWITLbr+2qOmrJNmQrJV3ewvP/eyZ9GV0k6JbSgA8WI9iXzKiUXrfjEqB/4EL79pMUXAWgKNr9SqkuJFnz3tsfu8QhXnxogV5IW/TKOixY8POjzYAIPPBWgxmxmSYrQMUzUyYV4DcMQGGn+D2B+k72xzuzl8SoXAKijBSfpWRUSsSHShhBCu4o0Ss6JMJvC7gz4xbbPr49ZF3UQApjg5KRjqadJ1DJKikEZkba9RbqdcTHcCK2nH6zbqG6kaGiI9M8DvuuxTUxPBaTH55HMWUqQKcgdFZvT58/J7xd8GzbFo0/OrEna/pqeJSi0tTxPu3oRAAAgFMQ44BejAkgKQcnLSRzyzVaEbUo19WKaWc4BAFAUgryCuDitnq2SBIgi7v/rvnfJ+3vrDq1WrqTqyjYkxAAAKBQ0OttkdZ9vsU5eODXquHbZ1myfwcfC8Qs2uWJ9kqX4eU3jrto0yWsirL7fXd6mj4bvBYRQyalOmwcAYP+mlE9ZGSriH8gKGoeGApIAAIBDFsOlw++u3KY3Rl0HAAC4dcNpb/p4eDCE+S1hiJQWDf2M2//mFycezPChpb90uQXq+D116ZlKjumvWK99a886REvFzXdQ+aw+lUzwO5va7a59RbojuUXqmqpD6VGvjbCCAREunhu3XrtsC/BBaAnxYq9ICwOnu6bH5gEHLcYjgiBWEwSadbkFi884aVWPJ39WXJKw/dXdhiW3O6yAX4TBu57grW7X1K2bTpnHzXuMsqmVRI3ZzAb9Ql39h5nGsipjujqGON3aioXmzol9f952VdcfGBi/84cr+DgAyxGQnRvDaPWsyHDkbyGCL274BfMIYwx1FsOvOc/FLp8cDZD373jKIv8QyvMNCTJG/N6YzmVs2pJoMKTJaL2RA4b9tyuMAWyTAei8OjPd2T5tc7iCh7+5+fDSgjMoz9OuJkmUJZcTa+b40AdSU1FeqEmhEVWsUlLb+BAupGikiI2j/5718NMer9DnnxN6fRTT1tplnYvM+wfCRNlMdRjIlQAAAABJRU5ErkJggg=="
            alt="moon"
            className="h-full w-full"
          />
        </div>
        <div className="h-4 w-4 select-none">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQjSURBVEiJlZXNa1RnFMZ/5733zkeSSdLEoiZ+BapRsElB7KZFFNQuMm66a5UKFRcGdTMxCFkLZepsEomLgqBg+weYbupCCC4tNFZqogsDNRExiY6ZOF/3vqeLmZs4zozQs7vvPe/znOd8vaKqNLLstbN9Gjg3fMc7uen8xGIjn6VrF3rcoHxbnODHjvO/PGvkYxqiA1ivCzjs2dJweJSfzaTys5lU+F39d7jq29CaEnRcnPwTmFaVHoDC08whEU2LaLrwNHMIoPpvuurb0NymCoBOEzm+amwbc+kEODfXA7LcZC494LjupYQ1uY9hyIc1KM5d/VmVfRidUZUZ0AXEXBbV5Pt+KjKF2p9AekV0ECuDIjyO9o9c+qgCVfYhDKEyJJUYoOQTLOQQUxEgrR6S8JJEnGSVDQQa9YubvXa2D+t1refR6AwqQ6GD/+gV/vMsJhrBiUYqeKH8ra2YnW1gKqFgdCa8lx0fPoAprxgNnBuq9sGb8XN3KwpkJkQp3f8X/3kWRHAiXl10+mKNYGYZfMv7d9+Mn7urah9o4NwwvuOdFNErouovpc8kQBcA/LklbK5YCcx1QKReP0Dexz5bDSkXltJnEqLqi+gV3/FO1hZ5Lp3Ii/MrRT9ZvDe/nlTjePyxGPDltihPVkq8Lli+6Wvht39ynNrTARGL2d8FHdGpuAbf0z8aMm7MQeFp5lAB56GoJnU5X1MxedHJ8eIWuh2PPV0RPvvEwzHCd/Et2CdtUDbwtoSoJgs4D8M5WSfIz2ZSWL0HugvALudrc71pFbMtDxFLd9xhT1el2M7WArItD55Fc37ovQur98KJbzxoH6Rb3RLS1sC1JUBagoYQNQrie1MZjBwBmQcw3fFaAmvR4ONAGwHIPEaOxPemMusEALHdqekYwYCKTEl3vK5rgnyx8SSF1h5BRaZiBAOx3anpdeJXE+d7PFsaVpWeYvndhfYTn38hyH1/bhn/2etaua6LE4/WkcuncczuDhT9+u2dv/+Kei0TIrpYNpFJ4wbl26oyhsj2zSO31kB6Adz+bkwiWgNkfR8/9w5b9jfUxF1MXyKk6t08cmsNke2qMuYG5dvGih0Ty8HOi9ePAYjoYAgY+Wo77s7OmohVlSBfoJx7h3Z4OIPd4FZ3VPVu58Xrx8Ry0Iodq9umhdmrUwhD759pMcC+XEOX82hgkfYoTm8b0hqprYPye2zvSM3Wres9ER6rQs26jrmXnR3tSXa0b2CJTGmDdV2H1+xNDu3l1R9aN5/Ybwo4D8NBBJmPEQy8vPPIVurW3Jq/yVS2YtRrmaB/dBXDacACFsNp+kdXo17LRLiF/zdBdnz4AKpHRXQRKnOiKqOqMhr2uYguono0Oz58oBlO8zfZlFckMI/LJjIZHoXTGVrZRCa9oPQtprzSDOY/xSjdsFOQG8wAAAAASUVORK5CYII="
            alt="sun"
            className="h-full w-full"
          />
        </div>
        <div className={styles.thumb} />
      </label>
    </div>
  )
}
