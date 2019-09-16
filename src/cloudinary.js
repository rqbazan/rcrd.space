const cloudinaryUrl = 'https://res.cloudinary.com/dpwoyjb1f/image/upload'
const defaults = 'q_auto,f_auto'

const images = {
  hero: {
    resource: 'me/night_owl.jpg',
    transforms: {
      lg: 'w_1024,h_680/w_500,h_680,c_crop,y_0,x_350'
    }
  }
}

function getTransform(custom) {
  return custom ? `${defaults},${custom}` : defaults
}

function getUrl(image, size) {
  const customTransform = image.transforms[size]
  return `${cloudinaryUrl}/${getTransform(customTransform)}/${image.resource}`
}

export default {
  sm(name) {
    return getUrl(images[name], 'sm')
  },
  md(name) {
    return getUrl(images[name], 'md')
  },
  lg(name) {
    return getUrl(images[name], 'lg')
  }
}
