const rootConfig = require('./config/root.config.cjs')
const cozyConfig = require('./config/cozy.config.cjs')
const strictConfig = require('./config/strict.config.cjs')
const excessiveConfig = require('./config/excessive.config.cjs')

const isProd = process.env.NODE_ENV === 'production'

/**
 * Rule Resolution
 * configs of the lowest priority are added to the rootConfig. first
 * cozyConfig gets added. then, strictConfig overwrites cozyConfig. lastly,
 * excessiveConfig overwrites strictConfig (and by extension, whatever is
 * in cozyConfig)
 *
 * when editing, keep in mind it is harder to move a rule from a higher
 * priority to a lower priority (if we wish to edit)
 */

const configVariants = [cozyConfig, strictConfig, excessiveConfig]
for (const configVariant of configVariants) {
  Object.assign(rootConfig.rules, configVariant.default.rules)
  if (isProd) {
    Object.assign(rootConfig.rules, configVariant.isProd.rules)
  } else {
    Object.assign(rootConfig.rules, configVariant.isNotProd.rules)
  }
}

module.exports = rootConfig
