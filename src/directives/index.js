/**
 * 全局指令注册
 */
export default {
  install(app) {
    // https://cn.vitejs.dev/guide/features.html#glob-import
    // import.meta.globEager 为同步导入
    const directives = import.meta.globEager('./modules/*.js')
    console.log('【directives】', directives)
    for (const [key, value] of Object.entries(directives)) {
      // 拼接组件注册的 name
      const arr = key.split('/')
      const directiveName = arr[arr.length - 1].replace('.js', '')
      // 完成注册
      app.directive(directiveName, value.default)
    }
  }
}

// /**
//  * 全局注册指令
//  */
// export default {
//   async install(app) {
//     const directives = import.meta.glob('./modules/*.js')
//     console.log('【directives】', directives)
//     for (const [key, value] of Object.entries(directives)) {
//       const d = await value()
//       // 拼接组件注册的 name
//       const arr = key.split('/')
//       const directiveName = arr[arr.length - 1].replace('.js', '')
//       // 完成注册
//       app.directive(directiveName, d.default)
//     }
//   }
// }
