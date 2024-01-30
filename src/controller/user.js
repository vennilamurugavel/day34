

const user=[
    {
        id:1, 
        name:"vennila",
        email:"vennilageo@gmail.com",
        username:"nila",
        password:"1232",
        status:true
    }
]
const findIndex=(array,id)=>{
    for(let i=0;i<array.length;i++)
    {
        if(array[i].id==id)
        return i
    }
    return -1
}
const getAllUsers=(req,res)=>{
    try{
        res.status(200).send({
            message:"user data fetched",
            user
        })
    }catch(error){
        res.status(500).send({
            message:"internal server"
        })

    }
}

const getUserById=(req,res)=>{
    try{
        let {id}=req.params
        let index=findIndex(user,id)
        if(index!==-1)
        {
res.status(200).send({
    message:"user data fetched successfully",
    user:user[index]
}) 
        }
   else
   {
    res.status(400).send({
        message:"invalid user id"
    })
   } 
    }    catch(error){
    res.status(500).send({
        message:"internal server error"
    })
   }
    }
    const addUser=(req,res)=>{
try{
let id=user.lenght?user[user.length-1].id+1:1
let data=req.body
data.id=id
user.push(data)

res.status(201).send({
    message:"user creted"

} )

}catch(error){
    res.status(500).send({
        message:"internal server error"
    })
}

    }
    const editUserById=(req,res)=>{
        try{
            let {id}=req.params
            let index=findIndex(user,id)
            if(index!==-1)
            {
                req.body.id=Number(id)
                user.splice(index,1,req.body
                )
                res.status(200).send({
                    message:"user data edited ",
                    user:user[index]
                })
            }
            else{
                res.status(400).send({
                message:"invalid"
                })
            }
        }catch(error){
            res.sta(500).send({
                message:"internal error"
            })
        }
    }
    const deleteUserById=(req,res)=>{
        try{
            let {id}=req.params
            let index=findIndex(user,id)
            if(index!==-1)
            {
                user.splice(index,1)
                res.status(200).send({
                    message:"user data deleted ",
                })
            }
            else{
                res.status(400).send({
                message:"invalid"
                })
            }
        }catch(error){
            res.sta(500).send({
                message:"internal error"
            })
        }
    }
    export default{
        getAllUsers,
        getUserById,
        addUser,
        editUserById,
        deleteUserById

    }
    