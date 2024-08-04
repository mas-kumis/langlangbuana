import {  useUpdateCategoryMutation, useDeleteCategoryMutation, useFetchCategoriesQuery} from '../redux/api/categoryapiSlice'
import { toast } from 'react-toastify'
import { MdDelete, MdEdit } from "react-icons/md";
import { useState, useEffect } from 'react'
import CategoryForm from './CategoryForm'

const Category = () => {
    const  {data:categories, refetch} = useFetchCategoriesQuery()
    const [name, setName] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [updateName, setUpdateName] = useState('')
    const [modal, setModal] = useState(false)

    const [updateCategory] = useUpdateCategoryMutation()
    const [deleteCategory] = useDeleteCategoryMutation()


    useEffect(() => {
      refetch()
  }, [refetch]) 
  
  return (
    <div>
      <h1>Category</h1>
      <CategoryForm className="my-8"/>
      <div className="flex space-x-4 my-8 px-4">
        {categories?.map((category) => (
          <div key={category._id} className="flex space-x-2 items-center rounded-full border border-red-500 bg-red-300 px-2">
            <h4>{category.name}</h4>
            <div className="flex items-center">
            <button onClick={() => setModal(true)}><MdEdit className="text-black"/></button>
            <button  onClick={() => deleteCategory(category._id)}><MdDelete className="text-black"/></button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Category
