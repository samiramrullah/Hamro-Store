import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { categoryEnum } from '../../utils/Enum';
import axios from 'axios';

const AddProduct = () => {
  const [formState, setFormState] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    quantity:'',
    image: null as File | null,
  });

  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormState({
        ...formState,
        [name]: file,
      });
    } else {
      setFormState({
        ...formState,
        [name]: name === 'price' ? Number(value) : value, // Convert price to number
      });
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(formState).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    axios.post(`${process.env.REACT_APP_KEY}product/addproduct`, formData, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((res) => {
      if (res.data.status) {
        toast.success(res.data.message, { position: 'top-right' });
        setFormState({
          name: '',
          price: '',
          description: '',
          category: '',
          quantity:'',
          image:  null,
        })
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message, { position: 'top-right' });
    });
  };

  const categories = Object.values(categoryEnum);

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">Product Details</h2>

      <form onSubmit={onSubmitHandler}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700">Name *</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              name='name'
              required
              onChange={onChangehandler}
              value={formState.name}
            />
          </div>
          <div>
            <label className="text-gray-700">Price *</label>
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              name='price'
              required
              type='number'
              onChange={onChangehandler}
              value={formState.price}
            />
          </div>
          <div>
            <label className="text-gray-700">Quantity *</label>
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              name='quantity'
              required
              type='number'
              onChange={onChangehandler}
              value={formState.quantity}
            />
          </div>
          <div>
            <label className="text-gray-700">Description *</label>
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              name='description'
              required
              type='text'
              onChange={onChangehandler}
              value={formState.description}
            />
          </div>
          <div>
            <label className="text-gray-700">Category *</label>
            <select name='category' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              required 
              value={formState.category}
              onChange={onChangehandler}>
              <option value="" disabled selected>Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-700">Image *</label>
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              name='image'
              required
              type='file'
              onChange={onChangehandler}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default AddProduct;
