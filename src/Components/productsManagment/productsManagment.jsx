import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/slices/productsSlice";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    img: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...form, id: Date.now().toString() }));
    setForm({
      id: "",
      name: "",
      price: "",
      category: "",
      img: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <Input
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
        <Input
          label="Image URL"
          name="img"
          value={form.img}
          onChange={handleChange}
        />
        <Button type="submit" color="green" ripple={true} variant="filled">
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default ProductManagement;
