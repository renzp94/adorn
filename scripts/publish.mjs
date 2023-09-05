#!/usr/bin/env zx
import { spinner } from 'zx/experimental'
// 是否重新发布，用于打包及版本更新后发布时出错后使用
const isRepublish = argv.r

let packageName = "packages"


// 移动到包目录
cd(`./${packageName}`)

const pkg = await fs.readJson('./package.json')
let version
// 更新版本号
if(!isRepublish){
  const updateTypes = ['patch', 'minor', 'major']
  do {
    if (version) {
      echo(chalk.yellow(`当前输入的update_type错误：${version}`))
    }
    version = await question(
      `当前版本：${chalk.blue(pkg.version)},请输入更新版本的<update_type>(${chalk.blue(
        'patch<小版本>'
      )}, ${chalk.blue('minor<次版本>')}, ${chalk.blue('major: <主版本>)')}: `
    )
  } while (!updateTypes.includes(version))
  // 更新版本
  version = (await $`pnpm version ${version}`)?.stdout?.replace('\n', '')?.toUpperCase()
} else {
  version = pkg.version
}

// 打包
try {
  await spinner(chalk.blue('生产包构建中...'), () => $`pnpm prepublishOnly`)
  echo(chalk.green('构建成功'))
} catch (err) {
  throw Error(err)
}

const publishFlags = ['--access=public', '--no-git-checks']
// 发布
await spinner(chalk.blue('发布中...'), () => $`pnpm publish ${publishFlags}`)
echo(`✨ ${chalk.blue(`${pkg.name} ${chalk.bold(version)}`)}发布成功`)
// 提交
cd('../')
await $`git add ./${packageName}`
await $`git commit -m "chore(${packageName}): publish ${version}"`

