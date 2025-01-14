import Link from "next/link"


const navigation = [
  {
    "name": "Flex shrink",
    "href": "/shrink"
  },
  {
    "name": "Responsive nav",
    "href": "/nav"
  }
]

export default function Home() {
  return (
    <div className="flex w-screen justify-center">
      <ul>
        {
          navigation.map(item => (
            <li key={item.name}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
