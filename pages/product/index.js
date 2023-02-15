import Link from 'next/link' //client-side routing

function ProductList({productId = 100}) {
    return (
    <>
    <Link href= "/"> <a>Home</a>
    </Link>
    <h2> 
        <Link href='/product/1'> <a>Product 1</a>
        </Link>
    </h2>
    <h2> 
        <Link href='/product/2'> <a>Product 1</a>
        </Link>
    </h2>
    <h2> 
        <Link href='/product/3'> <a>Product 1</a>
        </Link>
    </h2>
    <h2> 
        <Link href={`/product/${productId}`}> <a>Product {productId}</a>
        </Link>
    </h2>
    <h2> 
        <Link href='/product/3' replace> <a>Product 1</a> 
        </Link> 
    </h2> 
    </> //replace prop will replace the current history state isntead of adding a new url to the stack
    )
}
export default ProductList

