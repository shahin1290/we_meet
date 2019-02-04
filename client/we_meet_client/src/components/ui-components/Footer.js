import React from 'react'
import { Text } from 'tailwind-react-ui'

const Footer = () => {
  return (
    <div style={{backgroundColor: "rgba(0,0,0,.87)", paddingTop: "1rem", paddingBottom: "1rem", textAlign: "center"}}>
      <Text text="white" is="p">Copyright {new Date().getFullYear()} &copy; WeMeet</Text>
        <Text text="white" size="sm">
          Cookies are used by our fictional third party partners to track your
          browsing habits, DNA and thoughts. View our{' '}
            <Text is="a" href="#footer" text="teal" text-hover="purple-dark">
              privacy policy
            </Text>{' '}
          to attempt to manage your preferences.
        </Text>
    </div>
  )
}

export default Footer