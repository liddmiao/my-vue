const getRoutes = (req, res) => {
  res.json({
    code: 200,
    data: [
      {
        name: '首页',
        path: '/',
        active: true
      },
      {
        name: '导航1',
        path: '/nav1',
        children: [
          {
            name: '子导航',
            path: '/chid1'
          }
        ]
      }
    ]
  })
}

module.exports = {
  getRoutes
}