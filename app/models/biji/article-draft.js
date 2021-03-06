let mongoose = require("mongoose")

let schema = new mongoose.Schema({
	// 文章ID
	id: Number,
	// 文章名称
	title: String,
	// 描述
	article_describe: String,
	// 文章内容
	content: String,
	// markdown语言
	markdown: String,
	// 作者ID
	author_id: Number,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	// 浏览量
	views: Number,
	// 一级分类
	article_classify_level_first: Number,
	// 二级分类
	article_classify_level_second: Number,
	// 一级分类(新)
	levelFirst: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'webascii_biji_category'
	},
	// 二级分类(新)
	levelSecond: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'webascii_biji_category'
	},
	// 文章预览图
	article_image_view: String,
	// 创建时间
	c_time: {
		type: Date,
		default: Date.now
	},
	// 更新时间
	m_time: {
		type: Date,
		default: null
	},
	/**
	 * 是否可用
	 * 1:是否可用
	 * 0:不可用
	 */
	is_enable: {
		type: Number,
		default: 1
	},
})

module.exports = db.model('webascii_biji_article_draft', schema)
