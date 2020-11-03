const db = require('../models')
const Article = db.Articles
const User = db.User
const Category = db.Categories

const articleController = {
    index: (req, res) => {
        Article.findAll({
            where: {
                is_deleted: null
            },
            include: Category,
            order: [['id','DESC']]
        }).then(articles => {
            res.render('index',{
                articles
            })
        })
    },
    show: (req, res) => {
        Article.findOne({
            where: {
                id: req.params.id
            },
            include: Category,
        }).then(article=>{
            res.render('article',{
                article
            })
        })
    },
    admin: (req, res) =>{
        Article.findAll({
            where: {
                is_deleted: null
            },
            include: Category,
            order: [['id','DESC']]
        }).then(articles => {
            res.render('admin/admin_articles',{
                articles
            })
        })
    },
    add: (req, res) => {
        Category.findAll({
            where: {
                is_deleted: null
            }
        }).then(categories => {
            res.render('add_article',{
                categories
            })
        })
    },
    handleAddArticle: (req,res, next) => {
        const {userId} = req.session
        const {title, content,category_id} = req.body
        if(!userId || !title || !content || !category_id) {
            req.flash('errorMessage', '資料輸入不齊全喔')
            return next();
        }
        Article.create({
            title,
            content,
            userId,
            CategoryId:category_id
        }).then(()=>{
            res.redirect('/admin_article')
        })
    },
    delete: (req, res) => {
        Article.findOne({
            where:{
                id: req.params.id,
            }
        }).then(article => {
            return article.update({
                is_deleted: 1
            })
        }).then(() => {
            res.redirect('/admin_article')
        }).catch(()=>{
            res.redirect('/')
        })
    },
    update: (req, res) => {
        Article.findOne({
            where:{
                id: req.params.id,
            },
            include: Category,
        }).then(article => {
            Category.findAll({
                where: {
                    is_deleted: null
                }
            }).then(categories =>{
            res.render('update_article', {
                article,categories
            })
        })
    })
    },
    handleUpdate: (req, res, next) => {
        const {title, content, category_id} = req.body
        const {userId} = req.session
        // 補 categoryId
        if(!title || !content || !category_id || !userId ) {
            req.flash('errorMessage', '資料輸入不齊全喔')
            return next();
        }
        Article.findOne({
            where:{
                id: req.params.id,
            }
        }).then((article)=>{
            return article.update({
                title,
                content,
                CategoryId:category_id
            })
        }).then(()=>{
            res.redirect('/admin_article')
        }).catch(()=>{
            return next()
        })
    },
    lists:(req, res) => {
        Article.findAll({
            where: {
                is_deleted:null
            },
            include: Category,
            order: [['id', 'DESC']],
        }).then(articles => {
            res.render('articles_list',{
                articles
            })
        })
    }
}

module.exports = articleController