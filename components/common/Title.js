

export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title, data }) => {
  return <h1 className='titleSm' data-aos={data}>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
