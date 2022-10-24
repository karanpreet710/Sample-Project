const {Posts,Users} = require('../db/models')

// async function createNewPost(userid,title,body){
//     const post = await Posts.create({
//         title:title,
//         body:body,
//         userId:userid   
//     })
// }

async function createNewPost(userId,title,body){
    const post = await Posts.create({
        title,
        body,
        userId 
    })
    return post
}

/* We assume that the following function is called like this-
    showAllPosts({username:''}) //Search by username
    showAllPosts({title:''}) //Search by title
*/
async function findAllPosts(query){
    const posts = await Posts.findAll({
        include:[Users]
    }) 
    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}

//Test Code

// async function task(){
    // console.log(
    //     await createNewPost(
    //         1,
    //         'This is a sample post',
    //         'Body of the post goes here'
    //     )
    // )
    // console.log(
    //     await createNewPost(
    //         2,
    //         'Another sample post',
    //         'Some body sample here as well'
    //     )
    // )
//     const posts = await showAllPosts()
//     for(let p of posts){
//         console.log(`${p.title}\nauthor:${p.user.username}\n${p.body}\n=========\n`)
//     }
// }

// task()