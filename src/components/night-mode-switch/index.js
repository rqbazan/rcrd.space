export default function NightModeSwitch({
  checked,
  onCheckedChange,
  className
}) {
  return (
    <div className={className}>
      <input
        readOnly
        className="hidden"
        id="night-mode-checkbox"
        type="checkbox"
        checked={checked}
        onClick={() => onCheckedChange(!checked)}
      />
      {/* eslint-disable-next-line */}
      <label
        className="cursor-pointer flex items-center justify-between relative rounded-full bg-wording p-[5px] h-[26px] w-[50px]"
        htmlFor="night-mode-checkbox"
      >
        <div className="h-4 w-4 select-none">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATRSURBVEiJnVVrTJNXGH6+Sy+0hV6ktlCKY1DZrAbEgRgcdd6Y8TLmxJkFoy4umdnMxtzIYrLIMjNNFhc3b5uZaKLLnItzyzIFnYtDhlpv5apQi0BLL2Ch1JZ+fO33dT/URqWo7Pn5vu95nnPe857zEHgK8pdtKtaoktazkfC0kREmACDC8/wwy3K3Blm+uqN2V+OT1hNxo1VV5KJOVAko4t0XDfokU2Ge6HZvf/DmjaYElUJKAkCICcPc4rijUip7+33+3ed//vIAgOjjVNTjgdlvVDxvHBZYpmenLd6wpkxWVJBHJ6uU0KhVwuM19R5tslRGEARCI2FeKlPc/eLjd7J0muQFw2L9UlJtPOntNN8dU2DO8spClVLeUDr3JfVri18lJBJJLCcSCjA1OyvhbEOz230n4JMrJoTfX1umoSkKOm2ywDQzN63L7lwmU+detHfUO0e1KHvh+gzjpPSmRS/nyOYUm0CS5JNaGxccx2HL1wetFstN043z+10AcI+lrIzKTNGdy58ySTZ7VhFIksShYyex84djsHX3PrMARVHYvHG1IcugP/Fg8yQAzBMaKg06pb4wfwaEIiHcdwZAC2isWDwHNf9cGtcpJGIRVpUumFq88tN1DwQImVj0UYZeQ+j1egDARKUC/kAQR06cQVF+zrgELG232ItXm0M8x38OAEROycaCmdPSLyyZN5s0Go3jInscv5+u91pamoSTUpISbT1e31Wb00TqdRMqkuVSUqvRPhOJd3AIw8zIqHiEi+CKpSWSkapIJAkSaRqFQiEUvU0TIKZIxALIFfKnku8/cgIutxvhCI8lJa+gcPqUWC7EsKBIxEYvQSyAgCaySJqkZMEQC4e7H3x01EOMgWFY2HtdmKxXwZiRjLN1j15+olQCDiTP8XwsRlKUjBzw+wU3bN3RhivN/i07Dnh8/kBcAaGARpjjwfNRDDMsEiSiUTXvrVmhvmUP9HXYfQPt3T4PTYtkxLw3K6+nKaO55eXrwIY51NaZXR+sK0uJJ2LrceLXP/+GRCLG2rIlkErEcTcTCIZA0xQ2b//+D5onyVY2EskdGvJBM1EDJsRyY7UpMz0Vn2woHysdg0yaAO/gEJhwuJP0+oK7QxGKd9i7EY5EQBL/44+IgwvXWr29fZ5qsunUrksBBv2XG1tQffSU+63l859tXp+CenOTq6VmXxMJIEoQ9F7vEBctnV+g1WnU4zpBhIuMeheXG9sDnkH/TuD+X3QmW7AVFO24ZDaDYZhYofW2Axs/24HOHifioc/rw1ff/YQ9h47D2uUAcG+cj/xW21Z3dGt1TABVVbzTw5jaur3BkzW14O/PsjxJBrVKjiSZJK5Al8ONvKnZKMqfButtB3iOx7a9hztsHT2luO9uMcPx2Bp8Kc/NOuce8K1iAoNCQ1YmEmUSmGblQZIQfxy1E1UwW9rg7htASXEBtu/70Wrrcq2+fvrb9gc1ozw5Z26FTpsqbTDoJujLVy4j1Gp1XPKHcaW5PXj4eG2r1e5+vf3M7kf6Gd/0AWJhedUmAcVVZqanJpUUF4qyJ2eCeKh6wOdHw7VW77/mRqe7f/Cbul+2VSOO6Y8lEMOMpR/mqeWJFUKh8AWpRBwGQYWCQWaYDbPWLpfz4M2/9jc/af1//hzuEBqOGNsAAAAASUVORK5CYII="
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
        <div className="dark:translate-x-[24px] bg-wording-dark rounded-full absolute top-[2px] left-[2px] h-[22px] w-[22px] transition-transform translate-x-0 transform duration-200" />
      </label>
    </div>
  )
}
