// const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Comment = require('../models/comment');



router.get('/blogs', async(req, res) => {
    
    const blogs =await Blog.find({});

    res.render('blogs/index',{blogs});
})

// Get the form to  add new blog

router.get('/blogs/new', (req, res) => {
    res.render('blogs/new');
})


// Create new Blog

router.post('/blogs', async (req, res) => {

    await Blog.create(req.body.blog,);
    res.redirect('/blogs');
})

// To show a particular blog

router.get('/blogs/:id', async (req, res) => {

    const blog = await Blog.findById(req.params.id).populate('comments');

    res.render('blogs/show' , { blog });

})


// To get the edited Blog
router.get('/blogs/:id/edit', async(req,res) => {
    
    const blog = await Blog.findById(req.params.id);

    res.render('blogs/edit', {blog});
});

// Update a particular blog
router.patch('/blogs/:id', async(req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body.blog);

    res.redirect(`/blogs/${req.params.id}`);
});


// delete a particular blog

router.delete('/blogs/:id' ,async(req, res) => {

    await Blog.findByIdAndDelete(req.params.id);

    res.redirect('/blogs');

});


// Creating a new comment on a blog

router.post('/blogs/:id/comment', async(req, res) => {
    
    const blog = await Blog.findById(req.params.id);
    
    const comment = new Comment(req.body);
    console.log(comment);

    blog.comments.push(comment);

    await comment.save();
    await blog.save();

    res.redirect(`/blogs/${req.params.id}`);
});



module.exports = router;