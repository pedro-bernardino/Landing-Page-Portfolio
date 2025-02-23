

function SocialLink({href, src}) {
  return (
      <a
        href={href}
        target="_blank"
      >
        <img src={src} alt="logo" />
      </a>
  )
}

export default SocialLink
