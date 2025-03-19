import style from './SocialLink.module.css'

function SocialLink({href, src}) {
  return (
      <a 
        href={href}
        target="_blank"
      >
        <img className={style.socialLogo} src={src} alt="logo" />
      </a>
  )
}

export default SocialLink
