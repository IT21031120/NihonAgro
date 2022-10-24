// creating routes
// crud function requests

const express = require('express');
const posts = require('../posts');
const Posts = require('./posts');

const router =  express.Router();

// save posts

router.post('/post/save',(req,res) => {
// 
    let newPost = new posts(req.body);

    newPost.save((err) =>{
        if (err) {
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Post saved successfuly"
        });
    });

});

//get post
router.get('/posts',(req,res) =>{

    posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            exitingPost:posts
        });
    });
});

//update posts
router.put('/posts/update/:id',(req,res) =>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json(({error:err}));

            }

            return res.status(200).json({
                success:"Update Succesfully"
            });
            
        }
    )
});
//delete post
router.delete('/posts/delete/:id',(req,res) =>{
    posts.findByIdAndRemove( req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfully",deletedPost
        });
        

    }); 
        

            
        
    
});


module.exports = router;