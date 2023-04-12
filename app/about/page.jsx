import Link from 'next/link'

export const metadata = {
  title: 'About Nextjs 13',
  description: 'this for testing'
}

const AboutPage = () => {
  return (
    <div>
      <h1>About Nextjs 13</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        molestiae ipsam, et aut consequatur ipsum voluptates quasi, quos
        recusandae doloribus provident consequuntur amet nobis est voluptate
        perferendis quaerat distinctio saepe dolores perspiciatis ex ab nostrum
        eaque! Porro perspiciatis possimus, sed a quidem sunt sit doloremque
        molestiae maiores blanditiis quasi quod.
        <Link href='/'>Home</Link>
      </p>
    </div>
  )
}
export default AboutPage
