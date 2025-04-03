import { Link, useParams } from 'react-router-dom';

function ProductDetailsPage() {

    const params = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            <Link to=".." relative='path'>Back to Products</Link>
        </>
    );
}

export default ProductDetailsPage;