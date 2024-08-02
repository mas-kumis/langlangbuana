import { useGetAllUsersQuery, useDeleteUserMutation, useUpdateUserMutation} from '../redux/api/usersApiSlice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";


const UserList = () => {
    const { data: users, refetch, isLoading} = useGetAllUsersQuery()
    const [deleteUser] = useDeleteUserMutation()
    const [updateUser] = useUpdateUserMutation()

    const [editableUserId, setEditableUserId] = useState(null)
    const [editableUserusername, setEditableUserusername] = useState(null)
    const [editableUseremail, setEditableUseremail] = useState(null)

    useEffect(() => {
        refetch()
    }, [refetch]) 

    const deleteHandler = async(id) =>{
        if(window.confirm("Arer you sure")){
            try{
                await deleteUser(id)
                refetch()
            }catch(err) {
                toast.error("error")
            }
        }

    }

    const toogleEdit = (id,username, email ) => {
        setEditableUserId(id)
        setEditableUserusername(username)
        setEditableUseremail(email)
    }

    const handleUpdate = async(id) =>{
        try{
            await updateUser({
                userId :  id,
                username : editableUserusername,
                email : editableUseremail
            })
            setEditableUserId(null)
            
            toast.success("Updated")
            refetch()

        }catch(error){
            toast.error(error.data.message || error.error)
        }
    }
  return (
    <div>
      <h1>UserList</h1>
      <div>
        {isLoading ? <h1>Loading...</h1> : (
            <table className="table-auto border border-slate-500">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Admins</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && (
                        users.map(user => (
                        <tr key={user._id}>
                            <th className="text-xs font-thin">{user._id}</th>
                            <td>
                                {editableUserId === user._id ? ( 
                                    <div className="flex">
                                        <input type='text' value={editableUserusername} onChange={e => setEditableUserusername(e.target.value)}/>
                                        <button onClick={()=> handleUpdate(user._id)}><FaRegCheckCircle/></button>
                                    </div> ): (
                                    <div className="flex">
                                        <p>{user.username}</p>
                                        <button onClick={()=> toogleEdit(user._id, user.username, user.email, )}><MdModeEditOutline/></button>
                                    </div> )}
                            </td>
                            <td>
                            {editableUserId === user._id ? ( 
                                    <div className="flex">
                                        <input type='text' value={editableUseremail} onChange={e => setEditableUseremail(e.target.value)}/>
                                        <button onClick={()=> handleUpdate(user._id)}><FaRegCheckCircle/></button>
                                    </div> ): (
                                    <div className="flex">
                                        <p>{user.email}</p>
                                        <button onClick={()=> toogleEdit(user._id, user.username, user.email, )}><MdModeEditOutline/></button>
                                    </div> )}
                            </td>
                            <td>
                                {user.isAdmin ? <FaRegCheckCircle/> : ""}
                            </td>
                            <td>
                                <button onClick={()=> deleteHandler(user._id)}> Delete </button>
                            </td>
                        </tr>
                    )) )}
                </tbody>
            </table>
        )} 
      </div> 
    </div>
  )
}

export default UserList
