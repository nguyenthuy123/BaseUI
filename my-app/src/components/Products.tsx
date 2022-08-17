// import React, { useEffect, useState } from 'react';
// import { getProducts } from '../services/productService';

// interface Posts {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
// export const Products = () => {
//     const [listPosts, setListPosts] = useState<Array<Posts>>([])

//     useEffect(() => {
//         const listBaiViet = async () => {
//             try {
//                 const result = await getProducts();
//                 console.log("ressule", result);
//                 setListPosts(result)
//             } catch (error) {
//                 console.log("error", error);
//             }
//         }
//         listBaiViet();
//     }, []);
//   return (
//     <div>
//         {
//             listPosts && listPosts.map((post: Posts) => {
//                return (
//                <div>
//                 <p>{post.userId}</p>
//                </div>
//                )
//         }
//     </div>
   
//   )
// }


import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Products = () => {
    const [listPosts, setListPosts] = useState<any>([])

    useEffect(() => {
        const listBaiViet = async () => {
            try {
                const result = await getProducts();
                console.log("ressule", result);
                setListPosts(result)
            } catch (error) {
                console.log("error", error);
            }
        }
        listBaiViet();
    }, []);

  return (
   <div>
    {listPosts && listPosts.map((post:Posts) => {
        return (
            <div>
                {post.userId === 1 ? 
                <div>
                    <p>{post.userId}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div> 
                : ""}
            </div>
        )
    })}
   </div>
  )
}

export default Products
