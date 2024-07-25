function NavSocialItem({item}) {
  return (
    <li>
        <a href={`${item.url}`}>
            <i className={`bi ${item.icon}`}></i>
        </a>
    </li>
  )
}

export default NavSocialItem
