// https://stylelint.io/
module.exports = {
  // 在已有配置的基础上进行扩展
  extends: ['stylelint-order', 'stylelint-less', 'stylelint-config-standard', 'stylelint-config-standard-less'],
  // 指定需要忽略的文件,也可以通过.stylelintignore文件设置
  ignoreFiles: ['**/*.js', '**/*.ts'],
  // 默认错误级别
  defaultSeverity: 'error',
  // 自定义规则
  rules: {
    // 指定不允许使用的单位列表
    'unit-disallowed-list': ['pt'],
    // // 指定缩进
    // indentation: 2,
    // 不允许空源
    'no-empty-source': null,
    // 不允许空块
    'block-no-empty': null,
    // 不允许字体族中缺少通用族关键字
    'font-family-no-missing-generic-family-keyword': null,
    // // 块的右大括号后需要换行符或不允许有空格,单行块中的右大括号后面必须始终有一个换行符
    // 'block-closing-brace-newline-after': 'always-multi-line',
    // 块的左大括号前需要换行符或不允许有空格,单行块中的左大括号前必须始终有换行符
    // 'block-opening-brace-newline-before': 'always-single-line',
    // // 块的左大括号后需要换行符,左大括号后必须始终有换行符
    // 'block-opening-brace-newline-after': 'always',
    // // 块的右大括号前需要换行符或不允许有空格,右大括号前必须始终有换行符
    // 'block-closing-brace-newline-before': 'always',
    // 指定类选择器的模式
    'selector-class-pattern':
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
    // 要求或禁止at-rule规则前面有空行  @media
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
      },
    ],
    // 自定义属性前不允许空行
    // https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
      },
    ],
    // 不允许声明前有空行
    // https://stylelint.io/user-guide/rules/declaration-empty-line-before/
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
      },
    ],
    // // 禁止块的右大括号前有空行
    // 'block-closing-brace-empty-line-before': 'never',
    // 指定媒体功能范围的上下文或前缀表示法
    'media-feature-range-notation': null,
  },
};
