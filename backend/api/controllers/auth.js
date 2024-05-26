exports.register=async(req,res,next)=>{
    try {
        const {name,email,age}=req.body;

    } catch (error) {
        return res.status(400).json({
            status:true,
            message:"Failed to Register"
        })
    }
}
