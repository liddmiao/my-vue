const getRoutes = ctx => {
  ctx.body = {
    code: 200,
    data: [
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
  }
}

module.exports = getRoutes