import { useCreateCategoryMutation, useFetchCategoriesQuery} from '../redux/api/categoryapiSlice'
import { toast } from 'react-toastify'
import { useState } from 'react'

const CategoryForm = () => {
  const  { refetch} = useFetchCategoriesQuery()
  const [name, setName] = useState('')
  const [createCategory, {isLoading}] = useCreateCategoryMutation()


  const handleCreateCategory = async (e) => {
    e.preventDefault()
    if (!name) {
      toast.error('Please fill in all fields')
      return
    }
    try { 
      const res = await createCategory({ name }).unwrap()
      toast.success('Category Created', res)
      setName('')
      refetch()
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
      
  }
  return (
    <div>
      <form onSubmit={handleCreateCategory} className='flex space-x-2 items-center'>
      <div>
        <label htmlFor="name">Name</label>
        <input className="border border-slate-300 rounded-md"type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        { isLoading ? <button  disabled className="bg-green-600 text-white p-2 rounded-md"type="submit">Loading...</button> : <button className="bg-green-600 text-white p-2 rounded-md"type="submit">Create</button> }
        
        

      </div>
      </form>
    </div>
  )
}

export default CategoryForm
