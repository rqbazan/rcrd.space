const cloudinaryUrl = 'https://res.cloudinary.com/dpwoyjb1f/image/upload'

const images = {
  hero: {
    resource: 'me/night_owl.jpg',
    transforms: {
      lg: 'q_auto,f_png,o_50,w_1024,h_680/w_500,h_680,c_crop,y_0,x_350'
    }
  }
}

function getUrl(image, size) {
  return `${cloudinaryUrl}/${image.transforms[size]}/${image.resource}`
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
