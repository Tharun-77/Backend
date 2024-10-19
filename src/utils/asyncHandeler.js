const  asyncHandeler = (requestHandeler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandeler(req,res,next)).
        catch((err)=> next(err));
    }
}


export {asyncHandeler};

// const asyncHandeler=(func)=>{};
// const asyncHandeler=(func)=>()=>{};
// const asyncHandeler=async (func)=>()=>{};
// const asyncHandeler= (func)=>async (req,res,next)=>{
//     try {
//         await func(req,res,next);
//     } catch (error) {
//         res.send(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
