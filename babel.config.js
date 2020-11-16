module.exports = (api) => {
  const prod = api.env('production')
  const dev = api.env('development')

  let presetConfig = {
    env: '@babel/preset-env',
    react: '@babel/preset-react',
  }

  const plugins = ['@babel/plugin-proposal-class-properties']

  let presets = []
  let modules = false

  presets = [
    [
      presetConfig.env,
      {
        modules,
      },
    ],
    presetConfig.react,
  ]

  return { presets, plugins }
}
