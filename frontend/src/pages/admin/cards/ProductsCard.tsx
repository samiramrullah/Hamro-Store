import { ToastContainer, toast } from 'react-toastify'
import { ProductInterface } from '../AllProducts'
import axios from 'axios'

const ProductsCard = (props: ProductInterface) => {

  const deleteProduct = () => {
    axios.delete(`${process.env.REACT_APP_KEY}product/deleteproductbyid?productId=${props._id}`,{headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
    }})
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message, { position: 'top-right' })
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message, { position: "top-right" });
      });
  }
  return (
    <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
      <div className="bg-white flex flex-col h-full">
        <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img src={`${process.env.REACT_APP_KEY_IMAGE}${props.image}`} alt={props.name}
            className="h-full w-full object-cover" />
        </div>
        <div className="p-6 text-center flex-1">
          <h3 className="text-lg font-bold text-gray-800">{props.name}</h3>
          <h4 className="text-xl text-gray-800 font-bold mt-3">Rs.{props.price}</h4>
        </div>
        <button onClick={deleteProduct} type="button" className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full">Delete</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductsCard