import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import theme from './theme'
import './index.less'

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

const req = require.context('../src/components', true, /\.stories\.js$/)
// const materials = require.context('../src/materials', true, /\.stories\.js$/)

function loadComponentStories() {
  req.keys().forEach(filename => req(filename))
}

// function loadMaterials() {
//   materials.keys().forEach(filename => req(filename))
// }

// 基本配置
addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme, 
  }
})

// 公共组件
// addDecorator(storyFn => <div>{storyFn()}</div>)
addDecorator(withInfo)

// 组件列表
// storiesOf('???', module)
configure(loadStories, module);
// configure(loadMaterials, module)
configure(loadComponentStories, module)