// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = id => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

const NOTION_TOKEN = process.env.NOTION_TOKEN
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
const API_ENDPOINT = 'https://www.notion.so/api/v3'
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')

module.exports = {
  NOTION_TOKEN = "c941ed0135d926a01621a48ebdd7839df890d82297994bb82a7c8a15ae5171ddcd2c5197e4f252776fb5ae9dc513c32033750ff73ad1d3ba8fadbc507678a1d6f2c5dbc0386ccdbb0718b7a3e4e0",
  BLOG_INDEX_ID = "296b789580cc443da66d335d41244c9a" ,
  API_ENDPOINT,
  BLOG_INDEX_CACHE,
}