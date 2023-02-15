import Link from 'next/link'  //for link navigation
import { useRouter } from 'next/router'

function Home() {
const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/product')
    }
    return(
        <div>
            <h1>Home Page</h1>
            <Link href='/blog'> <a>Blog</a>
            </Link>
            <Link href='/product'> <a>Products</a>
            </Link>
            <button onClick= {handleClick}>
                Place order
            </button>
        </div>
    )

}
export default Home