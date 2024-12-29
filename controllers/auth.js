exports.users = (req,res) =>{
    res.json({
        users:[
            {
                name:"vishnu",
                age:22
            },
            {
                name:"valli",
                age:19
            }
        ],
    })
}


