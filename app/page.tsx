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
    <div className="flex w-screen h-screen justify-center items-center">
      <ul>
        {
          navigation.map(item => (
            <li key={item.name} className="py-2 hover:text-blue-400 transition-all duration-200">
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
