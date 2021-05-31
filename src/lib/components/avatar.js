import React from 'react'
import PropTypes from 'prop-types'
import AvatarBauhaus from './avatar-bauhaus'
import AvatarRing from './avatar-ring'
import AvatarPixel from './avatar-pixel'
import AvatarBeam from './avatar-beam'
import AvatarSunset from './avatar-sunset'
import AvatarMarble from './avatar-marble'

import toImg from 'react-svg-to-image'

const variants = ['pixel','bauhaus','ring','beam','sunset','marble']
const deprecatedVariants = {geometric: 'beam', abstract: 'bauhaus'}
const downloadImageFn = (name, variant) => () => toImg('svg', `${name}${variant}Img`.replace(/\s/g, ''), {
          scale: 3,
          format: 'png',
          quality: 1,
          download: true, })

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  size = 40,
  ...props
}) => {
  const onClick = downloadImageFn(name, variant)
  const avatarProps = {colors, name, size, onClick, ...props}
  const checkedVariant = () => {
    if(Object.keys(deprecatedVariants).includes(variant)) {
      return deprecatedVariants[variant]
    }
    if(variants.includes(variant)) {
      return variant
    }
    return 'marble'
  }
  const avatars = {
    pixel: <AvatarPixel {...avatarProps}/>,
    bauhaus: <AvatarBauhaus {...avatarProps}/>,
    ring: <AvatarRing {...avatarProps}/>,
    beam: <AvatarBeam {...avatarProps}/>,
    sunset: <AvatarSunset {...avatarProps}/>,
    marble: <AvatarMarble {...avatarProps}/>,
  }
  return avatars[checkedVariant()]
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(variants)
}

export default Avatar
