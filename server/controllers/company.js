const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Post_Job = require('../models/job_req');
const Company = require('../models/company');

exports.signup = (req, res, next) => {

    const company_name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;

    bcrypt
        .hash(password, 10)
        .then(hashedPass => {
            const company = new Company({
                name: company_name,
                email: email,
                password: hashedPass
            });
            return company.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'Signup Successfuly',
                companyId: result._id
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.login = (req, res, next) => {

    const email = req.query.email;
    const password = req.query.password;

    let loadedUser;
    Company.findOne({ email: email })
        .then(user => {
            if (!user) {
                res.status(400).json({
                    message: 'No such a user'
                })
                const error = new Error('No such a user');
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user
            return bcrypt.compare(password, user.password)
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                email: email,
                companyId: loadedUser._id.toString()
            },
                'thisismysecret',
                { expiresIn: '1h' }
            );
            res.status(200).json({
                token: token,
                companyId: loadedUser._id.toString()
            })
            .catch(err => {
                console.log(err)
            })
        })
}

exports.postJob = (req, res, next) => {
    const post = new Post_Job({
        position_name: req.query.jobTitle,
        job_description: req.query.description,
        required_skills: req.query.skills,
        experience_years: req.query.experienceYears,
        qualification: req.query.qualification,
        salary: req.query.salary,
        prefered_age: req.query.preferedAge,
        job_type: req.query.jobType
    });

    post.save()
        // .then(result => {
        //     return Company.findById("5e9e2a906b3baa1a90a877fa")
        // })
        // .then(company => {
        //     creator = company;
        // })

    res.status(201).json({
        message: 'post created successfuly',
        post: post
    });
};

exports.getPosts = (req, res, next) => {
    Post_Job
        .find()
        .then(posts => {
            console.log(posts)
            res.status(200).json({
                message: 'Fetched posts successfully.',
                posts: posts.reverse()
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId;

    Post_Job.findByIdAndDelete(postId)
        .then(result => {
            res.status(200).json({
                message: 'Deleted '
            })
        })
}