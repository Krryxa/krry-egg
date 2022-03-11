export default (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Blog = app.model.define('blog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    created_at: DATE,
    updated_at: DATE,
    author: STRING(30),
    classify: INTEGER
  })

  return Blog
}
