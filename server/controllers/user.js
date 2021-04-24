const userResume = require('../models/user_resume')
const Post = require('../models/post');
const User = require('../models/user');


exports.addPost = async (req, res, next) => {

    const userId = req.user.userId;

    const postBody = req.body.body;
    let imageUrl = req.body.image;

    if (req.file) {
        imageUrl = req.file.path;
    }
    if (!imageUrl) {
        return res.status(422).json({
            msg: 'no file picked'
        })
    }
    const user = await User.findById(userId);

    try {
        const post = new Post({
            body: postBody,
            imageUrl: imageUrl,
            userId: userId
        })

        //save the post to the database 
        const postPromise = await post.save();
        console.log(postPromise._id)

        //add the post the the user database
        user.posts.push(post);
        const result = await user.save();
        console.log(result);

    } catch (err) {
        return res.status(403).json({
            msg: 'unexpected error happens',
            error: err
        })
    }


    res.status(201).json({
        msg: 'post add successfully',
        body: postBody,
        user: user.userName
    })
};

exports.editPost = async (req, res, next) => {
    const postId = req.query.postId;

    const postBody = req.body.body;
    let imageUrl = req.body.image;

    if (req.file) {
        imageUrl = req.file.path;
    }
    if (!imageUrl) {
        return res.status(422).json({
            msg: 'no file picked'
        })
    }

    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).json({
            msg: 'Post not found'
        })
    };

    console.log('old post : ' , post);


    if (post.userId.toString() !== req.user.userId) {
        return res.status(404).json({
            msg: 'Not authorized to edit post'
        })
    };

    post.body = postBody;
    post.imageUrl = imageUrl;
    post.updatedAt = Date.now();
    const postEdited = await post.save();

    console.log('edited Post : ', postEdited);

    return res.status(201).json({
        msg: 'hahhhahah good',
        updatedPost: postEdited
    })

}

exports.addResume = (req, res, next) => {
    const category = req.query.category;
    const dsecription = req.query.dsecription;
    const skills = req.query.skills;
    const exp_years = req.query.exp_years;
    // const exp_work = req.query.exp_work;
    const country = req.query.country;
    const city = req.query.city;

    const resume = new userResume({
        category: category,
        dsecription: dsecription,
        skills: skills,
        experienceYears: exp_years,
        address: {
            country: country,
            city: city
        }
    });

    resume.save();

    res.status(201).json({
        message: 'posted successfully',
        resume: resume
    })

}